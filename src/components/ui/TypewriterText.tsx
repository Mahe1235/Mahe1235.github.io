"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export default function TypewriterText({ words, className }: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  const word = words[currentWordIndex];

  const tick = useCallback(() => {
    if (phase === "typing") {
      const next = word.slice(0, currentText.length + 1);
      setCurrentText(next);
      if (next.length === word.length) {
        setPhase("pausing");
      }
    } else if (phase === "deleting") {
      const next = word.slice(0, currentText.length - 1);
      setCurrentText(next);
      if (next.length === 0) {
        setPhase("typing");
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentText, phase, word, words]);

  useEffect(() => {
    let delay: number;

    if (phase === "typing") {
      delay = 130;
    } else if (phase === "pausing") {
      delay = 2000;
    } else {
      delay = 60;
    }

    const timeout = setTimeout(() => {
      if (phase === "pausing") {
        setPhase("deleting");
      } else {
        tick();
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [phase, tick]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}
