// Single source of truth for site-wide values. Edit these freely.
export const site = {
  name: "Marcin Michalik",
  role: "Senior Software Developer · Full Stack",
  tagline: "I build production web & mobile apps end to end.",
  description:
    "Marcin Michalik — Senior full-stack developer in Oslo. React, TypeScript, Node.js. Projects, writing and contact.",
  url: "https://michalik.no",
  location: "Oslo, Norway",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/terragady", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcin-michalik/",
    icon: "linkedin",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.no/citations?user=hTTPcNsAAAAJ",
    icon: "scholar",
  },
] as const;

// Public Web3Forms access key — safe to expose client-side (that's how it works).
// Get yours free at https://web3forms.com: enter the inbox you want messages
// delivered to, then paste the emailed key here. Until then the form won't send.
export const contactFormAccessKey = "3685bdad-5f13-46f0-8ae1-9aee9a618baa";

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Grouped skills, shown in the Skills section on the home page.
export const skills: { group: string; items: string }[] = [
  {
    group: "Languages & Frameworks",
    items:
      "JavaScript, TypeScript, React, React Native, Node.js/Express, GraphQL, REST, HTML, CSS (Tailwind/SASS), Python",
  },
  {
    group: "Frontend",
    items:
      "Micro-frontends, accessibility (WCAG), state management, WebSockets, Webpack / Vite / Bun",
  },
  {
    group: "Backend & Data",
    items:
      "Node.js, GraphQL, REST APIs, PostgreSQL, MongoDB, data migration, C/C++ for microcontrollers",
  },
  {
    group: "Cloud & DevOps",
    items:
      "Docker, Google Cloud Platform (GCP), Git, CI/CD (GitHub / GitLab), monorepos, Unix/Linux",
  },
  {
    group: "AI-Assisted Development",
    items:
      "Agentic coding (Claude Code, Copilot), agent skills & MCP, LLM APIs (Anthropic / OpenAI), prompt & context engineering, integrating AI features into products",
  },
  {
    group: "Testing & Methodology",
    items: "TDD, Jest / Mocha / Playwright, Agile / Scrum, Jira / Confluence / Monday",
  },
  {
    group: "Other",
    items: "QA & risk management for medical-device software, CMS management",
  },
];

// Mirrors the CV's Education section.
export const education: { degree: string; org: string; note: string }[] = [
  {
    degree: "PhD, Protein Evolution",
    org: "Max Planck Institute for Developmental Biology, Tübingen",
    note: "2013–2017 (from 2014 at University of Oslo, Dept. of Biosciences, EVOGENE)",
  },
  {
    degree: "MSc, Biotechnology",
    org: "Maria Curie-Skłodowska University, Lublin",
    note: "2010–2012",
  },
  {
    degree: "BSc, Biotechnology",
    org: "Maria Curie-Skłodowska University, Lublin",
    note: "2007–2010",
  },
];

// Abbreviated on purpose — the CV carries the full author lists.
export const publications: string[] = [
  "Michalik M, et al. (2017). An evolutionarily conserved glycine-tyrosine motif forms a folding core in outer membrane proteins. PLoS One 12:e0182016.",
  "Meuskens I, Michalik M, et al. (2017). A New Strain Collection for Improved Expression of Outer Membrane Proteins. Front Cell Infect Microbiol 7:464.",
  "Michalik M, Djahanshiri B, Leo JC, Linke D (2016). Reverse Vaccinology: The Pathway from Genomes and Epitope Predictions to Tailored Recombinant Vaccines. Methods Mol Biol 1403:87–106.",
];

export const languages: { name: string; level: string }[] = [
  { name: "Polish", level: "native" },
  { name: "English", level: "fluent" },
  { name: "Norwegian", level: "intermediate" },
  { name: "German", level: "elementary" },
];

export const interests: string[] = [
  "Sport (climbing, hiking, mountain cycling)",
  "DIY & maker projects (drones, home automation, brewing controllers, 3D printing)",
  "Following tech & AI news",
];
