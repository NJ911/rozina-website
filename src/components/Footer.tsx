"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Globe, Heart } from "lucide-react";

const footerLinks = [
  { title: "Services", links: [{ name: "Bridal Services", href: "#services" }, { name: "Makeup", href: "#services" }, { name: "Hair Styling", href: "#services" }, { name: "Laser Treatments", href: "#services" }, { name: "Facials", href: "#services" }] },
  { title: "Quick Links", links: [{ name: "Home", href: "#home" }, { name: "About Us", href: "#about" }, { name: "Gallery", href: "#gallery" }, { name: "Testimonials", href: "#testimonials" }, { name: "Contact", href: "#contact" }] },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(183,110,121,0.04), transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 400, color: "white" }}>Rozina&apos;s</span>
              <br />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-primary-300)" }}>Beauty Services Inc.</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "350px", marginBottom: "1.5rem" }}>Where elegance meets expertise. Your destination for luxury beauty services in Richmond, BC.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="tel:236-235-2284" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s" }}><Phone size={14} /> 236-235-2284</a>
              <a href="tel:778-668-4649" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.9rem" }}><Phone size={14} /> 778-668-4649</a>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}><MapPin size={14} /> 113-11020 No. 5 Road, Richmond, BC</div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 style={{ color: "white", fontSize: "0.9rem", fontWeight: 600, marginBottom: "1.25rem", letterSpacing: "0.05em" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.links.map((link) => (
                  <li key={link.name}>
                    <motion.a href={link.href} whileHover={{ x: 4 }} onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.3s", display: "inline-block" }}>{link.name}</motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { icon: <Globe size={18} />, href: "#" },
          ].map((social, i) => (
            <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.9 }} style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "all 0.3s" }}>{social.icon}</motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>&copy; {new Date().getFullYear()} Rozina&apos;s Beauty Services Inc. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>Made with <Heart size={12} fill="var(--color-primary)" color="var(--color-primary)" /> in Richmond, BC</p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
