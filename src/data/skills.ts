export interface SkillCategory {
  category: string;
  emoji: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Product Management",
    emoji: "🎯",
    skills: ["PRDs", "Roadmapping", "A/B Testing", "User Research", "JTBD", "Go-to-Market"],
  },
  {
    category: "Data & Analytics",
    emoji: "📊",
    skills: ["SQL", "Excel", "Statistics", "Funnel Analysis", "Metrics Design"],
  },
  {
    category: "Design & UX",
    emoji: "🎨",
    skills: ["Figma", "Balsamiq", "Wireframing", "User Flows", "Design Thinking"],
  },
  {
    category: "Engineering",
    emoji: "⚙️",
    skills: ["Agile/Scrum", "JIRA", "Confluence", "Android SDK", "API Design"],
  },
];
