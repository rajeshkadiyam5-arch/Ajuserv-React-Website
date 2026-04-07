import { useState, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import emailjs from "@emailjs/browser";
import "leaflet/dist/leaflet.css";
import "./Contact.scss";

// ============================================
// EmailJS Configuration (via Environment Variables)
// ============================================
// Set these in .env file locally or in Netlify Dashboard for production
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Fix for default marker icon
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Hyderabad, India coordinates (Tesync Technology Private Limited)
const COMPANY_LOCATION: [number, number] = [17.430061, 78.421541];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus({
        type: "success",
        message:
          "Message sent successfully! We'll get back to you within 24 hours.",
      });

      // Show success modal and reset form
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email us directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-page__hero">
        <div className="contact-page__hero-bg" />
        <motion.div
          className="contact-page__hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-dark">Contact Us</span>
          <h1>Let's Build Something Great Together</h1>
          <p>
            Get in touch with our team to discuss your digital transformation
            needs
          </p>
        </motion.div>
      </section>

      <section className="contact-page__content">
        <div className="contact-page__container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Get in Touch</h2>
            <p>
              Ready to start your digital transformation journey? Our experts
              are here to help you every step of the way.
            </p>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:info@ajuserv.com">info@ajuserv.com</a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Hyderabad, India</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3>Response Time</h3>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Send us a message</h3>

            {status.type && (
              <div className={`form-status form-status--${status.type}`}>
                {status.type === "success" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project or requirements..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>

      <section className="contact-page__map">
        <motion.div
          className="contact-page__map-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Find Us</h2>
          <p>Visit our office in Hyderabad, India</p>
        </motion.div>
        <motion.div
          className="contact-page__map-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <MapContainer
            center={COMPANY_LOCATION}
            zoom={14}
            scrollWheelZoom={false}
            className="contact-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={COMPANY_LOCATION} icon={customIcon}>
              <Popup>
                <strong>Ajuserv Technologies</strong>
                <br />
                Hyderabad, India
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="success-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              className="success-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="success-modal__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for reaching out. Our team will get back to you within
                24 hours.
              </p>
              <button
                className="success-modal__btn"
                onClick={() => setShowSuccessModal(false)}
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
