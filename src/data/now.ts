export interface NowItem {
  title: string;
  icon: string;
  description: string;
  links?: { title: string; url?: string }[];
}

export const nowItems: NowItem[] = [
  {
    title: "AI Tools for Product Development",
    icon: "sparkles",
    description:
      "Recently built a multiplayer Mafia game using AI-assisted coding with Cursor, getting back into development after years away from coding. Experimenting with tools like Lovable to streamline product specs and research analysis. These hands-on experiences show how AI can enhance our existing workflows rather than replace them.",
    links: [
      { title: "DEDUCTION: Text-Based Murder Mystery", url: "https://www.notion.so/mahendrab/DEDUCTION-Text-Based-Murder-Mystery-a978cdb294be477f966e568861b5feb6" },
      { title: "Mafia: Real-time Multiplayer Web Game", url: "https://www.notion.so/mahendrab/Mafia-Real-time-Multiplayer-Web-Game-1ba8606b05258069a04ae8087dec64f2" },
    ],
  },
  {
    title: "Web3 Beyond the Hype",
    icon: "globe",
    description:
      "Researching practical applications of blockchain technologies, focusing on how they might create new models for digital ownership and value exchange. Documenting these explorations from a product perspective.",
    links: [
      { title: "Blockchain for PMs", url: "https://www.notion.so/mahendrab/Blockchain-for-PMs-1378606b0525802faf57e5ea298e4cab" },
      { title: "Smart Contracts for PMs", url: "https://www.notion.so/mahendrab/Smart-Contracts-for-PMs-1388606b05258099b6a1ed453ef887bc" },
      { title: "Core Crypto Concepts for PMs", url: "https://www.notion.so/mahendrab/Core-Crypto-Concepts-for-PMs-1998606b0525809896b3ff9ca764e2b4" },
      { title: "DeFi Concepts for PMs", url: "https://www.notion.so/mahendrab/DeFi-Concepts-for-PMs-1a78606b05258042af0bcaccabd7841a" },
    ],
  },
];
