export type Language = 'th' | 'en';

export interface LocalizedString {
  th: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: LocalizedString;
  href: string;
}

export interface StatItem {
  value: string;
  label: LocalizedString;
  sublabel?: LocalizedString;
}

export interface Project {
  id: string;
  title: string;
  tagline: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  fullOverview: LocalizedString;
  challenges: LocalizedString[];
  solutions: LocalizedString[];
  techStack: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string;
  gradient: string;
  year: string;
  role: LocalizedString;
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  skills: {
    name: string;
    level: string;
    description: LocalizedString;
    iconName: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: LocalizedString;
  company: string;
  location: LocalizedString;
  description: LocalizedString;
  achievements: LocalizedString[];
  technologies: string[];
  type: 'work' | 'education' | 'award';
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  iconName: string;
}

export interface PersonalInfo {
  name: LocalizedString;
  nickname?: LocalizedString;
  role: LocalizedString;
  secondaryRole: LocalizedString;
  heroTagline: LocalizedString;
  aboutBio: LocalizedString[];
  location: LocalizedString;
  status: LocalizedString;
  email: string;
  github: string;
  linkedin: string;
  stats: StatItem[];
  socials: SocialLink[];
}
