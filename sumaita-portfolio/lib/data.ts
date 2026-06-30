// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// any text on the site — no CMS required.
// ─────────────────────────────────────────────────────────────

export const siteSettings = {
  siteTitle: "Sumaita Islam",
  tagline: "Web Designer & AI/ML Enthusiast",
  metaDescription:
    "Sumaita Islam — Web Designer, Machine Learning & AI Enthusiast, and Computer Science student building elegant digital experiences.",
  siteUrl: "https://sumaitaislam-eight.vercel.app",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  greeting: "Hi, I'm",
  name: "Sumaita Islam",
  roles: ["Web Designer", "ML & AI Enthusiast", "Programming Learner"],
  description:
    "Passionate about coding, AI, machine learning, and modern web development. Focused on creating elegant digital experiences while continuously learning cutting-edge technologies.",
  resumeUrl: "/SUMAITA RESUME.pdf",
};

export const about = {
  eyebrow: "About",
  heading: "Building thoughtfully, learning constantly.",
  paragraphs: [
    "I'm a Computer Science & Engineering student with a steady curiosity for how things are built — from the structure of a clean interface to the logic behind a machine learning model.",
    "My work sits at the intersection of design and engineering: I care about how a product looks and feels just as much as how it performs. That balance is what draws me toward modern web development, where craft and function meet.",
    "Outside of coursework, I explore AI and machine learning through small, hands-on projects — building tools that summarize, debug, and explain, rather than just predicting numbers in a notebook.",
  ],
  mission:
    "My goal is to keep building real, useful things — and to keep getting better at both the design and the engineering behind them.",
};

export const education = [
  {
    institution: "East Delta University",
    degree: "B.Sc in Computer Science & Engineering",
    period: "2023 – Present",
    detail: "",
  },
  {
    institution: "Bangladesh Mahila Samiti Girls' High School & College",
    degree: "Higher Secondary Certificate (Science)",
    period: "2019 – 2021",
    detail: "GPA: 5.00 / 5.00",
  },
  {
    institution: "Aunkur Society Girls High School",
    degree: "Secondary School Certificate (Science)",
    period: "2017 – 2019",
    detail: "GPA: 5.00 / 5.00",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Next.js", "TailwindCSS"],
  },
  {
    title: "Programming",
    skills: ["Python", "C++"],
  },
  {
    title: "Machine Learning",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"],
  },
  {
    title: "Other Skills",
    skills: ["Code Debugging", "Code Review", "Git", "GitHub", "Teamwork", "Problem Solving"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  category: "Web" | "AI/ML" | "Tool";
};

export const projects: Project[] = [
  {
    title: "Aytor — Beauty E-Commerce Website",
    description:
      "A full e-commerce storefront for a beauty brand, covering product browsing, cart flow, and a clean checkout experience.",
    tech: ["Next.js", "React", "TailwindCSS"],
    github: "#",
    live: "#",
    category: "Web",
  },
  {
    title: "MY Folio — Personal Portfolio",
    description:
      "A minimal, animated personal portfolio template built to showcase projects and skills with a fast, modern feel.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "#",
    live: "#",
    category: "Web",
  },
  {
    title: "Bizzency — Corporate Agency Website",
    description:
      "A corporate marketing site for an agency, focused on clear service presentation and a confident visual identity.",
    tech: ["React", "TailwindCSS"],
    github: "#",
    live: "#",
    category: "Web",
  },
  {
    title: "Note Summary & Quiz Generator",
    description:
      "An AI/ML tool that condenses lecture notes into summaries and automatically generates quiz questions to support studying.",
    tech: ["Python", "Streamlit", "Scikit-learn"],
    github: "#",
    category: "AI/ML",
  },
  {
    title: "Code Debug & Reviewer",
    description:
      "A Python tool that reviews code for issues and explains bugs in plain language, aimed at speeding up the debugging process.",
    tech: ["Python", "Streamlit"],
    github: "#",
    category: "Tool",
  },
];

export const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "Creative IT Institute",
    date: "July 2024",
    url: "#",
  },
];

export const hackathons = [
  {
    title: "Edu Hackfest",
    role: "Participant",
    date: "",
  },
];

export const achievements = [
  {
    title: "Merit Scholarship",
    detail: "BDT 200,000",
    issuer: "East Delta University",
  },
];

export const resume = {
  url: "/SUMAITA RESUME.pdf",
  label: "Download Resume",
};

export const contact = {
  email: "contact@sumaitaislam.dev",
  phone: "",
  address: "Chattogram, Bangladesh",
};

export const socialLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sumaita-islam-495712387/" },
  { label: "GitHub", url: "#" },
  { label: "Facebook", url: "https://www.facebook.com/sumaita.islam.180410" },
  { label: "Instagram", url: "https://www.instagram.com/sumaita_samira/" },
  { label: "Twitter", url: "#" },
];

export const footer = {
  note: "Designed & built with care.",
};
