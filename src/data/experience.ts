import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Salesforce Consulting Partners",
    position: "Senior Salesforce Developer",
    startDate: "2022",
    endDate: "Present",
    current: true,
    description: [
      "Lead development of custom Salesforce solutions using Apex, LWC, and integrations",
      "Designed and implemented complex business logic with Apex triggers and batch processes",
      "Mentored junior developers and conducted code reviews",
      "Optimized SOQL queries resulting in 40% performance improvement"
    ],
    technologies: ["Apex", "LWC", "SOQL", "Integration", "JavaScript"]
  },
  {
    company: "Tech Solutions Inc.",
    position: "Salesforce Developer",
    startDate: "2020",
    endDate: "2022",
    current: false,
    description: [
      "Developed custom Lightning Web Components for various business requirements",
      "Implemented Salesforce Flow automations reducing manual work by 30%",
      "Managed deployment processes using Change Sets and ANT Migration Tool",
      "Collaborated with stakeholders to gather and analyze requirements"
    ],
    technologies: ["Apex", "LWC", "Flows", "Process Builder", "JavaScript"]
  },
  {
    company: "Digital Innovations",
    position: "Junior Salesforce Developer",
    startDate: "2019",
    endDate: "2020",
    current: false,
    description: [
      "Assisted in development of Apex classes and triggers",
      "Maintained and debugged existing Salesforce implementations",
      "Created reports and dashboards for sales teams",
      "Participated in agile development processes"
    ],
    technologies: ["Apex", "Visualforce", "SOQL", "Reports"]
  }
];