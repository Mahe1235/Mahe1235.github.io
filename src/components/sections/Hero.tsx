"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";
import WordRotate from "@/components/ui/WordRotate";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Warm decorative blobs — larger, more atmospheric */}
      <div className="absolute top-10 -left-40 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-60 -right-40 w-[400px] h-[400px] bg-secondary/[0.07] rounded-full blur-[100px] animate-blob [animation-delay:2s]" />
      <div className="absolute -bottom-20 left-1/4 w-[450px] h-[450px] bg-highlight/[0.06] rounded-full blur-[100px] animate-blob [animation-delay:4s]" />

      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 bg-dots opacity-[0.03]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile photo with elegant border */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.8 }}
          className="mb-10"
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
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-pulse-glow" />
          </div>
        </motion.div>

        {/* Greeting with wave */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight">
            <motion.span
              className="inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.span>{" "}
            <TypewriterText words={personal.greetings} />
          </h1>
        </motion.div>

        {/* Name — with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-muted">
            I&apos;m{" "}
            <span className="text-gradient font-bold">{personal.name}</span>
          </p>
        </motion.div>

        {/* Role tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-muted/80">
            a{" "}
            <WordRotate
              words={personal.taglines}
              className="text-primary font-semibold"
            />
          </p>
        </motion.div>

        {/* PM Summary — recruiter-focused */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5"
        >
          <p className="text-sm sm:text-base text-muted/60 tracking-wide">
            Fintech &middot; SaaS &middot; Omnichannel &middot; 8+ Years in Tech
          </p>
        </motion.div>

        {/* Social links — with elegant hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-3 mt-10"
        >
          {[
            { href: personal.social.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: personal.social.twitter, icon: Twitter, label: "Twitter" },
            { href: personal.social.instagram, icon: Instagram, label: "Instagram" },
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
