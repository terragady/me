// Single source of truth for site-wide values. Edit these freely.
export const site = {
  name: "Marcin Michalik",
  role: "Software Developer", // TODO: adjust to your actual title
  tagline: "I build things for the web.", // TODO: your one-liner
  description:
    "Personal site of Marcin Michalik — developer, projects, writing and contact.",
  url: "https://michalik.no",
  email: "terragady@gmail.com",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/terragady" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/" }, // TODO: your profile
  { label: "Email", href: `mailto:${site.email}` },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
