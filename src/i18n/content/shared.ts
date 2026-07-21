export const RESEARCH_LINKS = {
  ebrain:
    "https://drive.google.com/file/d/1ezMtR8nA6skwas9sc-OCNCWq0IyQkjkH/view",
  gender:
    "https://drive.google.com/file/d/12Fqo6CqU5zPI6X3DGB6CRB2hLpGwGlxB/view?usp=sharing",
  mathTextor:
    "https://drive.google.com/file/d/1sMfhqQK3Pa2jVjlNYSmCbQ5T4j-dNu1X/view?usp=sharing",
} as const;

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  highlights: string[];
  github?: string;
  external?: string;
  image: string;
  imageSrc: string;
};

export type PublicationItem = {
  title: string;
  type: string;
  authors: string[];
  advisors?: string;
  abstract: string;
  link: string;
};

export type SiteContent = {
  hero: {
    nameFull: string;
    nameGiven: string;
  };
  about: {
    bioComment: string;
    bioParagraphs: string[];
    educationTitle: string;
    educationSchool: string;
    educationDegree: string;
    educationDetails: string;
    educationCoursework: string;
    statYearsCoding: string;
    statProjects: string;
    statResearch: string;
    skills: {
      category: string;
      items: string[];
    }[];
  };
  projects: {
    featuredLabel: string;
    items: ProjectItem[];
  };
  experiences: ExperienceItem[];
  research: {
    interests: { title: string; description: string }[];
    current: {
      role: string;
      lab: string;
      institution: string;
      period: string;
      roleMeta: string;
      topic: string;
      summary: string;
      authors: string[];
      link: string;
    };
    publications: PublicationItem[];
    advisedBy: string;
  };
};
