import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "sms-shortcode-integration",
    title: "SMS Short Code 8397 Integration",
    shortDescription: "Two-way SMS communication system with modern chat interface, enabling real-time customer conversations through Salesforce.",
    fullDescription: "Developed a comprehensive two-way SMS communication system integrating Ethiopia's short code 8397 with Salesforce. The solution includes a modern chat interface with real-time messaging, attachment support, emoji integration, and session transfer capabilities. Built analytics dashboards for customer interaction analysis and automated case/lead creation from chat sessions.",
    image: "/images/projects/sms.jpg",
    images: [
    "/images/projects/sms-integration.png",
    "/images/projects/telegram.jpg",
    "/images/projects/sms.jpg",
  ],
    technologies: ["Apex", "LWC", "Triggers", "Batch Apex", "Queueable Apex", "REST API", "Webhooks"],
    category: "integration",
    featured: true,
    completionDate: "2024",
    client: "Bank of Abyssinia",
    role: "Lead Salesforce Developer",
    challenges: [
      "Real-time two-way communication handling",
      "Session management across multiple agents",
      "File attachment processing within SMS constraints",
      "Scalable architecture for high message volume"
    ],
    solutions: [
      "Developed custom LWC chat interface with real-time updates",
      "Implemented queueable Apex for async message processing",
      "Created batch jobs for session timeout handling",
      "Built REST webhooks for SMS provider integration"
    ],
    results: [
      "Enabled real-time customer communication via SMS",
      "Automated case/lead creation from chat sessions",
      "Improved customer response time by 60%",
      "Integrated attachment and emoji support"
    ]
  },
  {
    id: "2",
    slug: "telegram-bot-integration",
    title: "Telegram Bot Integration",
    shortDescription: "Full-featured Telegram bot for banking services including case tracking, product requests, and customer support.",
    fullDescription: "Developed a comprehensive Telegram bot using grammy framework, integrated with Salesforce for real-time banking services. Features include case status tracking, new customer onboarding, product requests, and two-way communication with support agents.",
    image: "/images/projects/telegram.jpg",
    images: [
    "/images/projects/telegram-integration.png",
    "/images/projects/telegram.jpg",
    "/images/projects/telegram-integration.png",
    "/images/projects/telegram-integration.png"
  ],
    technologies: ["Apex", "LWC", "Grammy.js", "Node.js", "Telegram Bot API", "REST APIs"],
    category: "integration",
    featured: true,
    completionDate: "2024",
    client: "Bank of Abyssinia",
    role: "Full Stack Developer",
    challenges: [
      "Real-time case status updates",
      "Secure customer authentication",
      "Handling multiple concurrent conversations",
      "Integrating with Salesforce objects"
    ],
    solutions: [
      "Built bot using grammy framework with middleware architecture",
      "Implemented secure OTP verification for case tracking",
      "Created LWC components for agent chat interface",
      "Developed Apex REST endpoints for bot communication"
    ],
    results: [
      "Customers can track cases in real-time via Telegram",
      "Automated new customer onboarding process",
      "Reduced support call volume by 40%",
      "24/7 automated customer service"
    ]
  },
  {
    id: "3",
    slug: "fayda-national-id-integration",
    title: "Ethiopian National ID (FAYDA) Integration",
    shortDescription: "Customer authentication and verification system integrating with Ethiopia's national digital ID platform.",
    fullDescription: "Developed integration with Ethiopia's national digital ID (FAYDA) for customer authentication and verification. The solution includes a Node.js Express middleware, custom LWC components, and Apex services for seamless identity verification and lead enrichment.",
    image: "/images/projects/sms.jpg",
    technologies: ["Apex", "LWC", "Node.js", "Express", "REST API", "OAuth"],
    category: "integration",
    featured: true,
    completionDate: "2024",
    client: "Bank of Abyssinia",
    role: "Integration Developer",
    challenges: [
      "Secure handling of national ID data",
      "Real-time verification with external API",
      "Data mapping between FAYDA and Salesforce",
      "Error handling and fallback mechanisms"
    ],
    solutions: [
      "Built Node.js Express middleware for API proxying",
      "Created LWC components for ID verification UI",
      "Implemented Apex services for lead enrichment",
      "Added comprehensive error handling and logging"
    ],
    results: [
      "Automated customer identity verification",
      "Reduced manual data entry errors by 90%",
      "Improved KYC compliance",
      "Enhanced lead data quality"
    ]
  },
  {
    id: "4",
    slug: "digital-signature-lwc",
    title: "Digital Signature LWC Component",
    shortDescription: "Custom LWC component for capturing and storing digital signatures directly in Salesforce.",
    fullDescription: "Developed a reusable LWC component that allows customers to provide digital signatures directly within Salesforce. Signatures are captured via mouse/touch input and stored as files in Salesforce, integrated with approval processes and document generation.",
    image: "/images/projects/sms.jpg",
    technologies: ["LWC", "Apex", "JavaScript", "HTML5 Canvas", "Salesforce Files"],
    category: "lwc",
    featured: false,
    completionDate: "2023",
    client: "Bank of Abyssinia",
    role: "Salesforce Developer",
    challenges: [
      "Cross-browser compatibility",
      "Touch vs mouse input handling",
      "Secure signature storage",
      "Integration with approval processes"
    ],
    solutions: [
      "Used HTML5 Canvas for signature capture",
      "Implemented responsive design for all devices",
      "Stored signatures as Salesforce Files",
      "Created reusable component with configurable options"
    ],
    results: [
      "Digitized signature collection process",
      "Reduced paper usage by 80%",
      "Faster document processing",
      "Audit trail for all signatures"
    ]
  },
  {
    id: "5",
    slug: "web-to-lead-custom-forms",
    title: "Web to Lead & Web to Case Custom Forms",
    shortDescription: "Custom landing pages and forms for lead capture and case submission with seamless Salesforce integration.",
    fullDescription: "Designed and developed custom HTML/CSS landing pages for Web to Lead and Web to Case functionality. Created responsive forms with validation, spam protection, and seamless integration with Salesforce.",
    image: "/images/projects/sms.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Salesforce Web-to-Lead", "Salesforce Web-to-Case"],
    category: "salesforce",
    featured: false,
    completionDate: "2023",
    client: "Bank of Abyssinia",
    role: "Frontend Developer",
    challenges: [
      "Responsive design for all devices",
      "Form validation and error handling",
      "Spam prevention",
      "Seamless Salesforce integration"
    ],
    solutions: [
      "Built mobile-first responsive forms",
      "Implemented client-side validation",
      "Added CAPTCHA for spam protection",
      "Used Salesforce standard web-to-* APIs"
    ],
    results: [
      "Increased lead capture by 50%",
      "Reduced spam submissions",
      "Better user experience on mobile",
      "Automated lead creation"
    ]
  },
  {
    id: "6",
    slug: "email-to-case-integration",
    title: "Email to Case Integration",
    shortDescription: "Multi-channel email integration enabling automatic case creation from various email sources.",
    fullDescription: "Configured and customized Salesforce Email-to-Case functionality to accept cases from multiple email channels. Implemented automated case creation, email threading, and custom routing rules based on email content.",
    image: "/images/projects/sms.jpg",
    technologies: ["Salesforce Email-to-Case", "Apex", "Email Services", "Automation"],
    category: "salesforce",
    featured: false,
    completionDate: "2023",
    client: "Bank of Abyssinia",
    role: "Salesforce Administrator/Developer",
    challenges: [
      "Multiple email channel management",
      "Preventing email loops",
      "Custom routing based on content",
      "Attachment handling"
    ],
    solutions: [
      "Configured multiple Email-to-Case addresses",
      "Implemented email services for custom parsing",
      "Created Apex logic for intelligent routing",
      "Automated case assignment based on content"
    ],
    results: [
      "Centralized customer support emails",
      "Faster case resolution times",
      "Automated case creation",
      "Better tracking of customer issues"
    ]
  },
  {
    id: "7",
    slug: "external-channel-integrations",
    title: "External Channel Integrations (Facebook, WhatsApp, WebChat)",
    shortDescription: "Multi-channel communication integration using built-in Salesforce functionality.",
    fullDescription: "Configured and customized Salesforce's built-in external channel integrations for Facebook Messenger, WhatsApp, and WebChat. Enabled seamless customer communication across multiple platforms within Salesforce.",
    image: "/images/projects/sms.jpg",
    technologies: ["Salesforce Digital Engagement", "Facebook API", "WhatsApp Business API", "LWC"],
    category: "integration",
    featured: false,
    completionDate: "2024",
    client: "Bank of Abyssinia",
    role: "Salesforce Developer",
    challenges: [
      "Channel-specific configuration",
      "Message routing and assignment",
      "Consistent experience across channels",
      "Integration with Service Console"
    ],
    solutions: [
      "Leveraged Salesforce Digital Engagement features",
      "Customized channel configurations",
      "Implemented unified agent interface",
      "Created cross-channel reporting"
    ],
    results: [
      "Omnichannel customer support",
      "Agents handle all channels in one console",
      "Improved customer satisfaction",
      "Consistent messaging across platforms"
    ]
  },
  {
    id: "8",
    slug: "Other-channel-integrations",
    title: "External Channel Integrations (Facebook, WhatsApp, WebChat)",
    shortDescription: "Multi-channel communication integration using built-in Salesforce functionality.",
    fullDescription: "Configured and customized Salesforce's built-in external channel integrations for Facebook Messenger, WhatsApp, and WebChat. Enabled seamless customer communication across multiple platforms within Salesforce.",
    image: "/images/projects/sms.jpg",
    technologies: ["Salesforce Digital Engagement", "Facebook API", "WhatsApp Business API", "LWC"],
    category: "integration",
    featured: false,
    completionDate: "2026",
    client: "Bank of Abyssinia",
    role: "Salesforce Developer",
    challenges: [
      "Channel-specific configuration",
      "Message routing and assignment",
      "Consistent experience across channels",
      "Integration with Service Console"
    ],
    solutions: [
      "Leveraged Salesforce Digital Engagement features",
      "Customized channel configurations",
      "Implemented unified agent interface",
      "Created cross-channel reporting"
    ],
    results: [
      "Omnichannel customer support",
      "Agents handle all channels in one console",
      "Improved customer satisfaction",
      "Consistent messaging across platforms"
    ]
  }

];