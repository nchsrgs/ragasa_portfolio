export type SocialLink = {
  label: string;
  href: string;
  kind: "github" | "linkedin" | "email";
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  contributions: { label: string; description: string }[];
  technologies: string[];
  systems?: { name: string; description: string }[];
  tools?: string[];
  methodologies?: string[];
};

export type PracticeArea = {
  label: string;
  detail: string;
};

export type Education = {
  id: string;
  school: string;
  qualification: string;
  period: string;
  details?: string;
};

type ProjectSummary = {
  id: string;
  name: string;
  shortDescription: string;
  date: string;
  technologies: string[];
};

export type Project = ProjectSummary & (
  | {
      isNDA: true;
      description?: never;
      features?: never;
      architecture?: never;
      contribution?: never;
      image?: never;
      websiteUrl?: never;
      repositoryUrl?: never;
      links?: never;
    }
  | {
      isNDA?: false;
      description: string;
      features?: string[];
      architecture?: string[];
      contribution?: string;
      image?: { src: string; alt: string };
      websiteUrl?: string;
      repositoryUrl?: string;
      links?: { label: string; href: string }[];
    }
);

export type Certification = {
  id: string;
  name: string;
  acquiredAt: string;
  issuer?: string;
  asset:
    | { kind: "pdf"; src: `/certificates/${string}.pdf` }
    | { kind: "image"; src: `/certificates/${string}.${"jpg" | "jpeg" | "png" | "webp"}`; alt: string; width: number; height: number };
};

export type SkillGroup = {
  label: string;
  items: readonly string[];
};

export type Achievement = {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  url?: string;
};
