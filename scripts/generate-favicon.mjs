// Generates the raster icons from public/favicon.svg (the source of truth):
//   public/favicon.ico        — 16/32/48 px, PNG-compressed ICO (legacy tabs)
//   public/apple-touch-icon.png — 180x180, flattened (iOS home screen)
// Run: node scripts/generate-favicon.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const resolve = (name) => fileURLToPath(new URL(`../public/${name}`, import.meta.url));

const source = await readFile(resolve("favicon.svg"));
const icoSizes = [16, 32, 48];

const pngs = await Promise.all(
  icoSizes.map((size) => sharp(source, { density: 384 }).resize(size, size).png().toBuffer()),
);

// ICO container: 6-byte header + one 16-byte directory entry per image, then
// the PNG payloads. PNG-in-ICO is understood by every browser we care about.
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(pngs.length, 4);

let offset = header.length + pngs.length * 16;
const entries = pngs.map((png, i) => {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(icoSizes[i] % 256, 0); // width (0 means 256)
  entry.writeUInt8(icoSizes[i] % 256, 1); // height
  entry.writeUInt8(0, 2); // palette size
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += png.length;
  return entry;
});

await writeFile(resolve("favicon.ico"), Buffer.concat([header, ...entries, ...pngs]));

// iOS ignores transparency and applies its own mask, so flatten onto the page bg.
await sharp(source, { density: 384 })
  .resize(180, 180)
  .flatten({ background: "#0a0a0b" })
  .png()
  .toFile(resolve("apple-touch-icon.png"));

console.log("Wrote favicon.ico and apple-touch-icon.png");
