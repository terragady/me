// Generates public/og.png (1200x630) — the social share image.
// Run: node scripts/generate-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(new URL("../public/og.png", import.meta.url));

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0b"/>
      <stop offset="1" stop-color="#131316"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="0%" r="70%">
      <stop offset="0" stop-color="#2dd4bf" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#2dd4bf" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="8" height="630" fill="#5eead4"/>
  <text x="90" y="250" font-family="Inter, Helvetica, Arial, sans-serif" font-size="84" font-weight="700" fill="#ededf0">Marcin Michalik</text>
  <text x="90" y="320" font-family="Inter, Helvetica, Arial, sans-serif" font-size="36" font-weight="500" fill="#a1a1ab">Senior Software Developer · Full Stack</text>
  <text x="90" y="372" font-family="ui-monospace, Menlo, monospace" font-size="30" font-weight="500" fill="#a1a1ab">React · TypeScript · Node.js</text>
  <text x="90" y="540" font-family="ui-monospace, Menlo, monospace" font-size="34" font-weight="600" fill="#5eead4">michalik.no</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
