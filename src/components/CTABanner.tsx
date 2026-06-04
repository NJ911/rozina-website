"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "5rem 0", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 50%, #6B3040 100%)" }}>
      <div style={{ position: "absolute", inset: 0, background: "url('/hero-salon.png') center/cover no-repeat", opacity: 0.1 }} />
      <div style={{ position: "absolute", top: "10%", left: "5%", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "150px", height: "150px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.1), transparent)", pointerEvents: "none" }} />

      <div ref={ref} style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <Sparkles size={20} color="var(--color-gold-light)" />
            <span style={{ color: "var(--color-gold-light)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase" }}>Book Your Experience</span>
            <Sparkles size={20} color="var(--color-gold-light)" />
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "white", lineHeight: 1.15, marginBottom: "1rem" }}>
            Ready to Unveil Your
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>Most Beautiful Self?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "550px", margin: "0 auto 2rem" }}>Call us today to schedule your personalized consultation and let us create the perfect look for you.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a href="tel:236-235-2284" whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", background: "white", color: "var(--color-primary-dark)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: "100px", textDecoration: "none", transition: "all 0.3s" }}>
              <Phone size={16} /> 236-235-2284
            </motion.a>
            <motion.a href="tel:778-668-4649" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", background: "transparent", color: "white", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: "100px", textDecoration: "none", transition: "all 0.3s" }}>
              <Phone size={16} /> 778-668-4649
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
