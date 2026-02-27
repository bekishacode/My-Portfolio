export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'salesforce' | 'web' | 'other';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionDate: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-100
  category: 'salesforce' | 'frontend' | 'backend' | 'tools';
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'stackoverflow' | 'salesforce';
  url: string;
  username: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}