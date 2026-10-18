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
  email: "ragasa.nichos@gmail.com",
  phone: "+639694831797",
  phoneHref: "tel:+639694831797",
  heroLead: "I build dependable software across the stack.",
  heroDescription:
    "From interfaces and REST APIs to relational data and deployment, I turn requirements into working software.",
  bio: [
    "I am a BSIT graduate from STI College Caloocan. At Indra Philippines, I built RESTful APIs and database-driven features, investigated backend issues, and supported deployments in an Agile team.",
    "I work across frontend, backend, and data, with an emphasis on maintainable code, careful debugging, and reliable delivery.",
  ],
  photo: {
    src: "/images/nichos-portrait-editorial.png",
    alt: "Portrait of Nichos Ragasa",
  },
  resumeUrl: "/resume/nichos-ragasa-resume.pdf",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/nchsrgs", kind: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nchsrgs",
    kind: "linkedin",
  },
  { label: "Email", href: `mailto:${profile.email}`, kind: "email" },
];

export const practiceAreas: PracticeArea[] = [
  { label: "Frontend", detail: "React, Next.js, HTML, CSS" },
  { label: "Backend & APIs", detail: "Node.js, Express.js, TypeScript" },
  { label: "Data", detail: "SQL, MySQL, PostgreSQL, Firebase" },
  { label: "Delivery", detail: "Testing, debugging, Linux, Agile" },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "Java", "C#", "Lua"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "TypeORM"],
  },
  { label: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3"] },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "Firebase", "Oracle Database"],
  },
  {
    label: "Tools & delivery",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "YouTrack",
      "Apidog",
      "Postman",
      "VS Code",
      "Visual Studio",
      "IntelliJ IDEA",
      "pgAdmin",
      "XAMPP",
      "Docker",
      "Vercel",
      "Linux",
      "Notepad++",
      "Oracle Virtual Box",
      "Oracle Database",
    ],
  },
  {
    label: "Process and Methodologies",
    items: [
      "Software Development Life Cycle",
      "Agile Development",
      "Unit Testing",
    ],
  },
] as const satisfies readonly SkillGroup[];

export const currentlyLearning = [
  "C#",
  "Software architecture",
  "Full-stack development",
  "Lua",
] as const;

export type SkillName =
  | (typeof skillGroups)[number]["items"][number]
  | (typeof currentlyLearning)[number];

export const experiences: Experience[] = [
  {
    id: "nlex-software-engineer",
    role: "Software Engineer",
    company: "Indra Philippines",
    location: "Ortigas, Pasig",
    period: "Oct 2026 - Present",
    summary:
      "Developing and enhancing lane systems for an expressway Toll Collection System (TCS), applying Lua programming and object-oriented development principles within a sprint-based software development environment.",
    contributions: [
      {
        label: "Lane System Development",
        description:
          "Developing and enhancing software features for expressway toll collection lane systems using Lua, following object-oriented programming principles and established project business rules.",
      },
      {
        label: "Database Operations",
        description:
          "Working with SQL to support database-related operations, data retrieval, and application requirements within the Toll Collection System.",
      },
      {
        label: "Development Environment",
        description:
          "Working with Oracle VM VirtualBox as part of the development environment to support application development and system-related tasks.",
      },
      {
        label: "Agile Sprint Delivery",
        description:
          "Participating in sprint-based development workflows, studying project requirements and business rules, implementing assigned features, and collaborating with the development team.",
      },
      {
        label: "Software Quality & Maintenance",
        description:
          "Applying object-oriented design principles and project conventions to develop, maintain, and troubleshoot lane system functionality while supporting reliable toll collection operations.",
      },
    ],
    technologies: [
      "Lua",
      "SQL",
      "Object-Oriented Programming",
      "Oracle VM VirtualBox",
      "Agile / Scrum",
    ],
  },
  {
    id: "indra-backend-intern",
    role: "Backend Engineer Intern",
    company: "Indra Philippines",
    location: "Ortigas, Pasig",
    period: "Feb 2026 - Jul 2026",
    summary:
      "Developed and maintained backend features for enterprise internal applications, from data changes and testing through release support.",
    contributions: [
      {
        label: "Application features",
        description:
          "Implemented a file archiving function for managing archived records and refreshed system email templates for consistent branding.",
      },
      {
        label: "Backend & data",
        description:
          "Built features with Node.js, Express.js, TypeScript, and TypeORM; created and optimized SQL queries and worked with database entities and relationships.",
      },
      {
        label: "Quality",
        description:
          "Tested changes across Development, Testing, UAT, and Production environments; investigated backend issues and helped identify and fix root causes.",
      },
      {
        label: "Releases",
        description:
          "Supported Linux-based deployments, environment management, release troubleshooting, and technical documentation.",
      },
      {
        label: "Collaboration",
        description:
          "Worked with frontend developers, QA engineers, project managers, and senior developers in Agile delivery using Git, Bitbucket, Jira, YouTrack, Apidog, and HeidiSQL.",
      },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "TypeORM",
      "SQL",
      "Linux",
    ],
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
  {
    id: "jvcmsi-bulacan",
    school: "Jocelyn V. Cacas Montessori, Inc.",
    qualification: "Junior High School",
    period: "Graduated 2020",
  },
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
    asset: {
      kind: "image",
      src: "/certificates/java-fundamentals.webp",
      alt: "Java Fundamentals course completion award from Oracle Academy",
      width: 1584,
      height: 1224,
    },
  },
  {
    id: "systems-administration",
    name: "System Administration",
    issuer: "STI",
    organization: "Linux Professional Institute",
    note: "Course completion issued by STI, an LPI Academic Partner.",
    acquiredAt: "June 24, 2023",
    asset: {
      kind: "image",
      src: "/certificates/systems-administration.webp",
      alt: "Systems Administration course completion award from STI with Linux Professional Institute Academic Partner branding",
      width: 1584,
      height: 1224,
    },
  },
];

// This section appears automatically when an item is added.
export const achievements: Achievement[] = [];
