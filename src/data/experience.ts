import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Bank of Abyssinia",
    position: "Salesforce Administrator",
    startDate: "2025",
    endDate: "Present",
    current: true,
    description: [
      "Lead development of custom Salesforce solutions using Apex, LWC, and integrations",
      "Designed and implemented complex business logic with Apex triggers and batch processes",
      "Mentored junior developers and conducted code reviews",
      "Optimized SOQL queries resulting in 40% performance improvement"
    ],
    technologies: ["SOQL", "Flows", "Process Builder"]
  },
  {
    company: "Bank of Abyssinia",
    position: "Salesforce Developer",
    startDate: "2025",
    endDate: "Present",
    current: true,
    description: [
      "Developed custom Lightning Web Components for various business requirements",
      "Implemented Salesforce Flow automations reducing manual work by 30%",
      "Managed deployment processes using Change Sets and ANT Migration Tool",
      "Collaborated with stakeholders to gather and analyze requirements"
    ],
    technologies: ["Apex", "LWC", "SOQL", "Integration"]
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    startDate: "2024",
    endDate: "2025",
    current: false,
    description: [
      "Assisted in the development of front-end and back-end web applications",
      "Maintained, debugged, and optimized existing web platforms and APIs",
      "Built and customized user interfaces and data visualizations for business users",
      "Collaborated in agile development processes like sprint planning and code reviews"
    ],
    technologies: ["React and Next", "JavaScript", "TypeScript", "Tailwindcss"]
  }
];