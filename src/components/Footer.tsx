"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Bridal Services", href: "#services" },
      { name: "Makeup", href: "#services" },
      { name: "Hair Styling", href: "#services" },
      { name: "Laser Treatments", href: "#services" },
      { name: "Facials & Skincare", href: "#services" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Gallery", href: "#gallery" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,171,143,0.04), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Rozina&apos;s
              </span>
              <br />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "var(--color-primary-200)",
                }}
              >
                Beauty Services Inc.
              </span>
            </div>
            <p
              style={{
                color: "rgba(235,237,235,0.45)",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                maxWidth: "320px",
                marginBottom: "1.4rem",
              }}
            >
              A welcoming, calming sanctuary where expertise meets elegance. Your
              destination for beauty in Richmond, BC.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}
            >
              <a
                href="tel:236-235-2284"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(235,237,235,0.55)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.3s",
                }}
              >
                <Phone size={13} color="var(--color-primary-300)" /> 236-235-2284
              </a>
              <a
                href="tel:778-668-4649"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(235,237,235,0.55)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                }}
              >
                <Phone size={13} color="var(--color-primary-300)" /> 778-668-4649
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  color: "rgba(235,237,235,0.55)",
                  fontSize: "0.875rem",
                }}
              >
                <MapPin
                  size={13}
                  color="var(--color-primary-300)"
                  style={{ marginTop: "3px", flexShrink: 0 }}
                />
                113-11020 No. 5 Road, Richmond, BC
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  color: "rgba(235,237,235,0.9)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  marginBottom: "1.1rem",
                  letterSpacing: "0.05em",
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                }}
              >
                {col.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3 }}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(link.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      style={{
                        color: "rgba(235,237,235,0.45)",
                        textDecoration: "none",
                        fontSize: "0.84rem",
                        transition: "color 0.3s",
                        display: "inline-block",
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "rgba(235,237,235,0.28)", fontSize: "0.78rem" }}>
            &copy; {new Date().getFullYear()} Rozina&apos;s Beauty Services Inc. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(235,237,235,0.28)",
              fontSize: "0.78rem",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            Made with{" "}
            <Heart
              size={11}
              fill="var(--color-primary)"
              color="var(--color-primary)"
            />{" "}
            in Richmond, BC
          </p>
        </div>
      </div>
    </footer>
  );
}
