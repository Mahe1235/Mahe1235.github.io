"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";
import { useMemo } from "react";
import TypewriterText from "@/components/ui/TypewriterText";
import { personal } from "@/data/personal";

export default function Hero() {
  // Shuffle phrases on each page load so returning visitors see a fresh mix
  const shuffledPhrases = useMemo(() => {
    const arr = [...personal.pmPhrases];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Warm decorative blobs */}
      <div className="absolute top-10 -left-40 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-60 -right-40 w-[400px] h-[400px] bg-secondary/[0.07] rounded-full blur-[100px] animate-blob [animation-delay:2s]" />
      <div className="absolute -bottom-20 left-1/4 w-[450px] h-[450px] bg-highlight/[0.06] rounded-full blur-[100px] animate-blob [animation-delay:4s]" />

      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 bg-dots opacity-[0.03]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        {/* Profile photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary via-secondary to-highlight p-[3px] animate-gradient-border [background-size:200%_200%]">
              <div className="w-full h-full rounded-full bg-background overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Mahendra B"
                  fill
                  sizes="176px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-pulse-glow" />
          </div>
        </motion.div>

        {/* Greeting — warm opener, lighter weight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3"
        >
          <p className="text-lg sm:text-xl font-medium text-muted/60 tracking-wide">
            Hello there!
          </p>
        </motion.div>

        {/* Name — dominant element */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight">
            I&apos;m{" "}
            <span className="text-gradient">Mahendra B</span>
          </h1>
        </motion.div>

        {/* PM typewriter — static prefix + cycling phrases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-muted/80">
            a PM who is&hellip;{" "}
            <TypewriterText
              words={shuffledPhrases}
              className="text-primary font-semibold"
            />
          </p>
        </motion.div>

        {/* Credential tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <p className="text-sm sm:text-base text-muted/50 tracking-wide">
            Fintech &middot; B2B SaaS &middot; 8+ Years &middot; IIM Ahmedabad
          </p>
        </motion.div>

        {/* One-liner — personal aside */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="text-base sm:text-lg text-muted/50 font-light">
            Lately, AI has been the most fun part of the job.
          </p>
        </motion.div>

        {/* Social links — LinkedIn · X · GitHub · Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-3"
        >
          {[
            { href: personal.social.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: personal.social.twitter, icon: Twitter, label: "Twitter" },
            { href: personal.social.github, icon: Github, label: "GitHub" },
            { href: `mailto:${personal.social.email}`, icon: Mail, label: "Email" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-3.5 rounded-2xl bg-card border border-border text-muted hover:text-primary hover:border-primary/30 card-glow"
              aria-label={link.label}
            >
              <link.icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
