export const services = [
  "Full Stack Development",
  "AI & GenAI",
  "Data & Cloud",
  "Low Code / No Code",
  "E-learning",
  "Infra & Security",
  "Workplace Transformation",
  "Staff Augmentation",
];

export interface ServiceImpact {
  metric: string;
  label: string;
}

export interface ServiceDetail {
  name: string;
  tagline: string;
  problems: string[];
  solution: string;
  features: string[];
  impact: ServiceImpact[];
}

export interface ServiceDetails {
  [key: string]: ServiceDetail;
}

export const serviceDetails: ServiceDetails = {
  "fullstack-development": {
    name: "Full Stack Development",
    tagline: "End-to-End Web & Mobile Application Development",
    problems: [
      "Fragmented development teams slow down delivery",
      "Inconsistent technology choices lead to technical debt",
      "Lack of expertise across frontend and backend technologies"
    ],
    solution: "Complete full-stack development services covering web and mobile platforms with modern frameworks and best practices for scalable, maintainable applications.",
    features: [
      "React.js & Angular Development",
      "Django Backend Development",
      "React Native Mobile Apps",
      "RESTful & GraphQL APIs",
      "Progressive Web Apps (PWA)",
      "Database Design & Optimization",
      "Cloud Deployment & DevOps",
      "Responsive UI/UX Implementation"
    ],
    impact: [
      { metric: "50%", label: "Faster time-to-market" },
      { metric: "Full-stack", label: "Unified expertise" },
      { metric: "↑ Quality", label: "Modern architecture" }
    ]
  },
  "ai-genai": {
    name: "AI & GenAI",
    tagline: "Intelligent Automation & Generative AI Solutions",
    problems: [
      "Manual processes consume significant resources",
      "Lack of data-driven insights for decision making",
      "Limited ability to scale operations efficiently"
    ],
    solution: "Leverage cutting-edge AI and generative AI to automate processes, gain insights, and create intelligent solutions that transform your business operations.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Generative AI Applications",
      "AI Model Training & Deployment"
    ],
    impact: [
      { metric: "70%", label: "Process automation" },
      { metric: "3x", label: "Faster insights" },
      { metric: "↑ ROI", label: "Improved efficiency" }
    ]
  },
  "data-cloud": {
    name: "Data & Cloud",
    tagline: "Modern Data Architecture & Cloud Solutions",
    problems: [
      "Data silos prevent unified insights",
      "Legacy infrastructure limits scalability",
      "High operational costs and maintenance overhead"
    ],
    solution: "Modern data architecture and cloud solutions for scalable, secure, and efficient operations with real-time analytics capabilities.",
    features: [
      "Data Engineering",
      "Cloud Migration",
      "Data Lakes & Warehouses",
      "Real-time Analytics",
      "Cloud Infrastructure Setup",
      "Data Pipeline Automation"
    ],
    impact: [
      { metric: "50%", label: "Cost reduction" },
      { metric: "Real-time", label: "Data insights" },
      { metric: "∞", label: "Scalability" }
    ]
  },
  "infra-security": {
    name: "Infra & Security",
    tagline: "Enterprise Infrastructure & Cybersecurity Solutions",
    problems: [
      "Security vulnerabilities expose critical data",
      "Complex compliance requirements",
      "Lack of monitoring and incident response"
    ],
    solution: "Robust infrastructure and security solutions to protect your digital assets with DevSecOps practices and continuous monitoring.",
    features: [
      "DevSecOps",
      "Cloud Security",
      "Compliance Automation",
      "Monitoring & Alerting",
      "Penetration Testing",
      "Security Audits"
    ],
    impact: [
      { metric: "100%", label: "Compliance coverage" },
      { metric: "↓ 90%", label: "Security incidents" },
      { metric: "24/7", label: "Monitoring" }
    ]
  },
  "elearning": {
    name: "E-learning",
    tagline: "Comprehensive Digital Learning Solutions",
    problems: [
      "Traditional training methods lack engagement",
      "Difficult to track learning progress",
      "Limited accessibility and flexibility"
    ],
    solution: "Comprehensive digital learning solutions for employee training and education with interactive content and analytics.",
    features: [
      "LMS Implementation",
      "Content Development",
      "Assessment Systems",
      "Learning Analytics",
      "Mobile Learning",
      "Social Learning Tools"
    ],
    impact: [
      { metric: "3x", label: "Learner engagement" },
      { metric: "60%", label: "Training cost reduction" },
      { metric: "Real-time", label: "Progress tracking" }
    ]
  },
  "lowcode-nocode": {
    name: "Low Code / No Code",
    tagline: "Rapid Application Development Platforms",
    problems: [
      "Long development cycles delay time-to-market",
      "High development costs",
      "Dependency on technical resources"
    ],
    solution: "Accelerate development with low-code platforms for rapid application delivery and faster innovation.",
    features: [
      "Platform Selection",
      "App Development",
      "Integration Services",
      "Training & Support",
      "Workflow Automation",
      "Custom Components"
    ],
    impact: [
      { metric: "10x", label: "Faster development" },
      { metric: "70%", label: "Cost reduction" },
      { metric: "↑ Agility", label: "Rapid innovation" }
    ]
  },
  "workplace-transformation": {
    name: "Workplace Transformation",
    tagline: "Modern Digital Workplace Solutions",
    problems: [
      "Scattered communication and collaboration tools",
      "Low productivity due to manual workflows",
      "Resistance to change and adoption challenges"
    ],
    solution: "Modernize your workplace with digital tools and collaborative platforms that enhance productivity and engagement.",
    features: [
      "Microsoft 365",
      "Collaboration Tools",
      "Process Automation",
      "Change Management",
      "Employee Portals",
      "Digital Adoption"
    ],
    impact: [
      { metric: "50%", label: "Productivity boost" },
      { metric: "↑ 80%", label: "User adoption" },
      { metric: "Unified", label: "Collaboration" }
    ]
  },
  "staff-augmentation": {
    name: "Staff Augmentation",
    tagline: "Expert Technology Resources On-Demand",
    problems: [
      "Difficulty finding skilled technical talent",
      "Long hiring and onboarding cycles",
      "High costs of maintaining full-time teams"
    ],
    solution: "Scale your teams with skilled professionals across technologies for flexible, cost-effective resource augmentation.",
    features: [
      "Technical Talent",
      "Project Teams",
      "Managed Services",
      "Training Programs",
      "Flexible Engagement Models",
      "Quality Assurance"
    ],
    impact: [
      { metric: "2 weeks", label: "Faster onboarding" },
      { metric: "40%", label: "Cost savings" },
      { metric: "100+", label: "Expert pool" }
    ]
  }
};
