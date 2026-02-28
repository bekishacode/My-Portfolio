export const sectionBackgrounds = {
  // Home page sections
  home: {
    hero: "bg-background",                    // Clean background for hero
    skills: "bg-primary/30",                     // Muted background for skills
    featured: "bg-gradient-to-br from-primary/5 via-background to-accent/5", // Gradient
    testimonials: "bg-secondary"
  },
  
  // About page sections
  about: {
    profile: "bg-card",                         // Card background for profile
    experience: "bg-muted/20",                   // Light muted for experience
    certifications: "bg-gradient-to-tl from-accent/5 via-background to-primary/5", // Gradient
  },
  
  // Contact page sections
  contact: {
    form: "bg-background",                       // Clean background for form
    info: "bg-primary/5",                         // Primary tint for contact info
  },
  
  // Projects page sections
  projects: {
    grid: "bg-muted/20",                         // Muted for project grid
    featured: "bg-accent/5",                      // Accent tint for featured
  }
};

export type SectionType = keyof typeof sectionBackgrounds;
export type HomeSection = keyof typeof sectionBackgrounds.home;
export type AboutSection = keyof typeof sectionBackgrounds.about;
export type ContactSection = keyof typeof sectionBackgrounds.contact;