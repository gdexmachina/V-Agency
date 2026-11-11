export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  color: string;
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
    description:
      "A different way to find your quiet. We translated the restorative power of nature into an unhurried digital product built for real life.",
    outcome: "A calmer digital experience from the very first tap.",
  },
];
