"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, ChevronDown, Github } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/data/projects";

const mainCards = projects.filter((p) => p.type === "main");
const caseStudies = projects.filter((p) => p.type === "case-study");

export default function Projects() {
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.02]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight mb-3">
            What I&apos;ve Built
          </h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-highlight" />
        </motion.div>

        {/* Main cards — AI builds & side projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainCards.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full">
                {(() => {
                  const isInternal = !!project.slug;
                  const cardContent = (
                    <>
                      {/* Top gradient accent on hover */}
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

                      <span className={`inline-block text-xs px-3 py-1 rounded-full font-semibold mb-3 ${project.categoryColor}`}>
                        {project.category}
                      </span>

                      <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted leading-relaxed mb-5 flex-grow">
                        {project.summary}
                      </p>

                      <div className="mt-auto pt-4 border-t border-border/50 space-y-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-section-alt text-muted/80 font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-secondary transition-colors duration-200"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              Live App
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-xs font-medium text-muted/60 hover:text-foreground transition-colors duration-200"
                            >
                              <Github size={12} strokeWidth={1.5} />
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  );

                  return isInternal ? (
                    <Link href={`/${project.slug}`} className="group h-full bg-card rounded-2xl p-6 border border-border card-glow flex flex-col relative overflow-hidden block">
                      {cardContent}
                    </Link>
                  ) : (
                    <a href={project.notionUrl || "#"} target="_blank" rel="noopener noreferrer" className="group h-full bg-card rounded-2xl p-6 border border-border card-glow flex flex-col relative overflow-hidden block">
                      {cardContent}
                    </a>
                  );
                })()}
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Case Studies — collapsed accordion */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex justify-center">
            <button
              onClick={() => setCaseStudiesOpen(!caseStudiesOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-section-alt"
            >
              <span>Case Studies</span>
              <motion.span
                animate={{ rotate: caseStudiesOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex"
              >
                <ChevronDown size={15} strokeWidth={1.5} />
              </motion.span>
            </button>
          </div>

          <AnimatePresence>
            {caseStudiesOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {caseStudies.map((project, i) => {
                    const inner = (
                      <div className="group flex items-start gap-4 p-4 rounded-xl bg-card/60 border border-border/50 hover:border-primary/20 hover:bg-card transition-all duration-300 cursor-pointer">
                        <span className="text-2xl shrink-0 mt-0.5">{project.emoji}</span>
                        <div className="min-w-0">
                          <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-1.5 ${project.categoryColor} opacity-80`}>
                            {project.category}
                          </span>
                          <h3 className="text-sm font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight group-hover:text-primary transition-colors duration-200 mb-1">
                            {project.title}
                          </h3>
                          <p className="text-xs text-muted/70 leading-relaxed line-clamp-2">
                            {project.summary}
                          </p>
                        </div>
                      </div>
                    );

                    return (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {project.slug ? (
                          <Link href={`/${project.slug}`}>{inner}</Link>
                        ) : (
                          <a href={project.notionUrl || "#"} target="_blank" rel="noopener noreferrer">{inner}</a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
