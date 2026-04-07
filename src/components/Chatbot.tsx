import { useState, useRef, useEffect } from "react";
import "./Chatbot.scss";
import { products } from "../data/products";
import { serviceDetails } from "../data/services";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Complete Solutions data for chatbot knowledge
const solutionsData = {
  "digital-lending": {
    name: "Digital Lending",
    description:
      "End-to-end lending solutions with AI-powered underwriting, risk assessment, and instant credit decisioning using Account Aggregator ecosystem.",
    platform: "finlink",
    problems: [
      "Manual underwriting slows loan approvals",
      "Financial data is fragmented across systems",
      "High risk due to lack of real-time insights",
    ],
    features: [
      "AA-based data aggregation",
      "Cashflow-based underwriting",
      "AI credit scoring",
      "Risk analytics dashboard",
      "Regulatory compliance engine",
      "API-first integration",
    ],
    impact: [
      { metric: "10x", label: "Faster loan approvals" },
      { metric: "60%", label: "Reduction in processing time" },
      { metric: "↓ NPA", label: "Improved risk quality" },
    ],
  },
  "smart-learning": {
    name: "Smart Learning",
    description:
      "Personalized learning experiences with AI-driven recommendations, adaptive paths, and real-time analytics for enterprise training.",
    platform: "coursify",
    problems: [
      "Generic learning lacks personalization",
      "Low engagement in training programs",
      "Limited visibility into learning outcomes",
    ],
    features: [
      "AI-based learning recommendations",
      "Content management system",
      "Gamification & engagement tools",
      "Assessment engine",
      "Progress analytics",
      "Mobile-first experience",
    ],
    impact: [
      { metric: "2x", label: "Learner engagement" },
      { metric: "40%", label: "Improved completion rates" },
      { metric: "Real-time", label: "Learning insights" },
    ],
  },
  "quality-automation": {
    name: "Quality Automation",
    description:
      "AI-powered autonomous testing with auto-generated test cases, self-healing scripts, and seamless CI/CD integration.",
    platform: "qualev",
    problems: [
      "Manual testing delays releases",
      "Test scripts break frequently",
      "High QA effort and cost",
    ],
    features: [
      "Auto test case generation",
      "Self-healing scripts",
      "Regression automation",
      "CI/CD integration",
      "Test analytics dashboard",
      "Cross-platform support",
    ],
    impact: [
      { metric: "70%", label: "Reduced QA effort" },
      { metric: "3x", label: "Faster releases" },
      { metric: "↑ Quality", label: "Improved reliability" },
    ],
  },
  "workforce-management": {
    name: "Workforce Management",
    description:
      "Secure, location-aware workforce tracking and management using face recognition, geofencing, and real-time analytics.",
    platform: "facentra",
    problems: [
      "Attendance fraud in field workforce",
      "Lack of real-time workforce visibility",
      "Manual workforce tracking inefficiencies",
    ],
    features: [
      "Face recognition attendance",
      "Geofencing validation",
      "Real-time tracking",
      "Workforce analytics",
      "Mobile app integration",
      "Admin dashboard",
    ],
    impact: [
      { metric: "100%", label: "Attendance authenticity" },
      { metric: "Real-time", label: "Workforce visibility" },
      { metric: "↓ Fraud", label: "Reduced misuse" },
    ],
  },
};

// Helper function to generate complete product response
const getProductResponse = (product: typeof products.finlink): string => {
  return `**${product.name}** - ${product.tagline}

**Overview:**
${product.solution}

**Problems We Solve:**
${product.problems.map((p, i) => `${i + 1}. ${p}`).join("\n")}

**All Features:**
${product.features.map((f) => `• ${f}`).join("\n")}

**Business Impact:**
${product.impact.map((i) => `• ${i.metric} - ${i.label}`).join("\n")}

Visit our Platforms page to learn more or contact us for a demo!`;
};

// Helper function to generate complete service response
const getServiceResponse = (
  service: (typeof serviceDetails)["fullstack-development"],
): string => {
  return `**${service.name}** - ${service.tagline}

**Overview:**
${service.solution}

**Challenges We Address:**
${service.problems.map((p, i) => `${i + 1}. ${p}`).join("\n")}

**Our Capabilities:**
${service.features.map((f) => `• ${f}`).join("\n")}

**Results & Impact:**
${service.impact.map((i) => `• ${i.metric} - ${i.label}`).join("\n")}

Contact us to discuss how our ${service.name} services can help your business!`;
};

