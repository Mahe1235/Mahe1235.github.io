"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { personal } from "@/data/personal";

const traitEmojis: Record<string, string> = {
  "Cricket Fan": "🏏",
  "Podcast Listener": "🎧",
  "Game Builder": "🎮",
  "Wanderer": "🌍",
  "Tech Explorer": "🔭",
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-section-alt relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-[0.02]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight mb-3">
            About Me
          </h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-highlight mb-10" />

          <div className="space-y-5 text-lg md:text-xl text-muted leading-relaxed">
            {personal.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Personality traits — with emojis and better styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {personal.traits.map((trait, i) => (
              <motion.span
                key={trait}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-4 py-2.5 rounded-2xl bg-card text-foreground font-medium text-sm border border-border card-glow cursor-default flex items-center gap-2"
              >
                <span>{traitEmojis[trait] || "✨"}</span>
                {trait}
              </motion.span>
            ))}
          </motion.div>

          {/* Resume download — easy access for recruiters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10"
          >
            <motion.a
              href={personal.resumeUrl}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
            >
              <Download size={16} strokeWidth={1.5} />
              Download Resume
              <ArrowRight size={14} strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
