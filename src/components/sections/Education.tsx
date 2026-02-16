"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-section-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading emoji="🎓" title="Education" />

        <div className="grid sm:grid-cols-3 gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-7 border border-border text-center card-glow group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {edu.emoji}
              </div>
              <h3 className="font-bold font-[family-name:var(--font-space-grotesk)] text-sm tracking-tight leading-snug">
                {edu.institution}
              </h3>
              {edu.degree && (
                <p className="text-xs text-muted mt-1">{edu.degree}</p>
              )}
              {edu.period && (
                <p className="text-xs text-muted/50 mt-0.5">{edu.period}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
