"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  const contactItems = [
    {
      icon: <Phone size={20} />,
      title: "Call Us",
      lines: ["236-235-2284", "778-668-4649"],
      href: "tel:236-235-2284",
    },
    {
      icon: <MapPin size={20} />,
      title: "Visit Us",
      lines: [
        "113-11020 No. 5 Road",
        "Richmond, BC (Within Alpha-Omega Spa & Hair Salon)",
      ],
    },
    {
      icon: <Clock size={20} />,
      title: "Hours",
      lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: By Appointment Only"],
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      lines: ["info@rozina786.com"],
      href: "mailto:info@rozina786.com",
    },
  ];

  return (
    <section
      id="contact"
      className="marble-bg-dark"
      style={{ padding: "var(--section-padding) 0", overflow: "hidden" }}
    >
      {/* Top line accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--color-primary-400), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-8%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,171,143,0.07), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="text-label">Get in Touch</span>
          <div className="section-divider" />
          <h2
            className="heading-lg"
            style={{
              marginTop: "0.75rem",
              marginBottom: "0.9rem",
              color: "white",
            }}
          >
            Visit Us Today
          </h2>
          <p
            style={{
              maxWidth: "480px",
              margin: "0 auto",
              color: "rgba(235,237,235,0.62)",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            We&apos;d love to hear from you. Call us to book your appointment or
            stop by our salon.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                whileHover={{ x: 4 }}
                onClick={() => {
                  if (item.href) window.location.href = item.href;
                }}
                style={{
                  display: "flex",
                  gap: "1.1rem",
                  padding: "1.35rem 1.5rem",
                  borderRadius: "0.9rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  cursor: item.href ? "pointer" : "default",
                  transition: "box-shadow 0.3s ease, background 0.3s ease",
                  willChange: "transform",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-cream)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.title}
                  </h4>
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      style={{
                        color: "rgba(235,237,235,0.58)",
                        fontSize: "0.875rem",
                        lineHeight: 1.55,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.a
              href="https://g.page/r/CZ2RbWwKiujhEBA"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{ textDecoration: "none", justifyContent: "center", marginTop: "0.25rem" }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                View on Google Maps <ExternalLink size={15} />
              </span>
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            style={{
              borderRadius: "1.1rem",
              overflow: "hidden",
              minHeight: "440px",
              boxShadow: "0 16px 50px rgba(0,0,0,0.28)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.0843!3d49.1665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1e88a0a6c6d919d!2sAlpha-Omega+Spa+%26+Hair+Salon!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "440px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rozina Beauty Services Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
