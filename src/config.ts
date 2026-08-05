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
    items: "Docker, Google Cloud Platform, Git, CI/CD (GitHub / GitLab), monorepos, Unix/Linux",
  },
  {
    group: "AI-Assisted Development",
    items:
      "Agentic coding (Claude Code, Copilot), agent skills & MCP, LLM APIs (Anthropic / OpenAI), prompt & context engineering",
  },
  {
    group: "Testing & Methodology",
    items: "TDD, Jest / Mocha / Playwright, Agile / Scrum, Jira / Confluence / Monday",
  },
];
