// Single source of truth for site-wide values. Edit these freely.
export const site = {
  name: "Marcin Michalik",
  role: "Senior Software Developer · Full Stack",
  tagline: "I build production web & mobile apps end to end.",
  description:
    "Marcin Michalik — Senior full-stack developer in Oslo. React, TypeScript, Node.js. Projects, writing and contact.",
  url: "https://michalik.no",
  location: "Oslo, Norway",
  email: "marcinxmichalik@gmail.com",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/terragady" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marcin-michalik/" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.no/citations?user=hTTPcNsAAAAJ",
  },
  { label: "Email", href: `mailto:${site.email}` },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Grouped skills, shown on the Work page.
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

// Path to the downloadable CV in /public.
export const cvPath = "/Marcin_Michalik_CV.pdf";
