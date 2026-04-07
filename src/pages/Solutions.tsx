import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero, { type HeroItem } from "../sections/Hero";
import "./Solutions.scss";

// Import solution images
import finlinkImg from "../assets/images/Solutions/Finlink-Solutions2.png";
import coursifyImg from "../assets/images/Solutions/Coursify-Solutions1.png";
import qualevImg from "../assets/images/Solutions/Qualev-Solutions3.png";
import facentraImg from "../assets/images/Solutions/Facentra-Solutions4.png";

const solutionHeroItems: HeroItem[] = [
  { id: 1, image: finlinkImg, title: "Finlink", subtitle: "Digital Lending Solution", label: "Finlink" },
  { id: 2, image: coursifyImg, title: "Coursify", subtitle: "Smart Learning Solution", label: "Coursify" },
  { id: 3, image: qualevImg, title: "Qualev", subtitle: "Quality Automation Solution", label: "Qualev" },
  { id: 4, image: facentraImg, title: "Facentra", subtitle: "Workforce Management Solution", label: "Facentra" },
];

const solutions = [
  {
    title: "Digital Lending",
    description: "End-to-end lending solutions with AI-powered underwriting, risk assessment, and instant credit decisioning using Account Aggregator ecosystem.",
    link: "/platforms/finlink",
    icon: "lending",
    color: "#10B981"
  },
  {
    title: "Smart Learning",
    description: "Personalized learning experiences with AI-driven recommendations, adaptive paths, and real-time analytics for enterprise training.",
    link: "/platforms/coursify",
    icon: "learning",
    color: "#7C3AED"
  },
  {
    title: "Quality Automation",
    description: "AI-powered autonomous testing with auto-generated test cases, self-healing scripts, and seamless CI/CD integration.",
    link: "/platforms/qualev",
    icon: "testing",
    color: "#F59E0B"
  },
  {
    title: "Workforce Management",
    description: "Secure, location-aware workforce tracking and management using face recognition, geofencing, and real-time analytics.",
    link: "/platforms/facentra",
    icon: "workforce",
    color: "#2563EB"
  }
];

const iconComponents: { [key: string]: ReactNode } = {
  lending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  learning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  testing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  workforce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

export default function Solutions() {
  return (
    <div className="solutions-page">
      {/* Hero Accordion Section */}
      <Hero items={solutionHeroItems} />

      <section className="solutions-page__content">
        <div className="solutions-page__grid">
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.title}
              className="solution-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="solution-card__icon">
                {iconComponents[solution.icon]}
              </div>
              <h2>{solution.title}</h2>
              <p>{solution.description}</p>
              <Link to={solution.link} className="solution-card__link">
                <span>Explore Solution</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="solutions-page__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Don't See What You Need?</h2>
          <p>We build custom solutions tailored to your specific requirements</p>
          <Link to="/contact" className="cta-button">
            Discuss Your Requirements
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
