import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/platforms", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/solutions", label: "Solutions" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Ajuserv" className="navbar__logo-img" />
        </Link>

        <div className={`navbar__links ${mobileOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={location.pathname === link.to ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="navbar__cta">
          Contact Us
        </Link>

        <button
          className={`navbar__toggle ${mobileOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
