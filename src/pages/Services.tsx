import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero, { type HeroItem } from "../sections/Hero";
import "./Services.scss";

// Import service images
import fullstackImg from "../assets/images/services/FullStack-Service8.png";
import aiGenaiImg from "../assets/images/services/AI & GenAI-Services1.png";
import dataCloudImg from "../assets/images/services/Data & Cloud-Services2.png";
import infraSecurityImg from "../assets/images/services/Infra & Security-Services3.png";
import elearningImg from "../assets/images/services/ELearing-Sevices4.png";
import lowcodeImg from "../assets/images/services/LowCode_NoCode-Services5.png";
import workspaceImg from "../assets/images/services/Workspace_Transformation-Services6.png";
import staffAugImg from "../assets/images/services/Saff_Augmentation-Service7.png";

const serviceHeroItems: HeroItem[] = [
  { id: 1, image: fullstackImg, title: "Full Stack Development", subtitle: "End-to-end web & mobile solutions", label: "Full Stack" },
  { id: 2, image: aiGenaiImg, title: "AI & GenAI", subtitle: "Intelligent automation solutions", label: "AI & GenAI" },
  { id: 3, image: dataCloudImg, title: "Data & Cloud", subtitle: "Scalable cloud infrastructure", label: "Data & Cloud" },
  { id: 4, image: infraSecurityImg, title: "Infra & Security", subtitle: "Secure enterprise systems", label: "Infra & Security" },
  { id: 5, image: elearningImg, title: "E-Learning", subtitle: "Digital learning platforms", label: "E-Learning" },
  { id: 6, image: lowcodeImg, title: "Low Code / No Code", subtitle: "Rapid application development", label: "LowCode/NoCode" },
  { id: 7, image: workspaceImg, title: "Workspace", subtitle: "Modern workplace solutions", label: "Workspace" },
  { id: 8, image: staffAugImg, title: "Staff Augmentation", subtitle: "Expert talent on demand", label: "Staff Augmentation" },
];

const servicesData = [
  {
    title: "Full Stack Development",
    description: "End-to-end web and mobile application development with modern frameworks including React, Angular, Django, and React Native.",
    icon: "fullstack",
    features: ["React.js & Angular", "Django Backend", "React Native", "API Development"],
    link: "/services/fullstack-development"
  },
  {
    title: "AI & GenAI",
    description: "Leverage cutting-edge AI and generative AI to automate processes, gain insights, and create intelligent solutions.",
    icon: "ai",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    link: "/services/ai-genai"
  },
  {
    title: "Data & Cloud",
    description: "Modern data architecture and cloud solutions for scalable, secure, and efficient operations.",
    icon: "cloud",
    features: ["Data Engineering", "Cloud Migration", "Data Lakes & Warehouses", "Real-time Analytics"],
    link: "/services/data-cloud"
  },
  {
    title: "Low Code / No Code",
    description: "Accelerate development with low-code platforms for rapid application delivery.",
    icon: "lowcode",
    features: ["Platform Selection", "App Development", "Integration Services", "Training & Support"],
    link: "/services/lowcode-nocode"
  },
  {
    title: "E-learning",
    description: "Comprehensive digital learning solutions for employee training and education.",
    icon: "learning",
    features: ["LMS Implementation", "Content Development", "Assessment Systems", "Learning Analytics"],
    link: "/services/elearning"
  },
  {
    title: "Infra & Security",
    description: "Robust infrastructure and security solutions to protect your digital assets.",
    icon: "security",
    features: ["DevSecOps", "Cloud Security", "Compliance Automation", "Monitoring & Alerting"],
    link: "/services/infra-security"
  },
  {
    title: "Workplace Transformation",
    description: "Modernize your workplace with digital tools and collaborative platforms.",
    icon: "workplace",
    features: ["Microsoft 365", "Collaboration Tools", "Process Automation", "Change Management"],
    link: "/services/workplace-transformation"
  },
  {
    title: "Staff Augmentation",
    description: "Scale your teams with skilled professionals across technologies.",
    icon: "team",
    features: ["Technical Talent", "Project Teams", "Managed Services", "Training Programs"],
    link: "/services/staff-augmentation"
  }
];

const iconComponents: { [key: string]: ReactNode } = {
  fullstack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 8l5 4-5 4" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  learning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  lowcode: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  workplace: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Accordion Section */}
      <Hero items={serviceHeroItems} imageAlign="left" />

      <section className="services-page__content">
        <div className="services-page__grid">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-card__icon">
                {iconComponents[service.icon]}
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link to={service.link} className="service-card__link">
                <span>Explore Service</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="services-page__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Need a Custom Solution?</h2>
          <p>Let's discuss how we can help transform your business</p>
          <Link to="/contact" className="cta-button">
            Get in Touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
