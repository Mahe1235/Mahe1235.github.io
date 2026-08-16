export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "ARIS (ArisInfra Solutions)",
    role: "Senior Product Manager",
    period: "Mar 2026 – Present",
    description:
      "Own Supply Operations: weighbridge integration, truck telematics, plant utilisation. 13,500 dispatches a month across 9 plants now tracked live. Also launched the DaaS project health dashboard in a week.",
  },
  {
    company: "Nextuple Inc",
    role: "Product Manager",
    period: "Feb 2024 – Mar 2026",
    description:
      "Led the Capacity and Order Orchestrator modules for the OMS product. Ran the rollout for a national furniture retailer, and Order Promising for one of the UK's largest grocery chains.",
  },
  {
    company: "Paytm & Paytm Money",
    role: "Product Manager",
    period: "Jun 2021 – Jan 2024",
    description:
      "Built India's biggest loyalty program on the Consumer Loyalty charter. At Paytm Money, led the Subscription module and doubled subscription revenue. A pricing change added 25%.",
  },
  {
    company: "RoaDo",
    role: "Product Manager",
    period: "Sep 2018 – Mar 2019",
    description:
      "First iteration of the app for a logistics startup I helped build. Roadmap, user research, GTM.",
  },
  {
    company: "IDrive Software",
    role: "Android Developer",
    period: "Jun 2016 – Aug 2018",
    description:
      "Built features for IDrive's mobile app, 1M+ downloads and 10k+ DAUs. Shipped a consumer app with 50k+ downloads.",
  },
];
