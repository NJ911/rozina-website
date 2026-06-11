"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Heart, Clock, Users } from "lucide-react";

// Animated counter hook
function useCountUp(target: number, duration: number = 1800, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + eased * (target - startValue)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [startCounting, target, duration]);

  return count;
}

function AnimatedStat({
  icon,
  target,
  suffix,
  label,
  isInView,
  delay,
}: {
  icon: React.ReactNode;
  target: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}) {
  const [started, setStarted] = useState(false);
  const count = useCountUp(target, 2000, started);

  useEffect(() => {
    if (isInView && !started) {
      const timer = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, started, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: delay / 1000 + 0.3, ease: [0.4, 0, 0.2, 1] }}
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
        {icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.7rem",
          fontWeight: 600,
          color: "var(--color-charcoal)",
          lineHeight: 1,
          marginBottom: "0.2rem",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div
        style={{
          fontSize: "0.72rem",
          color: "var(--color-warm-gray)",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { icon: <Users size={24} />, target: 5000, suffix: "+", label: "Happy Clients" },
    { icon: <Award size={24} />, target: 15, suffix: "+", label: "Years Experience" },
    { icon: <Heart size={24} />, target: 100, suffix: "%", label: "Client Satisfaction" },
    { icon: <Clock size={24} />, target: 50, suffix: "+", label: "Services Offered" },
  ];

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
      {/* Background glow */}
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
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.25rem" }}
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
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: "relative", height: "560px" }}
          >
            {/* Main large image */}
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
                alt="Rozina's Beauty salon waiting area"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Smaller overlapping image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
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
              transition={{ duration: 0.55, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: "absolute",
                top: "60%",
                left: "-12px",
                background:
                  "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
                color: "var(--color-cream)",
                padding: "1.25rem",
                borderRadius: "1.25rem",
                boxShadow: "0 10px 36px rgba(68,87,74,0.28)",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: "0.62rem",
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
            transition={{ duration: 0.75, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-label">Meet Rozina</span>
            <div className="section-divider" style={{ margin: "1rem 0" }} />
            <h2 className="heading-lg" style={{ marginBottom: "1.25rem" }}>
              The Rozina Standard:
              <br />
              <span
                style={{ color: "var(--color-primary-dark)", fontStyle: "italic" }}
              >
                Affordable Luxury
              </span>
            </h2>

            {/* About Rozina personally */}
            <p className="text-body" style={{ marginBottom: "0.85rem" }}>
              Rozina is a passionate, highly skilled beauty professional with over
              15 years of experience transforming her clients' confidence. Known for
              her warm personality, meticulous attention to detail, and genuine care
              for each person she works with, Rozina has built a loyal community of
              clients who trust her artistry completely.
            </p>
            <p className="text-body" style={{ marginBottom: "0.85rem" }}>
              Since opening her doors in Richmond, Rozina&apos;s Beauty Services has
              redefined the salon experience through technical mastery and
              professional expertise. We believe that looking and feeling your best
              is the result of exceptional care in a welcoming, sophisticated
              environment.
            </p>
            <p className="text-body" style={{ marginBottom: "2rem" }}>
              Located within Alpha-Omega Spa &amp; Hair Salon in Richmond, BC, our
              mission is simple: to provide high-end treatments that let you maintain
              your glow — from precision styling to rejuvenating skincare.
            </p>

            {/* Animated Stats */}
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem",
              }}
            >
              {stats.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  icon={stat.icon}
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  isInView={isInView}
                  delay={i * 150}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
