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
  role: "Software Developer",
  incomingRole: {
    title: "System Consultant",
    company: "128 Tech Consulting, Inc.",
    starts: "October 2026",
  },
  location: "Bulacan, Philippines",
  address: "Marilao, Bulacan",
  email: "ragasa.nichos28@gmail.com",
  phone: "+639694831797",
  phoneHref: "tel:+639694831797",
  heroLead: "I build backend APIs and database-driven applications.",
  heroDescription:
    "From REST APIs to relational data and deployment support, I bring a careful, collaborative approach to turning requirements into working software.",
  bio: [
    "I am a BSIT graduate from STI College Caloocan. At Indra Philippines, I built RESTful APIs and database-driven features, investigated backend issues, and supported deployments in an Agile team.",
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
  { label: "Programming Languages", detail: "TypeScript, JavaScript, Java" },
  { label: "Database Architecture", detail: "SQL, MySQL, PostgreSQL, Firebase" },
  { label: "Delivery", detail: "Linux, testing, debugging, Agile" },
];

export const skillGroups = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Java", "C#"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "TypeORM"] },
  { label: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3"] },
  { label: "Database", items: ["MySQL", "PostgreSQL", "Firebase"] },
  { label: "Tools & delivery", items: ["Git", "GitHub", "Bitbucket", "Jira", "YouTrack", "Apidog", "Postman", "VS Code", "Visual Studio", "IntelliJ IDEA", "pgAdmin", "XAMPP", "Docker", "Vercel", "Linux"] },
  { label: "Process and Methodologies", items: ["Software Development Life Cycle", "Agile Development", "Unit Testing"] },
] as const satisfies readonly SkillGroup[];

export const currentlyLearning = ["C#", "Software architecture", "Full-stack development"] as const;

export type SkillName = (typeof skillGroups)[number]["items"][number] | (typeof currentlyLearning)[number];

export const experiences: Experience[] = [
  {
    id: "128-tech-system-consultant",
    role: "System Consultant",
    company: "128 Tech Consulting, Inc.",
    location: "Ortigas, Pasig",
    period: "Starting Oct 2026",
    upcoming: true,
    summary: "Scheduled to join 128 Tech Consulting, Inc. in October 2026 as a System Consultant. The responsibilities below describe the planned scope of the role.",
    contributions: [
      { label: "Implementation", description: "Support system implementation, client training, and system demonstrations." },
      { label: "Client support", description: "Provide application support and analyze client requirements." },
      { label: "Quality & documentation", description: "Perform system quality testing and prepare project documentation." },
    ],
    technologies: ["SQL"],
  },
  {
    id: "indra-backend-intern",
    role: "Backend Developer Intern",
    company: "Indra Philippines",
    location: "Ortigas, Pasig",
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
    school: "STI College Caloocan",
    qualification: "Bachelor of Science in Information Technology",
    period: "Graduated July 2026",
  },
  {
    id: "st-benedict-caloocan",
    school: "St. Benedict School of Novaliches, Inc.",
    qualification: "Senior High School – STEM Strand",
    period: "Graduated 2022",
  },
  { id: "jvcmsi-bulacan",
    school: "Jocelyn V. Cacas Montessori, Inc.",
    qualification: "Junior High School",
    period: "Graduated 2020",}
];

// Restricted projects must contain only information approved for public display.
export const projects: Project[] = [];

// Add certificate files to public/certificates and reference them by /certificates/... .
export const certifications: Certification[] = [
  {
    id: "java-fundamentals",
    name: "Java Fundamentals",
    issuer: "Oracle Academy",
    acquiredAt: "June 24, 2023",
    asset: { kind: "image", src: "/certificates/java-fundamentals.webp", alt: "Java Fundamentals course completion award from Oracle Academy", width: 1584, height: 1224 },
  },
  {
    id: "systems-administration",
    name: "System Administration",
    issuer: "STI",
    organization: "Linux Professional Institute",
    note: "Course completion issued by STI, an LPI Academic Partner.",
    acquiredAt: "June 24, 2023",
    asset: { kind: "image", src: "/certificates/systems-administration.webp", alt: "Systems Administration course completion award from STI with Linux Professional Institute Academic Partner branding", width: 1584, height: 1224 },
  },
];

// This section appears automatically when an item is added.
export const achievements: Achievement[] = [];
