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
      "At ARIS I do my own data pulls, prototypes and design passes. Outside work I keep building — Mafia in a weekend with Cursor, DEDUCTION to figure out how LLMs hold a character, ShowTrackr because I wanted it.",
    links: [
      { title: "DEDUCTION: Text-Based Murder Mystery", url: "https://www.notion.so/mahendrab/DEDUCTION-Text-Based-Murder-Mystery-a978cdb294be477f966e568861b5feb6" },
      { title: "Mafia: Real-time Multiplayer Web Game", url: "https://www.notion.so/mahendrab/Mafia-Real-time-Multiplayer-Web-Game-1ba8606b05258069a04ae8087dec64f2" },
    ],
  },
  {
    title: "Building my own PM tooling",
    icon: "globe",
    description:
      "Claude Code with MCPs for the data work, Claude for prototyping, and a few skills and agents I've built for my own workflow. Notes from everything I read go into Obsidian.",
  },
];
