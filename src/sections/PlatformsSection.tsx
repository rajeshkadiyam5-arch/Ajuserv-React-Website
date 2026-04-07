import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { platforms } from "../data/platforms";
import "./PlatformsSection.scss";

export default function PlatformsSection() {
  return (
    <section className="platforms-section">
      <h2 className="platforms-section__heading">Our Products</h2>

      <div className="platforms-section__grid">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.slug}
            className="platform-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="platform-card__icon" />
            <h3>{platform.name}</h3>
            <p>{platform.desc}</p>
            <Link
              to={`/platforms/${platform.slug}`}
              className="platform-card__link"
            >
              Learn More &rarr;
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
