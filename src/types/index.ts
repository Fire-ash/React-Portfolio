export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  status?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stats {
  label: string;
  value: string;
}
