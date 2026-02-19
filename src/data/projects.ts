export interface Project {
  title: string;
  emoji: string;
  category: string;
  categoryColor: string;
  tags: string[];
  summary: string;
  notionUrl?: string;
  slug?: string;
}

export const projects: Project[] = [
  {
    title: "Optimus Family Hub",
    emoji: "🏦",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-700",
    tags: ["Neobanking", "User Research", "Product Strategy"],
    summary:
      "Product strategy for a neobanking app expanding from individual to family banking. Developed comprehensive user research, market analysis, phased implementation roadmap, and validation frameworks for multi-generational Indian households.",
    slug: "optimus-family-hub",
  },
  {
    title: "DEDUCTION: Text-Based Murder Mystery",
    emoji: "🔍",
    category: "Game",
    categoryColor: "bg-purple-100 text-purple-700",
    tags: ["LLM", "Interactive Storytelling", "AI"],
    summary:
      "A text-based murder mystery game leveraging LLMs to create dynamic characters with natural dialogue systems. Players solve 'The Manor Murder' through investigation and deduction.",
    slug: "deduction-murder-mystery",
  },
  {
    title: "Mafia: Real-time Multiplayer Web Game",
    emoji: "🎭",
    category: "Game",
    categoryColor: "bg-purple-100 text-purple-700",
    tags: ["AI-Assisted Coding", "Multiplayer", "WebSockets"],
    summary:
      "Built with AI-assisted coding using Cursor after a 5-year coding hiatus. A real-time multiplayer web game that demonstrates the power of AI tools in hands-on development.",
    slug: "mafia-multiplayer-game",
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
  },
  {
    title: "ShowTrackr — Personal TV Show Tracker",
    emoji: "🎬",
    category: "Side Project",
    categoryColor: "bg-orange-100 text-orange-700",
    tags: ["Next.js", "Supabase", "TVMaze API", "TypeScript"],
    summary:
      "A personal TV show tracking web app. Search thousands of shows, track your watchlist with statuses, and discover trending content — all free, no ads, built with Next.js and Supabase.",
    slug: "showtrackr",
  },
];
