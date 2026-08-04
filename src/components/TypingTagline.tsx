import { useEffect, useState } from "react";

interface Props {
  phrases: string[];
}

// A small React island: cycles through phrases with a typewriter effect.
// Demonstrates that React components hydrate inside Astro via `client:*`.
export default function TypingTagline({ phrases }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const done = text === current;
    const cleared = text === "";

    let delay = deleting ? 40 : 70;
    if (done && !deleting) delay = 1600;
    if (cleared && deleting) delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="animate-pulse" aria-hidden="true">
        |
      </span>
    </span>
  );
}
