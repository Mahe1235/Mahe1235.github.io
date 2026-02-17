"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.02]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading emoji="🚀" title="Projects & Case Studies" subtitle="Things I've built and researched" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full">
                {(() => {
                  const isInternal = !!project.slug;
                  const cardContent = (
                    <>
                      {/* Top gradient accent */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="flex items-start justify-between mb-4">
                        <span className="text-3xl">{project.emoji}</span>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="p-1.5 rounded-lg text-muted/40 hover:text-primary hover:bg-primary/10 transition-all"
                        >
                          {isInternal ? (
                            <ArrowRight size={16} strokeWidth={1.5} />
                          ) : (
                            <ArrowUpRight size={16} strokeWidth={1.5} />
                          )}
                        </motion.div>
                      </div>

                      <span
                        className={`inline-block self-start text-xs px-3 py-1 rounded-full font-semibold mb-3 ${project.categoryColor}`}
                      >
                        {project.category}
                      </span>

                      <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted leading-relaxed mb-5 flex-grow">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-section-alt text-muted/80 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  );

                  return isInternal ? (
                    <Link
                      href={`/${project.slug}`}
                      className="group h-full bg-card rounded-2xl p-6 border border-border card-glow flex flex-col relative overflow-hidden block"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <a
                      href={project.notionUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-full bg-card rounded-2xl p-6 border border-border card-glow flex flex-col relative overflow-hidden block"
                    >
                      {cardContent}
                    </a>
                  );
                })()}
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
