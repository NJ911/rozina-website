"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "680px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background — real salon photo */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/IMG_8476.jpeg"
          alt="Rozina's Beauty Salon interior"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          quality={90}
        />
        {/* Multi-layer overlay: forest green tint for warmth */}
        <div className="gradient-overlay" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(44, 57, 48, 0.25)",
          }}
        />
        {/* Bottom fade to page background */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "28%",
            background: "linear-gradient(to top, rgba(26,32,25,0.65), transparent)",
          }}
        />
      </div>

      {/* Subtle floating orb — sage green */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "18%",
          right: "12%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,171,143,0.18), transparent)",
          filter: "blur(4px)",
          zIndex: 1,
          willChange: "transform",
        }}
      />
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "28%",
          left: "8%",
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.1), transparent)",
          filter: "blur(6px)",
          zIndex: 1,
          willChange: "transform",
        }}
      />

      {/* Hero Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "820px",
          padding: "0 1.5rem",
          width: "100%",
        }}
      >
        {/* Eye-brow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.45rem 1.25rem",
            background: "rgba(129, 171, 143, 0.22)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "100px",
            border: "1px solid rgba(129, 171, 143, 0.4)",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--color-primary-300)",
            }}
          />
          <span
            style={{
              color: "rgba(235, 237, 235, 0.95)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Richmond, BC · Beauty &amp; Wellness
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.4, 0, 0.2, 1] }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem, 7.5vw, 5.8rem)",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.06,
            marginBottom: "1.4rem",
            letterSpacing: "-0.02em",
          }}
        >
          Rozina&apos;s
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #bed5c6 0%, #e5d4a8 50%, #9dbfaa 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Beauty Services
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{
            color: "rgba(235, 237, 235, 0.82)",
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            fontWeight: 300,
            maxWidth: "540px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
          }}
        >
          A welcoming, calming sanctuary in Richmond where beauty meets expert care.
          Tailored treatments for every occasion.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="btn-stack-mobile"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="https://book.squareup.com/appointments/n7xxysv9bnct70/location/L65JXKYPCZCN5/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ textDecoration: "none" }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Book Appointment
            </span>
          </motion.a>
          <motion.a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              borderColor: "rgba(235, 237, 235, 0.4)",
              color: "white",
              textDecoration: "none",
            }}
          >
            <span>Explore Services</span>
          </motion.a>
        </motion.div>

        {/* Phone quick-link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          style={{ marginTop: "2rem" }}
        >
          <a
            href="tel:236-235-2284"
            style={{
              color: "rgba(235, 237, 235, 0.6)",
              fontSize: "0.82rem",
              letterSpacing: "0.06em",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "color 0.3s",
            }}
          >
            <Phone size={13} />
            236-235-2284
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            color: "rgba(235, 237, 235, 0.45)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        >
          <ArrowDown size={15} color="rgba(235,237,235,0.45)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
