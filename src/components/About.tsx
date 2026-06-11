"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Heart, Clock, Users } from "lucide-react";

const stats = [
  { icon: <Users size={26} />, value: "5,000+", label: "Happy Clients" },
  { icon: <Award size={26} />, value: "15+", label: "Years Experience" },
  { icon: <Heart size={26} />, value: "100%", label: "Client Satisfaction" },
  { icon: <Clock size={26} />, value: "50+", label: "Services Offered" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <section
      id="about"
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--color-warm-white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background glow */}
      <div
        style={{
          position: "absolute",
          left: "-8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,171,143,0.07), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Image collage with real salon photos */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            style={{ position: "relative", height: "560px" }}
          >
            {/* Main large image — waiting area */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "74%",
                height: "68%",
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: "0 16px 50px rgba(44,57,48,0.12)",
              }}
            >
              <img
                src="/IMG_8475.jpeg"
                alt="Rozina's Beauty salon waiting area with marble cabinets"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Smaller image — hair styling area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "54%",
                height: "50%",
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: "0 16px 50px rgba(44,57,48,0.12)",
                border: "4px solid var(--color-warm-white)",
              }}
            >
              <img
                src="/IMG_8477.jpeg"
                alt="Rozina's Beauty hair styling area"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </motion.div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
              style={{
                position: "absolute",
                top: "60%",
                left: "-12px",
                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
                color: "var(--color-cream)",
                padding: "1.35rem",
                borderRadius: "1.25rem",
                boxShadow: "0 10px 36px rgba(68,87,74,0.28)",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.4rem",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "0.3rem",
                  opacity: 0.9,
                }}
              >
                Years of
                <br />
                Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            <span className="text-label">Our Story</span>
            <div className="section-divider" style={{ margin: "1rem 0" }} />
            <h2 className="heading-lg" style={{ marginBottom: "1.25rem" }}>
              A Welcoming Space,
              <br />
              <span
                style={{
                  color: "var(--color-primary-dark)",
                  fontStyle: "italic",
                }}
              >
                Crafted for You
              </span>
            </h2>
            <p className="text-body" style={{ marginBottom: "0.9rem" }}>
              Founded by Rozina, a passionate beauty expert with over 15 years of industry experience, our salon was built on a simple philosophy: beauty treatments should be a calm, personalized experience, never rushed.
            </p>
            <p className="text-body" style={{ marginBottom: "2rem" }}>
              Located within Alpha-Omega Spa &amp; Hair Salon in Richmond, BC, our
              serene environment offers a true retreat. From bridal prep to everyday
              beauty, Rozina and her skilled team combine artistry with the latest
              techniques to deliver results that are uniquely yours.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem",
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  style={{
                    padding: "1.1rem",
                    borderRadius: "1rem",
                    background: "var(--color-primary-50)",
                    border: "1px solid rgba(129,171,143,0.2)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "0.4rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.65rem",
                      fontWeight: 600,
                      color: "var(--color-charcoal)",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-warm-gray)",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
