export interface ProductImpact {
  metric: string;
  label: string;
}

export interface Product {
  name: string;
  tagline: string;
  problems: string[];
  solution: string;
  features: string[];
  impact: ProductImpact[];
}

export interface Products {
  [key: string]: Product;
}

export const products: Products = {
  finlink: {
    name: "Finlink",
    tagline: "AA-Powered Digital Lending & Financial Intelligence Platform",
    problems: [
      "Manual underwriting slows loan approvals",
      "Financial data is fragmented across systems",
      "High risk due to lack of real-time insights"
    ],
    solution: "Finlink enables real-time financial data access, AI-driven underwriting, and instant credit decisioning using Account Aggregator ecosystem.",
    features: [
      "AA-based data aggregation",
      "Cashflow-based underwriting",
      "AI credit scoring",
      "Risk analytics dashboard",
      "Regulatory compliance engine",
      "API-first integration"
    ],
    impact: [
      { metric: "10x", label: "Faster loan approvals" },
      { metric: "60%", label: "Reduction in processing time" },
      { metric: "↓ NPA", label: "Improved risk quality" }
    ]
  },
  coursify: {
    name: "Coursify",
    tagline: "AI-Enabled Smart Learning Platform",
    problems: [
      "Generic learning lacks personalization",
      "Low engagement in training programs",
      "Limited visibility into learning outcomes"
    ],
    solution: "Coursify delivers adaptive, AI-driven learning experiences with personalized paths and real-time analytics.",
    features: [
      "AI-based learning recommendations",
      "Content management system",
      "Gamification & engagement tools",
      "Assessment engine",
      "Progress analytics",
      "Mobile-first experience"
    ],
    impact: [
      { metric: "2x", label: "Learner engagement" },
      { metric: "40%", label: "Improved completion rates" },
      { metric: "Real-time", label: "Learning insights" }
    ]
  },
  qualev: {
    name: "Qualev",
    tagline: "AI-Driven Autonomous Testing Platform",
    problems: [
      "Manual testing delays releases",
      "Test scripts break frequently",
      "High QA effort and cost"
    ],
    solution: "Qualev automates testing with AI-powered test generation and self-healing capabilities.",
    features: [
      "Auto test case generation",
      "Self-healing scripts",
      "Regression automation",
      "CI/CD integration",
      "Test analytics dashboard",
      "Cross-platform support"
    ],
    impact: [
      { metric: "70%", label: "Reduced QA effort" },
      { metric: "3x", label: "Faster releases" },
      { metric: "↑ Quality", label: "Improved reliability" }
    ]
  },
  facentra: {
    name: "Facentra",
    tagline: "Geofenced Face Recognition Workforce Management System",
    problems: [
      "Attendance fraud in field workforce",
      "Lack of real-time workforce visibility",
      "Manual workforce tracking inefficiencies"
    ],
    solution: "Facentra provides secure, location-aware workforce management using face recognition and geofencing.",
    features: [
      "Face recognition attendance",
      "Geofencing validation",
      "Real-time tracking",
      "Workforce analytics",
      "Mobile app integration",
      "Admin dashboard"
    ],
    impact: [
      { metric: "100%", label: "Attendance authenticity" },
      { metric: "Real-time", label: "Workforce visibility" },
      { metric: "↓ Fraud", label: "Reduced misuse" }
    ]
  }
};
