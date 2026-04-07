import { motion } from "framer-motion";
import "./WhySection.scss";

const reasons = [
  {
    icon: "ai",
    title: "AI-First Approach",
    description: "Every platform we build leverages cutting-edge AI and GenAI capabilities for intelligent automation."
  },
  {
    icon: "enterprise",
    title: "Enterprise Ready",
    description: "Built for scale with robust architecture, security compliance, and seamless integrations."
  },
  {
    icon: "speed",
    title: "Rapid Deployment",
    description: "Get to market faster with our pre-built modules and accelerated implementation methodology."
  },
  {
    icon: "support",
    title: "Expert Support",
    description: "Dedicated teams of domain experts and engineers to ensure your success."
  }
];

const IconComponent = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "ai":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "enterprise":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return null;
  }
};

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="why-section__container">
        <motion.div
          className="why-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="badge">Why Ajuserv</span>
          <h2>Built for the Future</h2>
          <p>We combine deep domain expertise with cutting-edge technology to deliver transformative solutions</p>
        </motion.div>

        <div className="why-section__grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="why-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="why-card__icon">
                <IconComponent icon={reason.icon} />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
