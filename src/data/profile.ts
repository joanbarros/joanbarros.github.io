// Site-wide personal details. Edit here; every page reads from this file.
import type { IconName } from "../components/Icon.astro";

type Link = {
  label: string;
  href: string;
  icon?: IconName;
  // Set to false to show the link on the homepage but not on the resume.
  resume?: boolean;
};

export const profile = {
  name: "Joan Barros",
  headline: "Senior Software Engineer",
  location: "Santo Domingo, Dominican Republic",
  email: "barros.joan@gmail.com",
  description:
    "Joan Barros is a senior software engineer in Santo Domingo who designs, builds, maintains and improves software solutions.",
  intro: [
    "I'm a software engineer with extensive experience designing, developing, maintaining and improving software solutions.",
    "I'm passionate about challenging projects and building meaningful solutions to complex problems. My background spans software engineering, systems analysis, technical support and software project management.",
  ],
  strengths: [
    "Software engineering",
    "Software project management",
    "Systems analysis",
    "Solution development & maintenance",
    "Reporting dashboards",
    "AI & agentic development workflows",
    "Algorithms & design patterns",
    "Technical support & systems",
  ],
  technologies: [
    "C",
    "C#",
    ".NET / ASP.NET MVC",
    "T-SQL / SQL Server",
    "SSRS",
    "Salesforce",
    "JavaScript / Node.js",
    "Python",
    "Ruby",
    "Go",
    "Claude Code",
    "Codex",
    "Local LLMs",
  ],
  languages: [
    { name: "Spanish", level: "Native or bilingual" },
    { name: "English", level: "Native or bilingual" },
    { name: "French", level: "Elementary" },
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/joanbarros/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/joanbarros", icon: "github" },
    { label: "Blog", href: "https://joanbarros.blogspot.com/", resume: false },
    { label: "Ant Tech Solutions", href: "https://www.ant-tech.com/", resume: false },
    { label: "Stack Overflow", href: "https://stackoverflow.com/users/244054/joan-barros", resume: false },
    { label: "X / Twitter", href: "https://x.com/joanbarros", icon: "x" },
  ] as Link[],
} as const;
