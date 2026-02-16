"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { nowItems } from "@/data/now";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="text-primary" size={24} strokeWidth={1.5} />,
  globe: <Globe className="text-secondary" size={24} strokeWidth={1.5} />,
};

export default function Now() {
  return (
    <section id="now" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading emoji="🔥" title="What I'm Excited About Now" subtitle="Current explorations and interests" />

        <div className="grid md:grid-cols-2 gap-6">
          {nowItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card rounded-2xl p-7 border border-border card-glow relative overflow-hidden"
            >
              {/* Subtle gradient accent on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/10">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted leading-relaxed mb-5">{item.description}</p>
              {item.links && (
                <div className="flex flex-wrap gap-2">
                  {item.links.map((link) =>
                    link.url ? (
                      <a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 rounded-full bg-section-alt text-muted border border-border/50 font-medium hover:text-primary hover:border-primary/30 transition-colors"
                      >
                        {link.title}
                      </a>
                    ) : (
                      <span
                        key={link.title}
                        className="text-xs px-3 py-1.5 rounded-full bg-section-alt text-muted border border-border/50 font-medium"
                      >
                        {link.title}
                      </span>
                    )
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
