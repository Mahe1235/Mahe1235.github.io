"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

// SVG icon components — personalized easter eggs
const CricketBat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 19.5l15-15" />
    <path d="M6 21l-3-3 12.5-12.5 3 3L6 21z" />
    <circle cx="18.5" cy="5.5" r="2.5" />
  </svg>
);

const Headphones = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
  </svg>
);

const Coffee = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const Gamepad = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="11" x2="10" y2="11" />
    <line x1="8" y1="9" x2="8" y2="13" />
    <line x1="15" y1="12" x2="15.01" y2="12" />
    <line x1="18" y1="10" x2="18.01" y2="10" />
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
  </svg>
);

const Globe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CodeBrackets = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const Rocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const Lightbulb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
  </svg>
);

const Mountain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const Book = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const allIcons = [CricketBat, Headphones, Coffee, Gamepad, Globe, CodeBrackets, Rocket, Lightbulb, Mountain, Book];

// ~34 icons scattered across the page with ~250px avg spacing
// speed: parallax multiplier — each icon drifts at a different rate for depth
// Actual sections: Hero 0-688, About 688-1515, Projects 1515-3039,
// Skills 3039-3733, Journey 3733-5674, Now 5674-6384, Reads 6384-7105,
// Podcasts 7105-7644, Education 7644-8158, Contact 8158-8790
const iconPlacements = [
  // Hero (0–688)
  { iconIdx: 0, top: 80,   left: "4%",   size: 36, speed: -0.15, rotate: 12 },
  { iconIdx: 6, top: 350,  left: "90%",  size: 32, speed: -0.25, rotate: -8 },
  { iconIdx: 4, top: 580,  left: "92%",  size: 28, speed: -0.1,  rotate: 5 },

  // About (688–1515)
  { iconIdx: 2, top: 800,  left: "3%",   size: 34, speed: -0.2,  rotate: -10 },
  { iconIdx: 1, top: 1050, left: "91%",  size: 32, speed: -0.12, rotate: 8 },
  { iconIdx: 7, top: 1300, left: "5%",   size: 30, speed: -0.22, rotate: -6 },

  // Projects (1515–3039)
  { iconIdx: 3, top: 1550, left: "89%",  size: 34, speed: -0.18, rotate: 14 },
  { iconIdx: 5, top: 1800, left: "3%",   size: 32, speed: -0.15, rotate: -12 },
  { iconIdx: 8, top: 2050, left: "90%",  size: 30, speed: -0.25, rotate: 6 },
  { iconIdx: 0, top: 2300, left: "4%",   size: 28, speed: -0.1,  rotate: 10 },
  { iconIdx: 9, top: 2550, left: "92%",  size: 34, speed: -0.2,  rotate: -8 },
  { iconIdx: 6, top: 2800, left: "3%",   size: 30, speed: -0.18, rotate: 15 },

  // Skills (3039–3733)
  { iconIdx: 2, top: 3050, left: "88%",  size: 32, speed: -0.12, rotate: -5 },
  { iconIdx: 5, top: 3300, left: "91%",  size: 34, speed: -0.22, rotate: 8 },
  { iconIdx: 4, top: 3550, left: "4%",   size: 30, speed: -0.15, rotate: -10 },

  // Journey (3733–5674)
  { iconIdx: 1, top: 3800, left: "90%",  size: 28, speed: -0.2,  rotate: 12 },
  { iconIdx: 7, top: 4050, left: "3%",   size: 34, speed: -0.18, rotate: -6 },
  { iconIdx: 0, top: 4300, left: "89%",  size: 32, speed: -0.25, rotate: 10 },
  { iconIdx: 3, top: 4550, left: "5%",   size: 30, speed: -0.12, rotate: -14 },
  { iconIdx: 8, top: 4800, left: "92%",  size: 34, speed: -0.15, rotate: 8 },
  { iconIdx: 2, top: 5050, left: "3%",   size: 28, speed: -0.2,  rotate: -5 },
  { iconIdx: 6, top: 5300, left: "90%",  size: 32, speed: -0.22, rotate: 12 },
  { iconIdx: 9, top: 5550, left: "4%",   size: 30, speed: -0.18, rotate: -8 },

  // Now (5674–6384)
  { iconIdx: 5, top: 5800, left: "91%",  size: 34, speed: -0.15, rotate: 10 },
  { iconIdx: 7, top: 6050, left: "3%",   size: 30, speed: -0.25, rotate: -6 },
  { iconIdx: 4, top: 6300, left: "88%",  size: 32, speed: -0.12, rotate: 8 },

  // Reads (6384–7105)
  { iconIdx: 1, top: 6550, left: "4%",   size: 32, speed: -0.2,  rotate: -12 },
  { iconIdx: 0, top: 6800, left: "90%",  size: 30, speed: -0.18, rotate: 6 },
  { iconIdx: 8, top: 7050, left: "3%",   size: 28, speed: -0.15, rotate: 10 },

  // Podcasts (7105–7644)
  { iconIdx: 3, top: 7300, left: "92%",  size: 34, speed: -0.22, rotate: -10 },
  { iconIdx: 6, top: 7550, left: "5%",   size: 30, speed: -0.18, rotate: 14 },

  // Education (7644–8158)
  { iconIdx: 2, top: 7800, left: "90%",  size: 32, speed: -0.15, rotate: -6 },
  { iconIdx: 5, top: 8050, left: "3%",   size: 30, speed: -0.25, rotate: 8 },

  // Contact (8158–8790)
  { iconIdx: 9, top: 8300, left: "89%",  size: 34, speed: -0.2,  rotate: -12 },
  { iconIdx: 0, top: 8550, left: "4%",   size: 32, speed: -0.12, rotate: 10 },
];

// Individual icon with scroll-based parallax — receives shared scrollY
function ParallaxIcon({ iconIdx, top, left, size, speed, rotate, scrollY }: typeof iconPlacements[number] & { scrollY: MotionValue<number> }) {
  const y = useTransform(scrollY, [0, 9000], [0, 9000 * speed]);
  const r = useTransform(scrollY, [0, 9000], [0, rotate * 3]);

  const Icon = allIcons[iconIdx];

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        y,
        rotate: r,
      }}
      className="text-primary/[0.35]"
    >
      <Icon />
    </motion.div>
  );
}

export default function FloatingIcons() {
  const { scrollY } = useScroll();

  return (
    <div className="absolute inset-0 w-full pointer-events-none overflow-hidden" style={{ zIndex: 1 }} aria-hidden="true">
      {iconPlacements.map((item, i) => (
        <ParallaxIcon key={i} {...item} scrollY={scrollY} />
      ))}
    </div>
  );
}
