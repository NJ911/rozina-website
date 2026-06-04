"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="marble-bg-dark" style={{ padding: "var(--section-padding) 0", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, var(--color-primary-400), transparent)" }} />
      <div style={{ position: "absolute", top: "20%", right: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(183,110,121,0.08), transparent 70%)", pointerEvents: "none" }} />

      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="text-label">Get in Touch</span>
          <div className="section-divider" />
          <h2 className="heading-lg" style={{ marginTop: "0.75rem", marginBottom: "1rem", color: "white" }}>Visit Us Today</h2>
          <p style={{ maxWidth: "500px", margin: "0 auto", color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.7 }}>We&apos;d love to hear from you. Call us to book your appointment or stop by our salon.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="contact-grid">
          {/* Contact Cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { icon: <Phone size={22} />, title: "Call Us", lines: ["236-235-2284", "778-668-4649"], href: "tel:236-235-2284" },
              { icon: <MapPin size={22} />, title: "Visit Us", lines: ["113-11020 No. 5 Road", "Richmond, BC (Within Alpha-Omega Spa & Hair Salon)"] },
              { icon: <Clock size={22} />, title: "Hours", lines: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment Only"] },
              { icon: <Mail size={22} />, title: "Email", lines: ["info@rozina786.com"] },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} whileHover={{ x: 4, boxShadow: "0 8px 30px rgba(183,110,121,0.15)" }} style={{ display: "flex", gap: "1.25rem", padding: "1.5rem", borderRadius: "1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", cursor: item.href ? "pointer" : "default", transition: "all 0.3s" }} onClick={() => { if (item.href) window.location.href = item.href; }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h4 style={{ color: "white", fontSize: "1rem", fontWeight: 600, marginBottom: "0.35rem" }}>{item.title}</h4>
                  {item.lines.map((line) => (<p key={line} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.5 }}>{line}</p>))}
                </div>
              </motion.div>
            ))}

            <motion.a href="https://g.page/r/CZ2RbWwKiujhEBA" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary" style={{ textDecoration: "none", justifyContent: "center", marginTop: "0.5rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>View on Google Maps <ExternalLink size={16} /></span>
            </motion.a>
          </motion.div>

          {/* Map Embed */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} style={{ borderRadius: "1.25rem", overflow: "hidden", height: "100%", minHeight: "450px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.0843!3d49.1665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1e88a0a6c6d919d!2sAlpha-Omega+Spa+%26+Hair+Salon!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.8) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rozina Beauty Services Location"
            />
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
