import { motion } from "framer-motion";
import "./StatsSection.scss";

const stats = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "4", label: "AI Platforms" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Expert Support" }
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-section__container">
        <div className="stats-section__content">
          <motion.div
            className="stats-section__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="badge-dark">Trusted Worldwide</span>
            <h2>Powering Digital Excellence</h2>
            <p>
              Join the growing number of enterprises that trust Ajuserv to drive their digital transformation journey with our proven platforms and services.
            </p>
          </motion.div>

          <motion.div
            className="stats-section__grid"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="stat-item__value">{stat.value}</span>
                <span className="stat-item__label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
