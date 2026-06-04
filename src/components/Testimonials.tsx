"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Melissa L.", text: "Really good experience with Rozina. Saw her twice now for Brazilian waxing. Very professional, efficient and fast, and reasonable with her pricing. Love her personable attitude, and she has great memory!  She made me feel at ease. Will come back again and highly recommend her to anyone.", rating: 5 },
  { name: "Kim Nguyen", text: "I've been coming to Rozina for facials and laser treatments for over a year now. The results have been incredible — my skin has never looked better. The atmosphere is so calming and luxurious.", rating: 5 },
  { name: "Anita K.", text: "The OxyGeneo facial was a game-changer for my skin! Rozina is so knowledgeable and gentle. I walked out glowing. This is now my go-to place for all beauty treatments.", rating: 5 },
  { name: "Michelle W.", text: "Best threading I've ever had! Rozina pays incredible attention to detail and always gets my brows perfectly shaped. The salon is clean, beautiful, and the service is top-notch.", rating: 5 },
  { name: "Fatima R.", text: "I got my party makeup done here and absolutely loved the result. Rozina is a true artist. She uses high-quality products and the look lasted all night. Will definitely be coming back!", rating: 5 },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="marble-bg" style={{ padding: "var(--section-padding) 0", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(183,110,121,0.05), transparent 70%)", pointerEvents: "none" }} />

      <div ref={ref} style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="text-label">Client Love</span>
          <div className="section-divider" />
          <h2 className="heading-lg" style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>What Our Clients Say</h2>
          <p className="text-body" style={{ maxWidth: "500px", margin: "0 auto" }}>Real experiences from our valued clients.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ position: "relative" }}>
          <div className="glass-card" style={{ padding: "3rem", textAlign: "center", position: "relative" }}>
            <Quote size={40} style={{ color: "var(--color-primary-200)", marginBottom: "1.5rem" }} />
            <motion.p key={current} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 400, fontStyle: "italic", color: "var(--color-charcoal)", lineHeight: 1.6, marginBottom: "1.5rem", minHeight: "100px" }}>
              &ldquo;{testimonials[current].text}&rdquo;
            </motion.p>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.25rem", marginBottom: "1rem" }}>
              {[...Array(testimonials[current].rating)].map((_, i) => (<Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />))}
            </div>
            <motion.p key={`name-${current}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontWeight: 600, color: "var(--color-charcoal)", fontSize: "1rem" }}>{testimonials[current].name}</motion.p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem", alignItems: "center" }}>
            <motion.button onClick={prev} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid var(--color-primary-300)", background: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-primary)" }}><ChevronLeft size={20} /></motion.button>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {testimonials.map((_, i) => (<motion.div key={i} onClick={() => setCurrent(i)} animate={{ scale: current === i ? 1.3 : 1, background: current === i ? "var(--color-primary)" : "var(--color-primary-200)" }} style={{ width: "8px", height: "8px", borderRadius: "50%", cursor: "pointer", transition: "all 0.3s" }} />))}
            </div>
            <motion.button onClick={next} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid var(--color-primary-300)", background: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-primary)" }}><ChevronRight size={20} /></motion.button>
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <motion.a href="https://g.page/r/CZ2RbWwKiujhEBA" target="_blank" rel="noopener noreferrer" className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ textDecoration: "none" }}>
              <span>View All Google Reviews</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
