"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WordReveal({
  text,
  highlights,
  className = "",
}: {
  text: string;
  highlights: string[];
  className?: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll<HTMLSpanElement>(".reveal-word");
    if (!words || !words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { color: "#d1d5db", opacity: 0.3 },
        {
          color: (i: number) => {
            const word = words[i].dataset.word ?? "";
            return highlights.includes(word) ? "#6366f1" : "#111827";
          },
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: 1.2,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [highlights]);

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="reveal-word inline-block mr-[0.28em]"
          data-word={word.replace(/[^a-zA-Z0-9]/g, "")}
          style={{ color: "#d1d5db" }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}