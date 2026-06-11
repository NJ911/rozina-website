"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <section
      style={{
        padding: "5.5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Real salon photo background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/IMG_8478.jpeg"
          alt="Rozina's Beauty salon reception area"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        {/* Forest-green overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(44,57,48,0.88) 0%, rgba(26,32,25,0.82) 100%)",
          }}
        />
      </div>

      {/* Decorative orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,171,143,0.12), transparent)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          right: "8%",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.1), transparent)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.5rem",
              padding: "0.4rem 1.1rem",
              border: "1px solid rgba(189,213,198,0.3)",
              borderRadius: "100px",
              background: "rgba(129,171,143,0.12)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--color-primary-200)",
              }}
            />
            <span
              style={{
                color: "rgba(189,213,198,0.9)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Book Your Experience
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1.1rem",
            }}
          >
            Ready to Feel Your
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--color-primary-200)" }}>
              Most Beautiful Self?
            </span>
          </h2>

          <p
            style={{
              color: "rgba(235,237,235,0.72)",
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "2.25rem",
              maxWidth: "500px",
              margin: "0 auto 2.25rem",
            }}
          >
            Call us to schedule your appointment. We&apos;d love to create the perfect look for you.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="tel:236-235-2284"
              whileHover={{ scale: 1.04, boxShadow: "0 10px 36px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "white",
                color: "var(--color-primary-dark)",
                fontSize: "0.84rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <Phone size={15} /> 236-235-2284
            </motion.a>
            <motion.a
              href="tel:778-668-4649"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "transparent",
                color: "white",
                fontSize: "0.84rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1.5px solid rgba(235,237,235,0.35)",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <Phone size={15} /> 778-668-4649
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
