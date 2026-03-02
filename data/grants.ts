export type GrantItem = {
  id: string;
  name: string;
  provider: string;
  category: string;
  region: string;
  fundingType: string;
  stage: string;
  minAmountGBP?: number | null;
  maxAmountGBP?: number | null;
  deadline: string;
  website?: string;
  summary: string;
  tags: string[];
  notes?: string;
};

export const GRANTS: GrantItem[] = [
  {
    "id": "g_001",
    "name": "Innovation Programs Funding Track 1",
    "provider": "Ecosystem Foundation",
    "category": "Innovation Programs",
    "region": "Malta",
    "fundingType": "Hybrid",
    "stage": "Early traction",
    "minAmountGBP": 25000,
    "maxAmountGBP": 50000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "R&D",
      "Pilot-ready",
      "DevRel",
      "Ecosystem"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_002",
    "name": "Accelerators Funding Track 2",
    "provider": "Accelerator Partner",
    "category": "Accelerators",
    "region": "Dubai (UAE)",
    "fundingType": "Hybrid",
    "stage": "Idea",
    "minAmountGBP": 5000,
    "maxAmountGBP": 1000000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Compute credits",
      "Onchain",
      "Mentorship",
      "UK-friendly"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_003",
    "name": "Accelerators Funding Track 3",
    "provider": "Ecosystem Foundation",
    "category": "Accelerators",
    "region": "Dubai (UAE)",
    "fundingType": "Grant",
    "stage": "Early traction",
    "minAmountGBP": 25000,
    "maxAmountGBP": 1000000,
    "deadline": "Rolling",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "UK-friendly",
      "DevRel",
      "Go-to-market",
      "Mentorship"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_004",
    "name": "Web3 Funding Track 4",
    "provider": "Gov Innovation Office",
    "category": "Web3",
    "region": "EU (Multi-country)",
    "fundingType": "Credits",
    "stage": "Idea",
    "minAmountGBP": 25000,
    "maxAmountGBP": 1000000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Reg-friendly",
      "Go-to-market",
      "Compute credits",
      "UK-friendly"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_005",
    "name": "Accelerators Funding Track 5",
    "provider": "DAO Grants Council",
    "category": "Accelerators",
    "region": "Singapore",
    "fundingType": "Hybrid",
    "stage": "Idea",
    "minAmountGBP": 25000,
    "maxAmountGBP": 200000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "R&D",
      "Reg-friendly",
      "Public goods",
      "Go-to-market"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_006",
    "name": "Web3 Funding Track 6",
    "provider": "Accelerator Partner",
    "category": "Web3",
    "region": "United States",
    "fundingType": "Equity",
    "stage": "Early traction",
    "minAmountGBP": 10000,
    "maxAmountGBP": 100000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Fast-track",
      "Pilot-ready",
      "Mentorship",
      "Onchain"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_007",
    "name": "Government Funding Track 7",
    "provider": "Accelerator Partner",
    "category": "Government",
    "region": "China",
    "fundingType": "Hybrid",
    "stage": "MVP",
    "minAmountGBP": 25000,
    "maxAmountGBP": 25000,
    "deadline": "Rolling",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Go-to-market",
      "UK-friendly",
      "Mentorship",
      "Public goods"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_008",
    "name": "Web3 Funding Track 8",
    "provider": "Gov Innovation Office",
    "category": "Web3",
    "region": "EU (Multi-country)",
    "fundingType": "Equity",
    "stage": "Idea",
    "minAmountGBP": 5000,
    "maxAmountGBP": 500000,
    "deadline": "Rolling",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Enterprise",
      "Pilot-ready",
      "UK-friendly",
      "Public goods"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_009",
    "name": "Government Funding Track 9",
    "provider": "Corporate Program",
    "category": "Government",
    "region": "Global",
    "fundingType": "Prize",
    "stage": "Idea",
    "minAmountGBP": 25000,
    "maxAmountGBP": 500000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Onchain",
      "Pilot-ready",
      "R&D",
      "DevRel"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_010",
    "name": "Innovation Programs Funding Track 10",
    "provider": "Gov Innovation Office",
    "category": "Innovation Programs",
    "region": "Dubai (UAE)",
    "fundingType": "Equity",
    "stage": "Growth",
    "minAmountGBP": 10000,
    "maxAmountGBP": 500000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Ecosystem",
      "Enterprise",
      "Mentorship",
      "Reg-friendly"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_011",
    "name": "Web3 Funding Track 11",
    "provider": "DAO Grants Council",
    "category": "Web3",
    "region": "Malta",
    "fundingType": "Prize",
    "stage": "MVP",
    "minAmountGBP": null,
    "maxAmountGBP": 50000,
    "deadline": "Rolling",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Mentorship",
      "Reg-friendly",
      "Fast-track",
      "Onchain"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_012",
    "name": "Accelerators Funding Track 12",
    "provider": "Ecosystem Foundation",
    "category": "Accelerators",
    "region": "Singapore",
    "fundingType": "Grant",
    "stage": "Early traction",
    "minAmountGBP": 10000,
    "maxAmountGBP": 1000000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Ecosystem",
      "Go-to-market",
      "Enterprise",
      "R&D"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_013",
    "name": "Innovation Programs Funding Track 13",
    "provider": "Accelerator Partner",
    "category": "Innovation Programs",
    "region": "China",
    "fundingType": "Prize",
    "stage": "Growth",
    "minAmountGBP": 5000,
    "maxAmountGBP": 1000000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Reg-friendly",
      "UK-friendly",
      "Pilot-ready",
      "Onchain"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_014",
    "name": "Accelerators Funding Track 14",
    "provider": "Ecosystem Foundation",
    "category": "Accelerators",
    "region": "Global",
    "fundingType": "Equity",
    "stage": "Early traction",
    "minAmountGBP": 10000,
    "maxAmountGBP": 500000,
    "deadline": "Rolling",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Enterprise",
      "UK-friendly",
      "Compute credits",
      "Go-to-market"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_015",
    "name": "Government Funding Track 15",
    "provider": "Accelerator Partner",
    "category": "Government",
    "region": "EU (Multi-country)",
    "fundingType": "Equity",
    "stage": "MVP",
    "minAmountGBP": 25000,
    "maxAmountGBP": 50000,
    "deadline": "Rolling",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Go-to-market",
      "Reg-friendly",
      "Enterprise",
      "Pilot-ready"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_016",
    "name": "Web3 Funding Track 16",
    "provider": "DAO Grants Council",
    "category": "Web3",
    "region": "EU (Multi-country)",
    "fundingType": "Credits",
    "stage": "Idea",
    "minAmountGBP": 5000,
    "maxAmountGBP": 200000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Onchain",
      "DevRel",
      "Public goods",
      "Reg-friendly"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_017",
    "name": "AI Startups Funding Track 17",
    "provider": "Accelerator Partner",
    "category": "AI Startups",
    "region": "United Kingdom",
    "fundingType": "Equity",
    "stage": "Idea",
    "minAmountGBP": null,
    "maxAmountGBP": 25000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Ecosystem",
      "Public goods",
      "Fast-track",
      "Onchain"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_018",
    "name": "AI Startups Funding Track 18",
    "provider": "Gov Innovation Office",
    "category": "AI Startups",
    "region": "Malta",
    "fundingType": "Prize",
    "stage": "Growth",
    "minAmountGBP": null,
    "maxAmountGBP": 500000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Reg-friendly",
      "Mentorship",
      "Fast-track",
      "Public goods"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_019",
    "name": "Government Funding Track 19",
    "provider": "Corporate Program",
    "category": "Government",
    "region": "China",
    "fundingType": "Grant",
    "stage": "Early traction",
    "minAmountGBP": null,
    "maxAmountGBP": 50000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Enterprise",
      "Compute credits",
      "DevRel",
      "Public goods"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_020",
    "name": "Government Funding Track 20",
    "provider": "Accelerator Partner",
    "category": "Government",
    "region": "Singapore",
    "fundingType": "Grant",
    "stage": "MVP",
    "minAmountGBP": 25000,
    "maxAmountGBP": 200000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "UK-friendly",
      "DevRel",
      "Reg-friendly",
      "Onchain"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_021",
    "name": "Innovation Programs Funding Track 21",
    "provider": "Corporate Program",
    "category": "Innovation Programs",
    "region": "Dubai (UAE)",
    "fundingType": "Prize",
    "stage": "Idea",
    "minAmountGBP": null,
    "maxAmountGBP": 50000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Pilot-ready",
      "Mentorship",
      "Public goods",
      "Ecosystem"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_022",
    "name": "AI Startups Funding Track 22",
    "provider": "Accelerator Partner",
    "category": "AI Startups",
    "region": "Singapore",
    "fundingType": "Hybrid",
    "stage": "Early traction",
    "minAmountGBP": 25000,
    "maxAmountGBP": 50000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "R&D",
      "Ecosystem",
      "UK-friendly",
      "Mentorship"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_023",
    "name": "Innovation Programs Funding Track 23",
    "provider": "Ecosystem Foundation",
    "category": "Innovation Programs",
    "region": "EU (Multi-country)",
    "fundingType": "Hybrid",
    "stage": "Growth",
    "minAmountGBP": null,
    "maxAmountGBP": 1000000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Onchain",
      "Enterprise",
      "UK-friendly",
      "Ecosystem"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_024",
    "name": "Innovation Programs Funding Track 24",
    "provider": "Gov Innovation Office",
    "category": "Innovation Programs",
    "region": "China",
    "fundingType": "Prize",
    "stage": "MVP",
    "minAmountGBP": 25000,
    "maxAmountGBP": 50000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Pilot-ready",
      "R&D",
      "UK-friendly",
      "Public goods"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_025",
    "name": "Government Funding Track 25",
    "provider": "Gov Innovation Office",
    "category": "Government",
    "region": "Malta",
    "fundingType": "Credits",
    "stage": "Early traction",
    "minAmountGBP": 10000,
    "maxAmountGBP": 200000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Pilot-ready",
      "DevRel",
      "UK-friendly",
      "Reg-friendly"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_026",
    "name": "Innovation Programs Funding Track 26",
    "provider": "Accelerator Partner",
    "category": "Innovation Programs",
    "region": "EU (Multi-country)",
    "fundingType": "Credits",
    "stage": "Early traction",
    "minAmountGBP": 25000,
    "maxAmountGBP": 100000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Public goods",
      "Ecosystem",
      "Compute credits",
      "DevRel"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_027",
    "name": "AI Startups Funding Track 27",
    "provider": "Corporate Program",
    "category": "AI Startups",
    "region": "Malta",
    "fundingType": "Grant",
    "stage": "Early traction",
    "minAmountGBP": null,
    "maxAmountGBP": 500000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Ecosystem",
      "Compute credits",
      "Pilot-ready",
      "Mentorship"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_028",
    "name": "Web3 Funding Track 28",
    "provider": "Gov Innovation Office",
    "category": "Web3",
    "region": "Malta",
    "fundingType": "Grant",
    "stage": "Idea",
    "minAmountGBP": 5000,
    "maxAmountGBP": 50000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Enterprise",
      "Pilot-ready",
      "Mentorship",
      "Compute credits"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_029",
    "name": "Government Funding Track 29",
    "provider": "DAO Grants Council",
    "category": "Government",
    "region": "United Kingdom",
    "fundingType": "Hybrid",
    "stage": "Idea",
    "minAmountGBP": 25000,
    "maxAmountGBP": 100000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "R&D",
      "Fast-track",
      "Go-to-market",
      "UK-friendly"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_030",
    "name": "AI Startups Funding Track 30",
    "provider": "Accelerator Partner",
    "category": "AI Startups",
    "region": "EU (Multi-country)",
    "fundingType": "Hybrid",
    "stage": "Growth",
    "minAmountGBP": 10000,
    "maxAmountGBP": 1000000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "DevRel",
      "Public goods",
      "Enterprise",
      "Go-to-market"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_031",
    "name": "Web3 Funding Track 31",
    "provider": "Ecosystem Foundation",
    "category": "Web3",
    "region": "Malta",
    "fundingType": "Grant",
    "stage": "MVP",
    "minAmountGBP": 10000,
    "maxAmountGBP": 200000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Go-to-market",
      "Public goods",
      "Reg-friendly",
      "Onchain"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_032",
    "name": "Web3 Funding Track 32",
    "provider": "Accelerator Partner",
    "category": "Web3",
    "region": "Singapore",
    "fundingType": "Prize",
    "stage": "Idea",
    "minAmountGBP": null,
    "maxAmountGBP": 50000,
    "deadline": "Rolling",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Ecosystem",
      "UK-friendly",
      "Enterprise",
      "Mentorship"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_033",
    "name": "Web3 Funding Track 33",
    "provider": "DAO Grants Council",
    "category": "Web3",
    "region": "United States",
    "fundingType": "Hybrid",
    "stage": "Idea",
    "minAmountGBP": 5000,
    "maxAmountGBP": 500000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "DevRel",
      "Mentorship",
      "R&D",
      "Onchain"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_034",
    "name": "Innovation Programs Funding Track 34",
    "provider": "Ecosystem Foundation",
    "category": "Innovation Programs",
    "region": "China",
    "fundingType": "Equity",
    "stage": "Growth",
    "minAmountGBP": 10000,
    "maxAmountGBP": 25000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Compute credits",
      "Pilot-ready",
      "Fast-track",
      "R&D"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_035",
    "name": "Accelerators Funding Track 35",
    "provider": "Ecosystem Foundation",
    "category": "Accelerators",
    "region": "Singapore",
    "fundingType": "Prize",
    "stage": "Idea",
    "minAmountGBP": 5000,
    "maxAmountGBP": 50000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Public goods",
      "Enterprise",
      "Onchain",
      "Ecosystem"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_036",
    "name": "Government Funding Track 36",
    "provider": "Gov Innovation Office",
    "category": "Government",
    "region": "China",
    "fundingType": "Hybrid",
    "stage": "Growth",
    "minAmountGBP": 10000,
    "maxAmountGBP": 200000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Fast-track",
      "Mentorship",
      "Onchain",
      "Public goods"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_037",
    "name": "Government Funding Track 37",
    "provider": "Corporate Program",
    "category": "Government",
    "region": "Singapore",
    "fundingType": "Hybrid",
    "stage": "Growth",
    "minAmountGBP": 10000,
    "maxAmountGBP": 1000000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Public goods",
      "Fast-track",
      "Enterprise",
      "Reg-friendly"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_038",
    "name": "Innovation Programs Funding Track 38",
    "provider": "Accelerator Partner",
    "category": "Innovation Programs",
    "region": "Singapore",
    "fundingType": "Prize",
    "stage": "MVP",
    "minAmountGBP": 10000,
    "maxAmountGBP": 500000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Pilot-ready",
      "Onchain",
      "Enterprise",
      "DevRel"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_039",
    "name": "Accelerators Funding Track 39",
    "provider": "Gov Innovation Office",
    "category": "Accelerators",
    "region": "Global",
    "fundingType": "Grant",
    "stage": "MVP",
    "minAmountGBP": 25000,
    "maxAmountGBP": 500000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Reg-friendly",
      "Onchain",
      "Ecosystem",
      "Enterprise"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_040",
    "name": "AI Startups Funding Track 40",
    "provider": "Ecosystem Foundation",
    "category": "AI Startups",
    "region": "Malta",
    "fundingType": "Prize",
    "stage": "Early traction",
    "minAmountGBP": 25000,
    "maxAmountGBP": 1000000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "DevRel",
      "Go-to-market",
      "Fast-track",
      "Enterprise"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_041",
    "name": "Web3 Funding Track 41",
    "provider": "Gov Innovation Office",
    "category": "Web3",
    "region": "Malta",
    "fundingType": "Equity",
    "stage": "Growth",
    "minAmountGBP": 10000,
    "maxAmountGBP": 25000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Mentorship",
      "Pilot-ready",
      "Fast-track",
      "Ecosystem"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_042",
    "name": "AI Startups Funding Track 42",
    "provider": "DAO Grants Council",
    "category": "AI Startups",
    "region": "Dubai (UAE)",
    "fundingType": "Prize",
    "stage": "Idea",
    "minAmountGBP": 5000,
    "maxAmountGBP": 1000000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "R&D",
      "Enterprise",
      "Pilot-ready",
      "Ecosystem"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_043",
    "name": "AI Startups Funding Track 43",
    "provider": "Corporate Program",
    "category": "AI Startups",
    "region": "Global",
    "fundingType": "Credits",
    "stage": "Growth",
    "minAmountGBP": 25000,
    "maxAmountGBP": 200000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Enterprise",
      "Mentorship",
      "Ecosystem",
      "Reg-friendly"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_044",
    "name": "Accelerators Funding Track 44",
    "provider": "Corporate Program",
    "category": "Accelerators",
    "region": "Global",
    "fundingType": "Hybrid",
    "stage": "Early traction",
    "minAmountGBP": 25000,
    "maxAmountGBP": 100000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "UK-friendly",
      "Fast-track",
      "DevRel",
      "Pilot-ready"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_045",
    "name": "Innovation Programs Funding Track 45",
    "provider": "DAO Grants Council",
    "category": "Innovation Programs",
    "region": "Malta",
    "fundingType": "Credits",
    "stage": "MVP",
    "minAmountGBP": 25000,
    "maxAmountGBP": 1000000,
    "deadline": "Quarterly",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Compute credits",
      "Pilot-ready",
      "Public goods",
      "DevRel"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_046",
    "name": "Web3 Funding Track 46",
    "provider": "Gov Innovation Office",
    "category": "Web3",
    "region": "Singapore",
    "fundingType": "Grant",
    "stage": "Growth",
    "minAmountGBP": 10000,
    "maxAmountGBP": 25000,
    "deadline": "Next 2\u20136 weeks",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Mentorship",
      "Fast-track",
      "Go-to-market",
      "Public goods"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_047",
    "name": "Accelerators Funding Track 47",
    "provider": "Gov Innovation Office",
    "category": "Accelerators",
    "region": "Global",
    "fundingType": "Prize",
    "stage": "Idea",
    "minAmountGBP": 5000,
    "maxAmountGBP": 50000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Go-to-market",
      "Pilot-ready",
      "Ecosystem",
      "Onchain"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  },
  {
    "id": "g_048",
    "name": "AI Startups Funding Track 48",
    "provider": "Ecosystem Foundation",
    "category": "AI Startups",
    "region": "Singapore",
    "fundingType": "Equity",
    "stage": "Idea",
    "minAmountGBP": 10000,
    "maxAmountGBP": 50000,
    "deadline": "Annual",
    "website": "",
    "summary": "Builder-friendly funding route focused on shipping an MVP, measurable milestones, and a clear integration story.",
    "tags": [
      "Fast-track",
      "R&D",
      "Reg-friendly",
      "Go-to-market"
    ],
    "notes": "Tip: keep milestones tight (2\u20134), show demo + user loop, and make evaluation easy for reviewers."
  }
];
