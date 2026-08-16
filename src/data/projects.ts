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
  githubUrl?: string;
  type: "main" | "case-study";
}

export const projects: Project[] = [
  // ── Main cards (AI builds & side projects) ──────────────────────────────────
  {
    title: "ShowTrackr",
    emoji: "🎬",
    category: "Side Project",
    categoryColor: "bg-orange-100 text-orange-700",
    tags: ["Next.js", "Supabase", "TVMaze API", "TypeScript"],
    summary:
      "Track TV shows and what you're watching. Built on the TVMaze API with Next.js, Supabase and TypeScript.",
    slug: "showtrackr",
    liveUrl: "https://show-trackr-ten.vercel.app/",
    githubUrl: "https://github.com/Mahe1235/ShowTrackr",
    type: "main",
  },
  {
    title: "DEDUCTION: Text-Based Murder Mystery",
    emoji: "🔍",
    category: "AI · LLM Game",
    categoryColor: "bg-purple-100 text-purple-700",
    tags: ["LLM", "AI", "Game"],
    summary:
      "A murder mystery game powered by LLMs. You interrogate AI suspects to solve the case. Built it to learn how LLMs handle open-ended conversation and how to keep them in character. Turns out, prompt engineering for a game is a surprisingly good way to learn prompt engineering for everything else.",
    slug: "deduction-murder-mystery",
    githubUrl: "https://github.com/Mahe1235/murder-mystery",
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
    githubUrl: "https://github.com/Mahe1235/mafia-game",
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
      "How a neobank moves from individual accounts to family ones, for multi-generational Indian households. Research, prioritisation, a phased roadmap, PRDs and working prototypes. Built solo in 6 hours with Claude, Perplexity and v0.",
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
      "Getting Docsumo's trial users to actually activate. Segmented them by the documents they process, then worked out what each one is really hiring the trial to do.",
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
      "A photography vertical for beginners who want to get better but don't know what to practise. Three-month roadmap built around structured guidance, personalised feedback and something to show for it.",
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
      "What should come first in a Justdial search? Worked through how to weigh proximity, ratings, how fast a business responds, and whether it's verified.",
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
      "Six months consulting for Atom, a meditation app. Installs went from 5K to 150K at 25% week on week, mostly through better ASO and clearer product communication. Also built the monetisation strategy off 50+ hours of user interviews.",
    slug: "atom",
    type: "case-study",
  },
];
