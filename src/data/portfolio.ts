import type {
  Achievement,
  Certification,
  Education,
  Experience,
  Project,
  PracticeArea,
  SkillGroup,
  SocialLink,
} from "@/types/portfolio";

const nameLines = ["Nichos", "Ragasa"];

export const profile = {
  name: nameLines.join(" "),
  nameLines,
  role: "Software Engineer",
  location: "Bulacan, Philippines",
  address: "Marilao, Bulacan",
  email: "ragasa.nichos28@gmail.com",
  phone: "+639694831797",
  phoneHref: "tel:+639694831797",
  heroLead: "I build backend APIs and database-driven applications.",
  heroDescription:
    "From REST APIs to relational data and deployment support, I bring a careful, collaborative approach to turning requirements into working software.",
  bio: [
    "I am a BSIT graduate from STI College Caloocan Campus. At Indra Philippines, I built RESTful APIs and database-driven features, investigated backend issues, and supported deployments in an Agile team.",
    "My current focus is deepening my software engineering practice across backend systems, architecture, and full-stack development. Over time, I hope to bring that technical grounding into AI solutions architecture and client-facing work.",
  ],
  photo: {
    src: "/images/nichos-portrait.jpg",
    alt: "Nichos Ragasa seated in a casual portrait",
  },
  resumeUrl: "/resume/nichos-ragasa-resume.pdf",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/nchsrgs", kind: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nchsrgs", kind: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, kind: "email" },
];

export const practiceAreas: PracticeArea[] = [
  { label: "Backend & APIs", detail: "Node.js, Express.js, REST APIs" },
  { label: "Languages", detail: "TypeScript, JavaScript, Java" },
  { label: "Data & persistence", detail: "SQL, TypeORM, MySQL, PostgreSQL" },
  { label: "Delivery", detail: "Linux, testing, debugging, Agile" },
];

export const skillGroups = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Java", "C#"] },
  { label: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "TypeORM"] },
  { label: "Frontend", items: ["HTML5", "CSS3"] },
  { label: "Database", items: ["MySQL", "PostgreSQL", "Database design", "SQL queries"] },
  { label: "Tools & delivery", items: ["Git", "Bitbucket", "Jira", "YouTrack", "Apidog", "Postman", "Linux", "Agile"] },
] as const satisfies readonly SkillGroup[];

export const currentlyLearning = ["C#", "Software architecture", "Full-stack development"] as const;

export type SkillName = (typeof skillGroups)[number]["items"][number] | (typeof currentlyLearning)[number];

export const experiences: Experience[] = [
  {
    id: "indra-backend-intern",
    role: "Backend Developer Intern",
    company: "Indra Philippines",
    period: "Feb 2026 - Aug 2026",
    summary: "Developed and maintained backend features for enterprise internal applications, from data changes and testing through release support.",
    contributions: [
      { label: "Application features", description: "Implemented a file archiving function for managing archived records and refreshed system email templates for consistent branding." },
      { label: "Backend & data", description: "Built features with Node.js, Express.js, TypeScript, and TypeORM; created and optimized SQL queries and worked with database entities and relationships." },
      { label: "Quality", description: "Tested changes across Development, Testing, UAT, and Production environments; investigated backend issues and helped identify and fix root causes." },
      { label: "Releases", description: "Supported Linux-based deployments, environment management, release troubleshooting, and technical documentation." },
      { label: "Collaboration", description: "Worked with frontend developers, QA engineers, project managers, and senior developers in Agile delivery using Git, Bitbucket, Jira, YouTrack, Apidog, and HeidiSQL." },
    ],
    technologies: ["Node.js", "Express.js", "TypeScript", "TypeORM", "SQL", "Linux"],
  },
];

export const education: Education[] = [
  {
    id: "sti-college-caloocan",
    school: "STI College Caloocan Campus",
    qualification: "Bachelor of Science in Information Technology",
    period: "2022 - 2026",
    details: "Graduated with a foundation in software development and information systems.",
  },
];

// Restricted projects must contain only information approved for public display.
export const projects: Project[] = [];

// Add certificate files to public/certificates and reference them by /certificates/... .
export const certifications: Certification[] = [];

// This section appears automatically when an item is added.
export const achievements: Achievement[] = [];
