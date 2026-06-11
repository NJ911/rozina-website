"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Hair Styling",
    description: "Cuts, colour, blowouts & treatments tailored to you.",
    image: "/hair-styling.png",
  },
  {
    title: "Bridal Services",
    description: "Western & Eastern bridal packages for your special day.",
    image: "/bridal-service.png",
    featured: true,
  },
  {
    title: "Makeup",
    description: "Event, party & everyday glam from natural to bold.",
    image: "/makeup-service.png",
  },
  {
    title: "Facials & Skincare",
    description: "OxyGeneo, rejuvenating facials & advanced skincare.",
    image: "/facial-treatment.png",
  },
  {
    title: "Laser Treatments",
    description: "Laser hair removal & skin rejuvenation for all skin types.",
    image: "/laser-treatment.png",
  },
  {
    title: "Waxing & Threading",
    description: "Precision brow shaping, threading & full-body waxing.",
    image: "/waxing-threading.png",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6 }}
      style={{
        position: "relative",
        borderRadius: "1.1rem",
        overflow: "hidden",
        background: "var(--color-pearl)",
        border: service.featured
          ? "2px solid var(--color-primary)"
          : "1px solid rgba(129,171,143,0.18)",
        boxShadow: "0 2px 16px rgba(44,57,48,0.04)",
        transition: "box-shadow 0.4s ease, border-color 0.3s ease",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        willChange: "transform",
      }}
    >
      {/* Most Popular badge */}
      {service.featured && (
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 3,
            padding: "0.3rem 0.9rem",
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
            color: "var(--color-cream)",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            borderRadius: "100px",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 55%, rgba(44,57,48,0.22) 100%)",
          }}
        />
      </div>

      {/* Text content */}
      <div
        style={{
          padding: "1.4rem 1.6rem 1.6rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "var(--color-charcoal)",
            marginBottom: "0.55rem",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--color-warm-gray)",
            lineHeight: 1.65,
          }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="marble-bg"
      style={{ padding: "var(--section-padding) 0", overflow: "hidden" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="text-label">What We Offer</span>
          <div className="section-divider" />
          <h2
            className="heading-lg"
            style={{ marginTop: "0.75rem", marginBottom: "0.9rem" }}
          >
            Our Services
          </h2>
          <p
            className="text-body"
            style={{ maxWidth: "520px", margin: "0 auto" }}
          >
            Brief, beautiful treatments — and if you&apos;d like to know more, simply reach out.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
            gap: "1.4rem",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <p
            className="text-body"
            style={{ marginBottom: "1.2rem", fontSize: "0.92rem" }}
          >
            Want to know more about a specific service? We&apos;d love to hear from you.
          </p>
          <motion.a
            href="tel:236-235-2284"
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ textDecoration: "none" }}
          >
            <span>Get in Touch</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