// Helper function to generate complete solution response
const getSolutionResponse = (
  solution: (typeof solutionsData)["digital-lending"],
): string => {
  return `**${solution.name} Solution**

**Overview:**
${solution.description}

**Problems We Solve:**
${solution.problems.map((p, i) => `${i + 1}. ${p}`).join("\n")}

**Key Features:**
${solution.features.map((f) => `• ${f}`).join("\n")}

**Business Impact:**
${solution.impact.map((i) => `• ${i.metric} - ${i.label}`).join("\n")}

This solution is powered by our **${products[solution.platform].name}** platform. Contact us for a demo!`;
};

// Keyword mappings for better accuracy
const keywordMappings = {
  // Product keywords with variations and typos
  products: {
    coursify: ["coursify", "course", "coursfy", "corsefy", "learning platform", "lms platform", "smart learning", "education platform"],
    finlink: ["finlink", "fin link", "finlnk", "lending platform", "loan platform", "digital lending", "credit platform", "aa platform", "account aggregator"],
    qualev: ["qualev", "qualav", "quality", "testing platform", "test automation", "qa platform", "autonomous testing"],
    facentra: ["facentra", "facentre", "face recognition", "workforce platform", "attendance system", "geofencing", "employee tracking"],
  },
  // Service keywords with variations
  services: {
    "fullstack-development": ["fullstack", "full stack", "full-stack", "web development", "mobile development", "react", "angular", "django", "node", "nodejs", "frontend", "backend", "app development", "application development", "software development"],
    "ai-genai": ["ai", "genai", "gen ai", "artificial intelligence", "machine learning", "ml", "chatgpt", "llm", "deep learning", "neural network", "nlp", "natural language", "computer vision", "predictive"],
    "data-cloud": ["data", "cloud", "aws", "azure", "gcp", "google cloud", "data engineering", "data lake", "data warehouse", "etl", "migration", "cloud migration", "big data", "analytics", "database"],
    "infra-security": ["security", "infra", "infrastructure", "devsecops", "cybersecurity", "cyber security", "penetration", "compliance", "soc", "firewall", "encryption", "vulnerability"],
    "elearning": ["elearning", "e-learning", "e learning", "online learning", "digital learning", "training platform", "corporate training", "employee training"],
    "lowcode-nocode": ["lowcode", "low code", "low-code", "nocode", "no code", "no-code", "rapid development", "citizen developer", "power platform", "outsystems", "mendix"],
    "workplace-transformation": ["workplace", "digital workplace", "microsoft 365", "m365", "office 365", "sharepoint", "teams", "collaboration", "productivity"],
    "staff-augmentation": ["staff augmentation", "staffing", "talent", "hiring", "recruitment", "resource", "contract", "consultant", "outsourcing", "dedicated team"],
  },
  // Solution keywords
  solutions: {
    "digital-lending": ["digital lending", "lending solution", "loan solution", "credit solution", "nbfc", "fintech lending"],
    "smart-learning": ["smart learning", "learning solution", "training solution", "education solution", "corporate learning"],
    "quality-automation": ["quality automation", "test automation", "qa automation", "automated testing", "continuous testing"],
    "workforce-management": ["workforce management", "attendance management", "employee management", "field force", "field workforce"],
  },
  // Company/general keywords
  company: {
    about: ["about", "company", "who are you", "what is ajuserv", "ajuserv", "about us", "tell me about", "introduction"],
    contact: ["contact", "reach", "email", "phone", "address", "location", "office", "demo", "meeting", "schedule", "call"],
    pricing: ["price", "pricing", "cost", "quote", "budget", "how much", "rates", "fee"],
    greetings: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings", "howdy", "hola"],
    help: ["help", "assist", "support", "guide", "how to", "what can you", "options", "menu"],
    thanks: ["thank", "thanks", "thank you", "appreciate", "grateful"],
  },
};

// Calculate match score for a query against keywords
const calculateMatchScore = (query: string, keywords: string[]): number => {
  const words = query.toLowerCase().split(/\s+/);
  let score = 0;

  for (const keyword of keywords) {
    // Exact match in query
    if (query.toLowerCase().includes(keyword)) {
      score += keyword.split(/\s+/).length * 10; // Higher score for multi-word matches
    }
    // Individual word matches
    const keywordWords = keyword.split(/\s+/);
    for (const kw of keywordWords) {
      if (words.some(w => w === kw)) {
        score += 5;
      } else if (words.some(w => w.includes(kw) || kw.includes(w))) {
        score += 2; // Partial match
      }
    }
  }

  return score;
};

// Find best match using scoring system
const findBestMatch = (query: string): { type: string; key: string; score: number } | null => {
  let bestMatch: { type: string; key: string; score: number } | null = null;

  // Check products
  for (const [key, keywords] of Object.entries(keywordMappings.products)) {
    const score = calculateMatchScore(query, keywords);
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { type: "product", key, score };
    }
  }

  // Check services
  for (const [key, keywords] of Object.entries(keywordMappings.services)) {
    const score = calculateMatchScore(query, keywords);
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { type: "service", key, score };
    }
  }

  // Check solutions
  for (const [key, keywords] of Object.entries(keywordMappings.solutions)) {
    const score = calculateMatchScore(query, keywords);
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { type: "solution", key, score };
    }
  }

  return bestMatch;
};

