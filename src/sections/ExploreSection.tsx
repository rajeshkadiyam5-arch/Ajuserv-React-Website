import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ExploreSection.scss";
import HomeProducts from "../assets/images/Home-Products.jpg";
import HomeServices from "../assets/images/Home-Services.png";

const exploreItems = [
  {
    title: "Our Products",
    description: "AI-powered platforms built for enterprise scale",
    icon: "cube",
    link: "/platforms",
    gradient: "products",
    features: ["Coursify", "Finlink", "Qualev", "Facentra"],
    backgroundImage: HomeProducts
  },
  {
    title: "Our Services",
    description: "Comprehensive solutions to accelerate digital transformation",
    icon: "lightning",
    link: "/services",
    gradient: "services",
    features: ["AI & GenAI", "Data & Cloud", "Infra & Security", "E-learning"],
    backgroundImage: HomeServices
  }
];

export default function ExploreSection() {
  return (
    <section className="explore-section">
      <div className="explore-section__container">
        <motion.div
          className="explore-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="badge">Discover</span>
          <h2>What We Offer</h2>
          <p>Explore our products and services designed to transform your business</p>
        </motion.div>

        <div className="explore-section__grid">
          {exploreItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to={item.link}
                className={`explore-card explore-card--${item.gradient}`}
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                <div className="explore-card__icon">
                  {item.icon === "cube" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  )}
                </div>
                <div className="explore-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="explore-card__features">
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="explore-card__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
