"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { personal } from "@/data/personal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-section-alt relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-[0.02]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3">
              Background
            </p>
            <div className="space-y-4 text-base md:text-lg text-muted leading-relaxed">
              {personal.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* How I Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3">
              How I work
            </p>
            <div className="space-y-4 text-base md:text-lg text-muted leading-relaxed">
              {personal.howIWork.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* PM belief — highlighted callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pl-4 border-l-2 border-primary/50">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
                {personal.pmBelief}
              </p>
            </div>
          </motion.div>

          {/* Resume download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10"
          >
            <motion.a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
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
