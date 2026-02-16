"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { podcasts } from "@/data/podcasts";

function EqualizerBars() {
  return (
    <div className="flex items-end gap-[3px] h-5">
      <div className="w-[3px] bg-primary rounded-full animate-equalizer-1" />
      <div className="w-[3px] bg-primary/80 rounded-full animate-equalizer-2" />
      <div className="w-[3px] bg-primary/60 rounded-full animate-equalizer-3" />
      <div className="w-[3px] bg-primary/40 rounded-full animate-equalizer-1 [animation-delay:0.2s]" />
    </div>
  );
}

export default function Podcasts() {
  return (
    <section id="podcasts" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading emoji="🎧" title="Podcasts I Enjoy" subtitle="My go-to shows for learning and inspiration" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {podcasts.map((podcast, i) => (
            <motion.div
              key={podcast.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-card rounded-2xl p-5 border border-border card-glow flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-2xl shrink-0">
                {podcast.emoji}
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="font-bold font-[family-name:var(--font-space-grotesk)] text-sm tracking-tight truncate">
                  {podcast.name}
                </h3>
                {i === 0 && (
                  <span className="text-xs text-primary font-medium">Now playing</span>
                )}
              </div>
              {i === 0 && <EqualizerBars />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
