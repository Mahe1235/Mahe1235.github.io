"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";

const contactLinks = [
  {
    label: "LinkedIn",
    href: personal.social.linkedin,
    icon: Linkedin,
    handle: "Mahendra B",
    color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200",
  },
  {
    label: "Twitter",
    href: personal.social.twitter,
    icon: Twitter,
    handle: "@mahendrab0",
    color: "hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200",
  },
  {
    label: "Instagram",
    href: personal.social.instagram,
    icon: Instagram,
    handle: "@wanderer.on.wheels",
    color: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200",
  },
  {
    label: "Email",
    href: `mailto:${personal.social.email}`,
    icon: Mail,
    handle: personal.social.email,
    color: "hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Decorative blobs — more atmospheric */}
      <div className="absolute top-0 -right-32 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-highlight/[0.04] rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-dots opacity-[0.02]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-6xl block mb-6">☕</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight mb-4">
            Let&apos;s Connect &{" "}
            <span className="text-gradient">Share Ideas!</span>
          </h2>
          <p className="text-lg md:text-xl text-muted mb-12 max-w-xl mx-auto leading-relaxed">
            Always up for a good conversation about products, tech, cricket, or
            anything interesting. Reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border transition-all duration-400 ${link.color}`}
            >
              <div className="p-2.5 rounded-xl bg-section-alt group-hover:bg-transparent transition-colors">
                <link.icon size={20} strokeWidth={1.5} />
              </div>
              <div className="text-left flex-grow">
                <div className="font-bold text-sm font-[family-name:var(--font-space-grotesk)]">{link.label}</div>
                <div className="text-xs text-muted">{link.handle}</div>
              </div>
              <ArrowUpRight size={16} strokeWidth={1.5} className="text-muted/30 group-hover:text-current transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
