import { motion } from "framer-motion";
import { services } from "../data/services";
import "./ServicesSection.scss";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-section__heading">Our Services</h2>

      <div className="services-section__grid">
        {services.map((service, index) => (
          <motion.div
            key={service}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {service}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
