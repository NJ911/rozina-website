"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Melissa L.",
    text: "Really good experience with Rozina. Saw her twice now for Brazilian waxing. Very professional, efficient and fast, and reasonable with her pricing. Love her personable attitude, and she has great memory! She made me feel at ease. Will come back again and highly recommend her to anyone.",
    rating: 5,
  },
  {
    name: "Kim Nguyen",
    text: "I've been coming to Rozina for facials and laser treatments for over a year now. The results have been incredible — my skin has never looked better. The atmosphere is so calming and luxurious.",
    rating: 5,
  },
  {
    name: "Anita K.",
    text: "The OxyGeneo facial was a game-changer for my skin! Rozina is so knowledgeable and gentle. I walked out glowing. This is now my go-to place for all beauty treatments.",
    rating: 5,
  },
  {
    name: "Michelle W.",
    text: "Best threading I've ever had! Rozina pays incredible attention to detail and always gets my brows perfectly shaped. The salon is clean, beautiful, and the service is top-notch.",
    rating: 5,
  },
  {
    name: "Fatima R.",
    text: "I got my party makeup done here and absolutely loved the result. Rozina is a true artist. She uses high-quality products and the look lasted all night. Will definitely be coming back!",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="marble-bg"
      style={{ padding: "var(--section-padding) 0", overflow: "hidden" }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,171,143,0.07), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span className="text-label">Client Love</span>
          <div className="section-divider" />
          <h2
            className="heading-lg"
            style={{ marginTop: "0.75rem", marginBottom: "0.9rem" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-body" style={{ maxWidth: "460px", margin: "0 auto" }}>
            Real experiences from our valued community.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: "relative" }}
        >
          <div
            className="glass-card"
            style={{ padding: "2.75rem 3rem", textAlign: "center", position: "relative" }}
          >
            <Quote
              size={36}
              style={{ color: "var(--color-primary-300)", marginBottom: "1.4rem" }}
            />
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.05rem, 2.4vw, 1.35rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "var(--color-charcoal)",
                lineHeight: 1.65,
                marginBottom: "1.5rem",
                minHeight: "90px",
              }}
            >
              &ldquo;{testimonials[current].text}&rdquo;
            </motion.p>

            {/* Stars */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.25rem",
                marginBottom: "0.85rem",
              }}
            >
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  fill="var(--color-gold)"
                  color="var(--color-gold)"
                />
              ))}
            </div>

            <motion.p
              key={`name-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                fontWeight: 600,
                color: "var(--color-primary-dark)",
                fontSize: "0.95rem",
              }}
            >
              {testimonials[current].name}
            </motion.p>
          </div>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1.75rem",
              alignItems: "center",
            }}
          >
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "1.5px solid var(--color-primary-300)",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--color-primary-dark)",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "0.45rem", alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: current === i ? 22 : 8,
                    height: 8,
                    borderRadius: "100px",
                    background:
                      current === i
                        ? "var(--color-primary)"
                        : "var(--color-primary-200)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: "1.5px solid var(--color-primary-300)",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--color-primary-dark)",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Google reviews CTA */}
          <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
            <motion.a
              href="https://g.page/r/CZ2RbWwKiujhEBA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ textDecoration: "none" }}
            >
              <span>View All Google Reviews</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
