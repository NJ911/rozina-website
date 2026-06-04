"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: isScrolled ? -40 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1001,
          background: "var(--color-charcoal)",
          color: "rgba(255,255,255,0.8)",
          fontSize: "0.8rem",
          padding: "0.5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            <MapPin size={13} />
            <span>113-11020 No. 5 Road, Richmond, BC</span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a
              href="tel:236-235-2284"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--color-primary-300)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              <Phone size={13} /> 236-235-2284
            </a>
            <a
              href="tel:778-668-4649"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--color-primary-300)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              <Phone size={13} /> 778-668-4649
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed",
          top: isScrolled ? 0 : 36,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: isScrolled
            ? "rgba(254, 253, 251, 0.92)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(183, 110, 121, 0.1)"
            : "none",
          boxShadow: isScrolled
            ? "0 4px 30px rgba(0,0,0,0.05)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.75rem",
                fontWeight: 400,
                color: isScrolled
                  ? "var(--color-charcoal)"
                  : "white",
                letterSpacing: "0.02em",
                lineHeight: 1,
                transition: "color 0.4s",
              }}
            >
              Rozina&apos;s
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: isScrolled
                  ? "var(--color-primary)"
                  : "var(--color-primary-300)",
                transition: "color 0.4s",
              }}
            >
              Beauty Services
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                whileHover={{ y: -2 }}
                style={{
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: activeSection === link.href.replace("#", "") ? 500 : 400,
                  letterSpacing: "0.04em",
                  color:
                    activeSection === link.href.replace("#", "")
                      ? isScrolled
                        ? "var(--color-primary)"
                        : "white"
                      : isScrolled
                      ? "var(--color-warm-gray)"
                      : "rgba(255,255,255,0.8)",
                  transition: "all 0.3s",
                  position: "relative",
                }}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: "absolute",
                      bottom: -6,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: isScrolled
                        ? "var(--color-primary)"
                        : "white",
                      borderRadius: 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="tel:236-235-2284"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.65rem 1.5rem",
                fontSize: "0.78rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Phone size={14} /> Book Now
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isScrolled ? "var(--color-charcoal)" : "white",
              padding: "0.5rem",
            }}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(26, 17, 20, 0.95)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                style={{
                  textDecoration: "none",
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "var(--color-primary-300)"
                      : "rgba(255,255,255,0.8)",
                  transition: "color 0.3s",
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="tel:236-235-2284"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="btn-primary"
              style={{
                marginTop: "1rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Phone size={16} /> Call to Book
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
