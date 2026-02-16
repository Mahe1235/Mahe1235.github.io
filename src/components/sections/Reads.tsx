"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { reads } from "@/data/reads";

export default function Reads() {
  return (
    <section id="reads" className="py-24 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.02]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading emoji="📚" title="Notes from Good Reads" subtitle="Product thinking, frameworks, and mental models" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {reads.map((read, i) => (
            <motion.div
              key={read.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-card rounded-xl p-4 border border-border card-glow cursor-default flex items-center gap-3"
            >
              <span className="text-xl shrink-0">{read.emoji}</span>
              <span className="text-sm font-medium leading-tight">{read.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
