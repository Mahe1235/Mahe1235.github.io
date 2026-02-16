export interface Project {
  title: string;
  emoji: string;
  category: string;
  categoryColor: string;
  tags: string[];
  summary: string;
  notionUrl?: string;
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
    notionUrl: "https://www.notion.so/mahendrab/Optimus-Family-Hub-Case-Study-2298606b0525804dbdb6e6db7eb38bbc",
  },
  {
    title: "DEDUCTION: Text-Based Murder Mystery",
    emoji: "🔍",
    category: "Game",
    categoryColor: "bg-purple-100 text-purple-700",
    tags: ["LLM", "Interactive Storytelling", "AI"],
    summary:
      "A text-based murder mystery game leveraging LLMs to create dynamic characters with natural dialogue systems. Players solve 'The Manor Murder' through investigation and deduction.",
    notionUrl: "https://www.notion.so/mahendrab/DEDUCTION-Text-Based-Murder-Mystery-a978cdb294be477f966e568861b5feb6",
  },
  {
    title: "Mafia: Real-time Multiplayer Web Game",
    emoji: "🎭",
    category: "Game",
    categoryColor: "bg-purple-100 text-purple-700",
    tags: ["AI-Assisted Coding", "Multiplayer", "WebSockets"],
    summary:
      "Built with AI-assisted coding using Cursor after a 5-year coding hiatus. A real-time multiplayer web game that demonstrates the power of AI tools in hands-on development.",
    notionUrl: "https://www.notion.so/mahendrab/Mafia-Real-time-Multiplayer-Web-Game-1ba8606b05258069a04ae8087dec64f2",
  },
  {
    title: "Onboarding on Docsumo",
    emoji: "📄",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-700",
    tags: ["Onboarding", "User Segments", "JTBD"],
    summary:
      "Enhanced user onboarding for Docsumo by identifying target audience, creating user segments based on document types, and defining the JTBD for personas during the trial period.",
    notionUrl: "https://www.notion.so/mahendrab/Onboarding-on-Docsumo-1a58606b05258068ba3be52e78108915",
  },
  {
    title: "Photography Vertical at Pixical",
    emoji: "📸",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-700",
    tags: ["EdTech", "Product Roadmap", "User Research"],
    summary:
      "Launched a photography vertical at Pixical targeting beginner hobbyists. A three-month roadmap addressing pain points like structured guidance and personalized feedback.",
    notionUrl: "https://www.notion.so/mahendrab/Photography-vertical-at-Pixical-956c34d7c6e2427eb53196b4cabffcdb",
  },
  {
    title: "Optimizing Search Results for Justdial",
    emoji: "🔎",
    category: "Case Study",
    categoryColor: "bg-blue-100 text-blue-700",
    tags: ["Search Algorithm", "Ranking", "UX"],
    summary:
      "Created a robust ranking algorithm for Justdial's platform exploring factors such as proximity, user ratings, responsiveness, and business verification.",
    notionUrl: "https://www.notion.so/mahendrab/Optimizing-Search-Results-for-Justdial-09a94b8ada6d4ef19b57baa822ca994b",
  },
  {
    title: "Atom",
    emoji: "🧬",
    category: "Consulting",
    categoryColor: "bg-green-100 text-green-700",
    tags: ["Health-Tech", "GTM Strategy", "Design Thinking"],
    summary:
      "Developed a GTM strategy worth ~$100 Mn for Atom, a wellness health-tech startup. Utilized JTBD and Design Thinking principles, assisting in a 25% WoW increase in downloads from 5K to 150K.",
    notionUrl: "https://www.notion.so/mahendrab/Atom-4ff65bc4eecf422ca2a946328810890b",
  },
];
