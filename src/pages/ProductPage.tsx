import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import type { ServiceDetail } from "../data/services";
import "./ProductPage.scss";

// Import product background images
import coursifyBG from "../assets/images/BG-Solution/Coursify-BG.png";
import finlinkBG from "../assets/images/BG-Solution/Finlink-BG.png";
import qualevBG from "../assets/images/BG-Solution/Qualev-BG.png";
import facentraBG from "../assets/images/BG-Solution/Facentra-BG.png";

// Import service background images
import fullstackBG from "../assets/images/BG-Service/FullStack-BG.png";
import aiGenAIBG from "../assets/images/BG-Service/AI & GenAI-BG.png";
import dataCloudBG from "../assets/images/BG-Service/Data & Cloud-BG.png";
import infraSecurityBG from "../assets/images/BG-Service/Infra & Security-BG.png";
import elearningBG from "../assets/images/BG-Service/ELearning-BG.png";
import lowCodeBG from "../assets/images/BG-Service/LowCode_NoCode-BG.png";
import workspaceBG from "../assets/images/BG-Service/WorkSpace-BG.png";
import staffAugBG from "../assets/images/BG-Service/Staff-BG.png";

// Map product/service names to their background images
const productImages: { [key: string]: string } = {
  Coursify: coursifyBG,
  Finlink: finlinkBG,
  Qualev: qualevBG,
  Facentra: facentraBG,
  "Full Stack Development": fullstackBG,
  "AI & GenAI": aiGenAIBG,
  "Data & Cloud": dataCloudBG,
  "Infra & Security": infraSecurityBG,
  "E-learning": elearningBG,
  "Low Code / No Code": lowCodeBG,
  "Workplace Transformation": workspaceBG,
  "Staff Augmentation": staffAugBG,
};

interface ProductPageProps {
  product: Product | ServiceDetail;
}

export default function ProductPage({ product }: ProductPageProps) {
  const productImage = productImages[product.name];

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero" style={{ '--bg-image': `url(${productImage})` } as React.CSSProperties}>
        <div className="product-hero__content">
          <motion.div
            className="product-hero__text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="product-hero__badge">{product.name}</span>
            <h1>{product.tagline}</h1>
            <p className="product-hero__description">{product.solution}</p>
            <div className="product-hero__buttons">
              <Link to="/contact" className="btn-primary">
                Request Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href="#features" className="btn-secondary">
                View Features
              </a>
            </div>
          </motion.div>

          <motion.div
            className="product-hero__metrics"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {product.impact.map((item, index) => (
              <div key={index} className="metric-card">
                <span className="metric-card__value">{item.metric}</span>
                <span className="metric-card__label">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="product-section product-section--challenges">
        <div className="product-section__container">
          <div className="challenges-layout">
            <motion.div
              className="challenges-layout__header"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="badge badge--danger">The Challenge</span>
              <h2>Problems We Solve</h2>
              <p>Understanding the pain points that drive our solution</p>
            </motion.div>

            <div className="challenges-layout__list">
              {product.problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="challenge-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="challenge-item__number">0{index + 1}</span>
                  <p>{problem}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="product-section product-section--features">
        <div className="product-section__container">
          <div className="features-layout">
            <motion.div
              className="features-layout__header"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="badge badge--success">Capabilities</span>
              <h2>Key Features</h2>
              <p>Powerful features designed for enterprise needs</p>
            </motion.div>

            <div className="features-layout__grid">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-item__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="product-section product-section--impact">
        <div className="product-section__container">
          <motion.div
            className="product-section__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="badge badge--light">Results</span>
            <h2>Business Impact</h2>
            <p className="product-section__subtitle product-section__subtitle--light">Measurable outcomes that drive ROI</p>
          </motion.div>

          <div className="impact-grid">
            {product.impact.map((item, index) => (
              <motion.div
                key={index}
                className="impact-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="impact-card__value">{item.metric}</span>
                <span className="impact-card__label">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta">
        <div className="product-cta__container">
          <motion.div
            className="product-cta__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started with {product.name}?</h2>
            <p>Let our team show you how {product.name} can transform your operations</p>
            <div className="product-cta__buttons">
              <Link to="/contact" className="cta-button cta-button--primary">
                Schedule a Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/contact" className="cta-button cta-button--secondary">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
