export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Nextuple Inc",
    role: "Product Manager",
    period: "Feb 2024 – Present",
    description:
      "Led Order Orchestrator module, revamping the system with returns flow and metrics dashboard while successfully launching the MVP for major UK grocery retailers.",
  },
  {
    company: "Paytm",
    role: "Product Manager",
    period: "Jun 2021 – Jan 2024",
    description:
      "Building India's biggest Loyalty program; Part of the Consumer Loyalty charter, led data integration, customer support, and web user experience.",
  },
  {
    company: "Paytm Money",
    role: "Product Manager",
    period: "Jun 2021 – Jan 2024",
    description:
      "Led the Subscription module, built a scalable system to monetize products. Achieved 20% MoM increase in subscription revenue and increased retention by 12% through redesigning the renewal flow. Led pricing change initiative resulting in 25% revenue increase and reduced complaints by 80%.",
  },
  {
    company: "Niyo Solutions",
    role: "Product Management Intern",
    period: "Mar 2020 – May 2020",
    description:
      "Ideated and developed a detailed product roadmap and PRD for a Crypto product, including market research and identification of key partnerships.",
  },
  {
    company: "RoaDo",
    role: "Product Manager",
    period: "Sep 2018 – Mar 2019",
    description:
      "Led product development and launched successful products for a logistics startup. Conducted user research, defined user personas and stories, and developed a mobile app framework and Go-to-Market strategy.",
  },
  {
    company: "IDrive Software",
    role: "Android Developer",
    period: "Jun 2016 – Aug 2018",
    description:
      "Built and designed features for IDrive's mobile app with 1M+ downloads and 10k+ DAUs. Led the development and release of a consumer application with 50k+ downloads.",
  },
];
