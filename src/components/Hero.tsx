"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/hero-salon.png"
          alt="Rozina's Beauty Salon"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="gradient-overlay" />
        {/* Extra bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background:
              "linear-gradient(to top, rgba(26,17,20,0.7), transparent)",
          }}
        />
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(183,110,121,0.15), transparent)",
          filter: "blur(2px)",
          zIndex: 1,
        }}
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "30%",
          left: "10%",
          width: 140,
          height: 140,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,169,110,0.12), transparent)",
          filter: "blur(3px)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "800px",
          padding: "0 2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1.25rem",
            background: "rgba(183, 110, 121, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: "100px",
            border: "1px solid rgba(183, 110, 121, 0.3)",
            marginBottom: "1.5rem",
          }}
        >
          <Sparkles size={14} color="var(--color-primary-300)" />
          <span
            style={{
              color: "var(--color-primary-200)",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Premium Beauty Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Rozina&apos;s
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary-300) 0%, var(--color-gold-light) 50%, var(--color-primary-200) 100%)",
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

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 300,
            maxWidth: "550px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Where elegance meets expertise. Discover our curated collection of
          luxury beauty, bridal, and advanced skincare services in Richmond, BC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="tel:236-235-2284"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Phone size={16} /> Book Appointment
            </span>
          </motion.a>
          <motion.a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "white",
              textDecoration: "none",
            }}
          >
            <span>Explore Services</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} color="rgba(255,255,255,0.5)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
