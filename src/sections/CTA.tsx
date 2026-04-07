import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CTA.scss";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__background">
        <div className="cta__glow cta__glow--1" />
        <div className="cta__glow cta__glow--2" />
      </div>

      <div className="cta__container">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="cta__badge">Get Started</span>
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how our AI-powered platforms can accelerate your digital transformation journey.
          </p>
          <div className="cta__buttons">
            <Link to="/contact" className="cta__button cta__button--primary">
              Request a Demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/platforms" className="cta__button cta__button--secondary">
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
