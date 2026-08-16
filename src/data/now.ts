export interface NowItem {
  title: string;
  icon: string;
  description: string;
  links?: { title: string; url?: string }[];
}

export const nowItems: NowItem[] = [
  {
    title: "Building with AI, in the actual job",
    icon: "sparkles",
    description:
      "At ARIS I do my own data pulls, prototypes and design passes. It's the reason the DaaS dashboard went from ideation to production in a week. Outside work I keep building: a multiplayer Mafia game in a weekend with Cursor, DEDUCTION with LLM-driven suspects, and ShowTrackr because I wanted it and nobody had made it the way I liked.",
    links: [
      { title: "DEDUCTION: Text-Based Murder Mystery", url: "https://www.notion.so/mahendrab/DEDUCTION-Text-Based-Murder-Mystery-a978cdb294be477f966e568861b5feb6" },
      { title: "Mafia: Real-time Multiplayer Web Game", url: "https://www.notion.so/mahendrab/Mafia-Real-time-Multiplayer-Web-Game-1ba8606b05258069a04ae8087dec64f2" },
    ],
  },
  {
    title: "Building my own PM tooling",
    icon: "globe",
    description:
      "Claude Code with MCPs for the data work, Claude for prototyping, and a set of skills and agents I've put together for my own workflow. Notes from everything I read go into Obsidian as a second brain. None of it is impressive on its own, but together it's changed what I can do without asking anyone.",
  },
];