// Function to find best matching response based on user query
const findResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase().trim();

  // Handle empty or very short queries
  if (lowerQuery.length < 2) {
    return "Please type a question or topic you'd like to know about. For example, ask about our products, services, or solutions!";
  }

  // Check for greetings first (high priority)
  if (keywordMappings.company.greetings.some(g => lowerQuery.includes(g) || lowerQuery === g)) {
    return `Hello! Welcome to **Ajuserv**! 👋

I'm here to help you learn about our offerings:

**🚀 Products:**
• **Coursify** - AI-Enabled Smart Learning Platform
• **Finlink** - AA-Powered Digital Lending Platform
• **Qualev** - AI-Driven Autonomous Testing Platform
• **Facentra** - Geofenced Workforce Management System

**💼 Services:**
• Full Stack Development, AI & GenAI, Data & Cloud
• Low Code/No Code, E-learning, Infra & Security
• Workplace Transformation, Staff Augmentation

**💡 Solutions:**
• Digital Lending, Smart Learning
• Quality Automation, Workforce Management

**How can I help you today?** Just type what you're looking for!`;
  }

  // Check for thanks
  if (keywordMappings.company.thanks.some(t => lowerQuery.includes(t))) {
    return `You're welcome! 😊 Is there anything else you'd like to know about Ajuserv's products, services, or solutions?`;
  }

  // Check for help queries
  if (keywordMappings.company.help.some(h => lowerQuery.includes(h))) {
    return `**How can I help you?** 🤖

I can provide detailed information about:

**Ask about Products:**
• "Tell me about Coursify"
• "What is Finlink?"
• "Explain Qualev"
• "What does Facentra do?"

**Ask about Services:**
• "AI and GenAI services"
• "Full stack development"
• "Cloud services"
• "Security solutions"

**Ask about Solutions:**
• "Digital lending solution"
• "Workforce management"

**Other queries:**
• "How to contact you?"
• "What does Ajuserv do?"
• "Show all products/services"

Just type your question naturally - I'll understand! 😊`;
  }

  // Check for about/company queries
  if (keywordMappings.company.about.some(a => lowerQuery.includes(a))) {
    return `**About Ajuserv** 🏢

Ajuserv is a technology company delivering **AI-Powered Platforms** with **Enterprise-Scale Execution**.

**What We Offer:**

**Products/Platforms:**
• **Coursify** - Smart Learning Platform for enterprise training
• **Finlink** - Digital Lending Platform using Account Aggregator
• **Qualev** - Autonomous Testing Platform with AI
• **Facentra** - Workforce Management with face recognition

**Services:**
• Full Stack Development (React, Angular, Django)
• AI & GenAI Solutions
• Data & Cloud Engineering
• Low Code/No Code Development
• Infrastructure & Security
• Staff Augmentation

**Location:** Hyderabad, India
**Contact:** info@ajuserv.com

Would you like to know more about any specific product or service?`;
  }

  // Check for contact queries
  if (keywordMappings.company.contact.some(c => lowerQuery.includes(c))) {
    return `**Contact Ajuserv** 📞

**Email:** info@ajuserv.com
**Location:** Hyderabad, India

**You can reach us for:**
• Product demonstrations
• Service consultations
• Partnership inquiries
• Technical support
• Custom solution discussions

**Visit our Contact page** to send us a message directly!

Is there anything specific you'd like to discuss? I can provide more details about our offerings before you reach out.`;
  }

  // Check for pricing queries
  if (keywordMappings.company.pricing.some(p => lowerQuery.includes(p))) {
    return `**Pricing Information** 💰

Our pricing is customized based on:
• **Product/Service selected** - Each offering has different pricing models
• **Scale of implementation** - Number of users, data volume, etc.
• **Customization requirements** - Standard vs. custom features
• **Support level** - Basic, premium, or enterprise support
• **Deployment model** - Cloud, on-premise, or hybrid

**To get a quote:**
1. Visit our Contact page
2. Describe your requirements
3. Our team will provide a tailored proposal

Would you like to know more about any specific product or service before discussing pricing?`;
  }

  // Check for list queries (all products/services/solutions)
  if (lowerQuery.includes("all product") || lowerQuery.includes("list product") ||
      (lowerQuery.includes("product") && (lowerQuery.includes("show") || lowerQuery.includes("what")))) {
    let response = `**Our Products/Platforms:** 🚀\n\n`;
    for (const [, product] of Object.entries(products)) {
      response += `**${product.name}**\n`;
      response += `${product.tagline}\n`;
      response += `Key Features: ${product.features.slice(0, 4).join(", ")}\n`;
      response += `Impact: ${product.impact.map((i) => i.metric + " " + i.label).join(" | ")}\n\n`;
    }
    response += `**Ask me about any specific product for complete details!**`;
    return response;
  }

  if (lowerQuery.includes("all service") || lowerQuery.includes("list service") ||
      (lowerQuery.includes("service") && (lowerQuery.includes("show") || lowerQuery.includes("what") || lowerQuery.includes("offer")))) {
    let response = `**Our Services:** 💼\n\n`;
    for (const [, service] of Object.entries(serviceDetails)) {
      response += `**${service.name}**\n`;
      response += `${service.tagline}\n`;
      response += `Capabilities: ${service.features.slice(0, 3).join(", ")}\n\n`;
    }
    response += `**Ask me about any specific service for complete details!**`;
    return response;
  }

  if (lowerQuery.includes("all solution") || lowerQuery.includes("list solution") ||
      (lowerQuery.includes("solution") && (lowerQuery.includes("show") || lowerQuery.includes("what")))) {
    let response = `**Our Solutions:** 💡\n\n`;
    for (const [, solution] of Object.entries(solutionsData)) {
      response += `**${solution.name}**\n`;
      response += `${solution.description}\n`;
      response += `Powered by: ${products[solution.platform].name}\n\n`;
    }
    response += `**Ask me about any specific solution for complete details!**`;
    return response;
  }

  // Use scoring system to find best match
  const bestMatch = findBestMatch(lowerQuery);

  if (bestMatch && bestMatch.score >= 5) {
    switch (bestMatch.type) {
      case "product":
        return getProductResponse(products[bestMatch.key as keyof typeof products]);
      case "service":
        return getServiceResponse(serviceDetails[bestMatch.key as keyof typeof serviceDetails]);
      case "solution":
        return getSolutionResponse(solutionsData[bestMatch.key as keyof typeof solutionsData]);
    }
  }

  // Fallback: Check for partial matches with lower threshold
  if (bestMatch && bestMatch.score >= 2) {
    switch (bestMatch.type) {
      case "product":
        const product = products[bestMatch.key as keyof typeof products];
        return `I think you might be asking about **${product.name}**. Is that correct?\n\n${getProductResponse(product)}`;
      case "service":
        const service = serviceDetails[bestMatch.key as keyof typeof serviceDetails];
        return `I think you might be asking about **${service.name}**. Is that correct?\n\n${getServiceResponse(service)}`;
      case "solution":
        const solution = solutionsData[bestMatch.key as keyof typeof solutionsData];
        return `I think you might be asking about **${solution.name}**. Is that correct?\n\n${getSolutionResponse(solution)}`;
    }
  }

  // Default response with suggestions
  return `I'm not sure I understood your question. Let me help you! 🤔

**You can ask me about:**

**Products:** Coursify, Finlink, Qualev, Facentra
**Services:** AI & GenAI, Full Stack, Cloud, Security, and more
**Solutions:** Digital Lending, Smart Learning, Quality Automation

**Try asking:**
• "What is Coursify?"
• "Tell me about AI services"
• "How can I contact you?"
• "What products do you offer?"

Or simply type a topic like "lending", "testing", "learning", or "cloud"!`;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Ajuserv! I can help you with information about our Products, Services, and Solutions. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userQuery = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Generate intelligent response based on user query
    setTimeout(() => {
      const responseText = findResponse(userQuery);
      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot">
      {/* Chat Toggle Button */}
      <button
        className={`chatbot__toggle ${isOpen ? "chatbot__toggle--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`chatbot__window ${isOpen ? "chatbot__window--open" : ""}`}
      >
        {/* Header */}
        <div className="chatbot__header">
          <div className="chatbot__header-info">
            <div className="chatbot__avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>
            <div>
              <h4 className="chatbot__title">Ajuserv Support</h4>
              <span className="chatbot__status">Online</span>
            </div>
          </div>
          <button
            className="chatbot__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot__messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chatbot__message chatbot__message--${message.sender}`}
            >
              <div className="chatbot__message-content">
                <div
                  className="chatbot__message-text"
                  dangerouslySetInnerHTML={{
                    __html: message.text
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br />")
                      .replace(/• /g, "&bull; "),
                  }}
                />
                <span className="chatbot__message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="chatbot__message chatbot__message--bot">
              <div className="chatbot__message-content chatbot__typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot__input-container">
          <input
            type="text"
            className="chatbot__input"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="chatbot__send"
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
