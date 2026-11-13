export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  color: string;
  featured: boolean;
  description: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "forma",
    number: "01",
    name: "FORMA",
    category: "Identity · Digital",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Sculptural sunlit interior for a contemporary living space",
    color: "#d8d1c5",
    featured: true,
    description:
      "A new point of view for a design house making the everyday feel extraordinary. We built a living identity that makes room for imperfection, material, and light.",
    outcome: "A complete brand world, from first impression to final detail.",
  },
  {
    slug: "still-life",
    number: "02",
    name: "STILL / LIFE",
    category: "Strategy · E-commerce",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Fresh flowers arranged in a bright, considered composition",
    color: "#cfc5b2",
    featured: true,
    description:
      "A softer kind of daily ritual. We helped a modern florist find its voice in a crowded market, then gave that voice a home online.",
    outcome: "A thoughtful storefront designed to make the good things last.",
  },
  {
    slug: "offhours",
    number: "03",
    name: "OFFHOURS",
    category: "Identity · Campaign",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Fashion portrait with a bold editorial attitude",
    color: "#6d665c",
    featured: true,
    description:
      "For the ones going somewhere else. A fashion label with an instinct for the in-between, expressed through a visual language that refuses to sit still.",
    outcome: "An expressive identity for a new generation of independent dressers.",
  },
  {
    slug: "solace",
    number: "04",
    name: "SOLACE",
    category: "Digital · Product",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Golden light settling over a still, open landscape",
    color: "#b4aa91",
    featured: true,
    description:
      "A different way to find your quiet. We translated the restorative power of nature into an unhurried digital product built for real life.",
    outcome: "A calmer digital experience from the very first tap.",
  },
  {
    slug: "common-ground",
    number: "05",
    name: "COMMON GROUND",
    category: "Strategy · Identity",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern architecture framed against a clear sky",
    color: "#d8d2c8",
    featured: false,
    description:
      "A shared vision for a new kind of neighborhood space. We shaped a welcoming identity rooted in connection, curiosity, and everyday exchange.",
    outcome: "A flexible brand system built to bring people together.",
  },
  {
    slug: "good-weather",
    number: "06",
    name: "GOOD WEATHER",
    category: "Identity · Packaging",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Open landscape in warm afternoon light",
    color: "#d9c7a6",
    featured: false,
    description:
      "A brighter outlook for an independent outdoor essentials label, with an optimistic identity made for long days and open plans.",
    outcome: "A distinctive visual world made to travel from shelf to trail.",
  },
  {
    slug: "kinfolk-table",
    number: "07",
    name: "KINFOLK TABLE",
    category: "Digital · E-commerce",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Seasonal ingredients arranged for a shared meal",
    color: "#c9bea9",
    featured: false,
    description:
      "A considered digital home for a small-batch pantry brand. We brought the makers, ingredients, and rituals behind every jar to the foreground.",
    outcome: "A warmer shopping experience with the story at its heart.",
  },
  {
    slug: "form-and-field",
    number: "08",
    name: "FORM & FIELD",
    category: "Strategy · Digital",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Quiet workspace with natural materials and soft light",
    color: "#c8c0b3",
    featured: false,
    description:
      "A clearer point of view for an independent architecture practice, expressed through a refined identity and a portfolio built around the work.",
    outcome: "A simple, enduring digital platform for a growing studio.",
  },
];
