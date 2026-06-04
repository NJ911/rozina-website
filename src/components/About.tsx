"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Heart, Clock, Users } from "lucide-react";

const stats = [
  { icon: <Users size={28} />, value: "5,000+", label: "Happy Clients" },
  { icon: <Award size={28} />, value: "15+", label: "Years Experience" },
  { icon: <Heart size={28} />, value: "100%", label: "Satisfaction" },
  { icon: <Clock size={28} />, value: "50+", label: "Services Offered" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      {/* Decorative background element */}
      <div
        style={{
          position: "absolute",
          left: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
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
          {/* Left: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              position: "relative",
              height: "550px",
            }}
          >
            {/* Main large image */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "75%",
                height: "70%",
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/bridal-service.png"
                alt="Rozina Beauty Services"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Smaller overlapping image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "55%",
                height: "50%",
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                border: "5px solid white",
              }}
            >
              <img
                src="/makeup-service.png"
                alt="Makeup service"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </motion.div>
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                position: "absolute",
                top: "60%",
                left: "-10px",
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
                color: "white",
                padding: "1.5rem",
                borderRadius: "1.25rem",
                boxShadow: "0 12px 40px rgba(183, 110, 121, 0.3)",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "0.25rem",
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
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-label">Our Story</span>
            <div
              className="section-divider"
              style={{ margin: "1rem 0 1rem" }}
            />
            <h2
              className="heading-lg"
              style={{ marginBottom: "1.5rem" }}
            >
              A Beautiful Experience,
              <br />
              <span style={{ color: "var(--color-primary)", fontStyle: "italic" }}>
                Every Single Time
              </span>
            </h2>
            <p className="text-body" style={{ marginBottom: "1rem" }}>
              At Rozina&apos;s Beauty Services, we believe that true beauty is an
              experience — not just a destination. Our team of skilled
              professionals combines artistry with the latest techniques to
              deliver results that are as unique as you are.
            </p>
            <p className="text-body" style={{ marginBottom: "2rem" }}>
              Located within the prestigious Alpha-Omega Spa &amp; Hair Salon in
              Richmond, BC, we offer a tranquil sanctuary where luxury meets
              expertise. Whether you&apos;re preparing for your wedding day or
              seeking a rejuvenating facial, we are committed to making you look
              and feel extraordinary.
            </p>

            {/* Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "1rem",
                    background: "var(--color-cream)",
                    border: "1px solid rgba(183, 110, 121, 0.08)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "0.5rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: "var(--color-charcoal)",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
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

      <style jsx global>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-grid > div:first-child {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
