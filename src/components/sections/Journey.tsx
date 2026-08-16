"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Newspaper } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { personal } from "@/data/personal";

function highlightMetrics(text: string) {
  // Bold numbers with %, MoM, revenue, downloads, DAUs, users, etc.
  const parts = text.split(/(\d+[%+kKmM]*(?:\s*(?:MoM|DAUs?))?|\d+[.,]\d+%|1M\+|50[kK]\+|10k\+|INR\s+\S+)/g);
  return parts.map((part, i) => {
    if (/\d/.test(part) && /[%+kKmM]|MoM|DAU|downloads/i.test(part)) {
      return <strong key={i} className="text-foreground font-semibold">{part}</strong>;
    }
    return part;
  });
}

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <SectionHeading emoji="🗺️" title="Journey So Far" />
          <motion.a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex self-start sm:self-auto items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
          >
            <Download size={16} strokeWidth={1.5} />
            Resume
            <ArrowRight size={14} strokeWidth={1.5} />
          </motion.a>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line — gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="w-full h-full bg-gradient-to-b from-primary/50 via-secondary/30 to-border" />
          </div>

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex items-start gap-6 mb-10 ${
                i % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              }`}
            >
              {/* Timeline dot — with glow */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(13,148,136,0.4)]" />
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="group bg-card rounded-2xl p-6 border border-border card-glow relative overflow-hidden">
                  {/* Accent line */}
                  <div className={`absolute top-0 ${i % 2 === 0 ? "right-0" : "left-0"} w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <h3 className="font-bold font-[family-name:var(--font-space-grotesk)] text-lg tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-gradient font-semibold text-sm inline-block">{exp.role}</p>
                  <p className="text-muted/60 text-xs mb-3 font-medium">{exp.period}</p>
                  <p className="text-muted text-sm leading-relaxed">{highlightMetrics(exp.description)}</p>

                  {exp.links && (
                    <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 min-h-[44px] text-xs px-3 py-1.5 rounded-full bg-section-alt text-muted border border-border/50 font-medium hover:text-primary hover:border-primary/30 transition-colors"
                        >
                          <Newspaper size={12} strokeWidth={1.5} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
