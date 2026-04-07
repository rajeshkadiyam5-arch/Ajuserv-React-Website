import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { platforms } from "../data/platforms";
import { products } from "../data/products";
import Hero, { type HeroItem } from "../sections/Hero";
import "./Platforms.scss";

// Import product images
import coursifyImg from "../assets/images/products/Coursify-Product1.png";
import finlinkImg from "../assets/images/products/Finlink-Product2.png";
import qualevImg from "../assets/images/products/Qualev-Product3.png";
import facentraImg from "../assets/images/products/Facentra-Product4.png";

const platformHeroItems: HeroItem[] = [
  { id: 1, image: coursifyImg, title: "Coursify", subtitle: "AI-Enabled Smart Learning Platform", label: "Coursify" },
  { id: 2, image: finlinkImg, title: "Finlink", subtitle: "AA-Powered Digital Lending Platform", label: "Finlink" },
  { id: 3, image: qualevImg, title: "Qualev", subtitle: "AI-Driven Autonomous Testing Platform", label: "Qualev" },
  { id: 4, image: facentraImg, title: "Facentra", subtitle: "Geofenced Workforce Management System", label: "Facentra" },
];

const platformIcons: { [key: string]: ReactNode } = {
  coursify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  finlink: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  qualev: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  facentra: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const gradients: { [key: string]: string } = {
  coursify: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
  finlink: "linear-gradient(135deg, #10B981 0%, #2563EB 100%)",
  qualev: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
  facentra: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
};

export default function Platforms() {
  return (
    <div className="platforms-page">
      {/* Hero Accordion Section */}
      <Hero items={platformHeroItems} />

      <section className="platforms-page__content">
        <div className="platforms-page__grid">
          {platforms.map((platform, index) => {
            const product = products[platform.slug];
            return (
              <motion.article
                key={platform.slug}
                className="platform-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="platform-card__icon"
                  style={{ background: gradients[platform.slug] }}
                >
                  {platformIcons[platform.slug]}
                </div>

                <div className="platform-card__content">
                  <h2>{platform.name}</h2>
                  <p className="platform-card__tagline">{product?.tagline || platform.desc}</p>

                  {product && (
                    <ul className="platform-card__features">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {product && (
                    <div className="platform-card__metrics">
                      {product.impact.slice(0, 2).map((item) => (
                        <div key={item.label} className="metric">
                          <span className="metric__value">{item.metric}</span>
                          <span className="metric__label">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link to={`/platforms/${platform.slug}`} className="platform-card__link">
                  <span>Explore {platform.name}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
