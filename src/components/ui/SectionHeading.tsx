"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  emoji: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ emoji, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{emoji}</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-muted text-lg mt-2 ml-12">{subtitle}</p>
      )}
      <div className="mt-4 ml-12 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-highlight" />
    </motion.div>
  );
}
