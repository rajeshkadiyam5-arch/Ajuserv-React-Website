import { motion } from "framer-motion";
import "./ClientsSection.scss";

// Import client logos
import tesync from "../assets/images/clients/tesync.jpg";
import robosoft from "../assets/images/clients/robosoft.jpg";
import ahana from "../assets/images/clients/ahana.jpg";
import technogen from "../assets/images/clients/technogen.jpg";
import multiverse from "../assets/images/clients/multiverse.jpg";
import sbi from "../assets/images/clients/sbi.jpg";
import pi from "../assets/images/clients/pi.jpg";
import tgsrtc from "../assets/images/clients/tgsrtc.jpg";

const clients = [
  { id: 1, name: "Tesync", image: tesync },
  { id: 2, name: "Robosoft", image: robosoft },
  { id: 3, name: "Ahana", image: ahana },
  { id: 4, name: "Technogen", image: technogen },
  { id: 5, name: "Multiverse Solutions", image: multiverse },
  { id: 6, name: "SBIOA", image: sbi },
  { id: 7, name: "Pi", image: pi },
  { id: 8, name: "TGSRTC", image: tgsrtc },
];

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="clients-section__container">
        <motion.div
          className="clients-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="badge">Trusted Partners</span>
          <h2>Our Clients</h2>
          <p>Collaborating with industry leaders to deliver exceptional solutions</p>
        </motion.div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className="client-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="client-card">
                <div className="card-shine" />
                <img src={client.image} alt={client.name} loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
