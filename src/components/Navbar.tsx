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
    // Prevent the browser from trying to restore previous scroll position
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "background 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1)",
          background: isScrolled
            ? "rgba(250, 251, 249, 0.94)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(18px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(129, 171, 143, 0.15)"
            : "none",
          boxShadow: isScrolled
            ? "0 4px 24px rgba(44,57,48,0.06)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0.9rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.7rem",
                fontWeight: 400,
                color: isScrolled ? "var(--color-charcoal)" : "white",
                letterSpacing: "0.02em",
                lineHeight: 1,
                transition: "color 0.35s",
              }}
            >
              Rozina&apos;s
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.58rem",
                fontWeight: 500,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: isScrolled ? "var(--color-primary)" : "rgba(189,213,198,0.9)",
                transition: "color 0.35s",
              }}
            >
              Beauty Services
            </span>
          </a>

          {/* Desktop Nav */}
          <div
            className="desktop-nav"
            style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    textDecoration: "none",
                    fontSize: "0.84rem",
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: "0.04em",
                    color: isActive
                      ? isScrolled
                        ? "var(--color-primary-dark)"
                        : "white"
                      : isScrolled
                      ? "var(--color-warm-gray)"
                      : "rgba(235,237,235,0.82)",
                    transition: "color 0.3s",
                    position: "relative",
                    paddingBottom: "4px",
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 1.5,
                        background: isScrolled
                          ? "var(--color-primary)"
                          : "rgba(189,213,198,0.9)",
                        borderRadius: 1,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <motion.a
              href="https://book.squareup.com/appointments/n7xxysv9bnct70/location/L65JXKYPCZCN5/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: "0.62rem 1.4rem", fontSize: "0.76rem", textDecoration: "none" }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                Book Now
              </span>
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isScrolled ? "var(--color-charcoal)" : "white",
              padding: "0.5rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(26, 32, 25, 0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.04, duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  textDecoration: "none",
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "var(--color-primary-200)"
                      : "rgba(235,237,235,0.85)",
                  letterSpacing: "0.01em",
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="tel:236-235-2284"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.28 }}
              className="btn-primary"
              style={{ marginTop: "1rem", textDecoration: "none" }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} /> Call to Book
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
