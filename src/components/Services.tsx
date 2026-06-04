"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Beauty Services",
    description:
      "Complete beauty treatments including skincare, lash extensions, and personalized beauty routines tailored to enhance your natural glow.",
    image: "/facial-treatment.png",
    features: ["Facials", "Lash Extensions", "Skincare"],
  },
  {
    title: "Makeup Services",
    description:
      "Professional makeup artistry for every occasion — from natural everyday looks to glamorous evening transformations.",
    image: "/makeup-service.png",
    features: ["Event Makeup", "Party Looks", "Everyday Glam"],
  },
  {
    title: "Bridal Services",
    description:
      "Exquisite Western and Eastern bridal packages. We create timeless looks for your most unforgettable day.",
    image: "/bridal-service.png",
    features: ["Western Bridal", "Eastern Bridal", "Mehndi & Sangeet"],
    featured: true,
  },
  {
    title: "Laser Hair Removal",
    description:
      "Advanced laser technology for safe, effective, and long-lasting hair removal treatments for all skin types.",
    image: "/laser-treatment.png",
    features: ["Full Body", "Face & Neck", "All Skin Types"],
  },
  {
    title: "Skin Rejuvenation",
    description:
      "Advanced laser skin rejuvenation treatments to restore your skin's youthful radiance, reduce fine lines, and improve texture.",
    image: "/facial-treatment.png",
    features: ["Anti-Aging", "Pigmentation", "Texture Repair"],
  },
  {
    title: "OxyGeneo Facial",
    description:
      "The revolutionary 3-in-1 super facial that exfoliates, infuses, and oxygenates your skin for an instant, luminous glow.",
    image: "/facial-treatment.png",
    features: ["Exfoliate", "Infuse", "Oxygenate"],
  },
  {
    title: "Hair Styling",
    description:
      "Expert cuts, coloring, styling, and treatments. From sleek blowouts to complete transformations, we bring your hair goals to life.",
    image: "/hair-styling.png",
    features: ["Cuts & Color", "Styling", "Treatments"],
  },
  {
    title: "Waxing & Threading",
    description:
      "Precision hair removal with gentle techniques. Expert threading and full-body waxing for silky smooth results.",
    image: "/waxing-threading.png",
    features: ["Eyebrow Shaping", "Full Body Wax", "Threading"],
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        position: "relative",
        borderRadius: "1.25rem",
        overflow: "hidden",
        background: "white",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        border: service.featured
          ? "2px solid var(--color-primary-300)"
          : "1px solid rgba(0,0,0,0.04)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 60px rgba(183, 110, 121, 0.12)",
      }}
    >
      {service.featured && (
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 3,
            padding: "0.35rem 1rem",
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
            color: "white",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderRadius: "100px",
          }}
        >
          Most Popular
        </div>
      )}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          overflow: "hidden",
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          style={{
            objectFit: "cover",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </div>
      <div
        style={{
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "var(--color-charcoal)",
            marginBottom: "0.75rem",
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--color-warm-gray)",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
            flex: 1,
          }}
        >
          {service.description}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.25rem",
          }}
        >
          {service.features.map((feature) => (
            <span
              key={feature}
              style={{
                padding: "0.3rem 0.75rem",
                background: "var(--color-primary-50)",
                color: "var(--color-primary-600)",
                fontSize: "0.75rem",
                fontWeight: 500,
                borderRadius: "100px",
                border: "1px solid var(--color-primary-100)",
              }}
            >
              {feature}
            </span>
          ))}
        </div>
        <motion.a
          href="tel:236-235-2284"
          whileHover={{ x: 4 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--color-primary)",
            fontSize: "0.85rem",
            fontWeight: 500,
            textDecoration: "none",
            marginTop: "auto",
          }}
        >
          Book Now <ArrowRight size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="marble-bg"
      style={{
        padding: "var(--section-padding) 0",
        overflow: "hidden",
      }}
    >
      {/* Background decorative */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(183,110,121,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="text-label">What We Offer</span>
          <div className="section-divider" />
          <h2
            className="heading-lg"
            style={{ marginTop: "0.75rem", marginBottom: "1rem" }}
          >
            Our Signature Services
          </h2>
          <p
            className="text-body"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Indulge in our comprehensive range of beauty treatments, each
            meticulously crafted to bring out your natural radiance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
