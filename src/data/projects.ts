export interface Project {
  title: string;
  emoji: string;
  category: string;
  categoryColor: string;
  tags: string[];
  summary: string;
  notionUrl?: string;
  slug?: string;
  liveUrl?: string;
  type: "main" | "case-study";
}

export const projects: Project[] = [
  // ── Main cards (AI builds & side projects) ──────────────────────────────────
  {
    title: "DEDUCTION: Text-Based Murder Mystery",
    emoji: "🔍",
    category: "AI · LLM Game",
    categoryColor: "bg-purple-100 text-purple-700",
    tags: ["LLM", "AI", "Game"],
    summary:
      "A murder mystery game powered by LLMs — you interrogate AI suspects to solve the case. Built it to learn how LLMs handle open-ended conversation and how to keep them in character. Turns out, prompt engineering for a game is a surprisingly good way to learn prompt engineering for everything else.",
    slug: "deduction-murder-mystery",
    type: "main",
  },
  {
    title: "Mafia: Multiplayer Web Game",
    emoji: "🎭",
    category: "AI · Vibe Coding",
    categoryColor: "bg-purple-100 text-purple-700",
    tags: ["AI", "Vibe Coding", "Multiplayer"],
    summary:
      "A multiplayer Mafia game I built after not writing code for 5 years. Used Cursor and Lovable to go from idea to working game in a weekend. This was the project that convinced me PMs who can build with AI tools have a real edge.",
    slug: "mafia-multiplayer-game",
    type: "main",
  },
  {
    title: "ShowTrackr",
    emoji: "🎬",
    category: "Side Project",
    categoryColor: "bg-orange-100 text-orange-700",
    tags: ["Next.js", "Supabase", "TVMaze API", "TypeScript"],
    summary:
      "A simple app to track TV shows and what you're watching. Nothing groundbreaking — just a thing I wanted and decided to build.",
    slug: "showtrackr",
    liveUrl: "https://show-trackr-ten.vercel.app/",
    type: "main",
  },

  // ── Case studies (collapsed by default) ─────────────────────────────────────
  {
    title: "Optimus Family Hub",
    emoji: "🏦",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-700",
    tags: ["Neobanking", "User Research", "Product Strategy"],
    summary:
      "Product strategy for a neobanking app expanding from individual to family banking. Developed comprehensive user research, market analysis, phased implementation roadmap, and validation frameworks for multi-generational Indian households.",
    slug: "optimus-family-hub",
    type: "case-study",
  },
  {
    title: "Onboarding on Docsumo",
    emoji: "📄",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-700",
    tags: ["Onboarding", "User Segments", "JTBD"],
    summary:
      "Enhanced user onboarding for Docsumo by identifying target audience, creating user segments based on document types, and defining the JTBD for personas during the trial period.",
    slug: "onboarding-on-docsumo",
    type: "case-study",
  },
  {
    title: "Photography Vertical at Pixical",
    emoji: "📸",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-700",
    tags: ["EdTech", "Product Roadmap", "User Research"],
    summary:
      "Launched a photography vertical at Pixical targeting beginner hobbyists. A three-month roadmap addressing pain points like structured guidance and personalized feedback.",
    slug: "photography-vertical-pixical",
    type: "case-study",
  },
  {
    title: "Optimizing Search Results for Justdial",
    emoji: "🔎",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-700",
    tags: ["Search Algorithm", "Ranking", "UX"],
    summary:
      "Created a robust ranking algorithm for Justdial's platform exploring factors such as proximity, user ratings, responsiveness, and business verification.",
    slug: "optimizing-search-justdial",
    type: "case-study",
  },
  {
    title: "Atom",
    emoji: "🧬",
    category: "Consulting",
    categoryColor: "bg-green-100 text-green-700",
    tags: ["Health-Tech", "GTM Strategy", "Design Thinking"],
    summary:
      "Developed a GTM strategy worth ~$100 Mn for Atom, a wellness health-tech startup. Utilized JTBD and Design Thinking principles, assisting in a 25% WoW increase in downloads from 5K to 150K.",
    slug: "atom",
    type: "case-study",
  },
];
