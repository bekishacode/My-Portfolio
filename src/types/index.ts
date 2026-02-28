export interface Project {
  id: string;
  slug: string;              // URL-friendly name
  title: string;
  shortDescription: string;  // For listing page
  fullDescription: string;   // For detail page
  image: string;
  technologies: string[];
  category: 'salesforce' | 'integration' | 'lwc' | 'api';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionDate: string;
  client?: string;           // Bank of Abyssinia etc.
  role: string;              // Your role
  challenges: string[];      // Key challenges overcome
  solutions: string[];       // Solutions implemented
  results: string[];         // Business results
  images?: string[];         // Additional screenshots
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