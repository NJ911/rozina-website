"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

// Service data from the Canva site — real descriptions
const serviceCategories = [
  {
    category: "Hair",
    icon: "✂️",
    services: [
      {
        title: "Haircut & Style",
        description:
          "Precision cutting techniques designed to enhance your natural features and create a timeless look tailored just for you.",
        image: "/hair-styling.png",
      },
      {
        title: "Colouring & Highlights",
        description:
          "From subtle balayage to vibrant modern shades, our expert colourists bring brilliance and depth to your unique hair type.",
        image: "/hair-styling.png",
      },
      {
        title: "Blowouts & Styling",
        description:
          "Red carpet-ready blowouts and professional styling for any occasion, ensuring a polished and sophisticated finish that lasts.",
        image: "/hair-styling.png",
      },
    ],
  },
  {
    category: "Makeup",
    icon: "💄",
    services: [
      {
        title: "Professional Makeup",
        description:
          "From chic events to everyday elegance, our makeup services are designed to ensure you leave happy. Modern beauty tailored to your unique features.",
        image: "/makeup-service.png",
      },
      {
        title: "Bridal Makeup",
        description:
          "Exquisite Western and Eastern bridal packages. We create timeless, unforgettable looks for your most special day — including Mehndi & Sangeet.",
        image: "/bridal-service.png",
        featured: true,
      },
    ],
  },
  {
    category: "Skincare",
    icon: "✨",
    services: [
      {
        title: "Advanced Skincare",
        description:
          "Experience rejuvenated skin with our wide variety of facials. Elite skincare solutions at accessible rates so everyone can enjoy a radiant, healthy glow.",
        image: "/facial-treatment.png",
      },
      {
        title: "OxyGeneo Facial",
        description:
          "The revolutionary 3-in-1 super facial that exfoliates, infuses, and oxygenates your skin for an instant, luminous glow.",
        image: "/facial-treatment.png",
      },
      {
        title: "Laser Skin Rejuvenation",
        description:
          "Advanced laser treatments to restore your skin's youthful radiance, reduce fine lines, and improve overall texture and tone.",
        image: "/laser-treatment.png",
      },
    ],
  },
  {
    category: "Hair Removal",
    icon: "🌿",
    services: [
      {
        title: "Laser Hair Removal",
        description:
          "Safe, effective, and long-lasting laser hair removal treatments for all skin types — full body or targeted areas.",
        image: "/laser-treatment.png",
      },
      {
        title: "Waxing",
        description:
          "Gentle full-body waxing for silky smooth skin. We use premium wax formulas that are kind to even the most sensitive skin.",
        image: "/waxing-threading.png",
      },
      {
        title: "Threading",
        description:
          "Precision brow shaping and facial threading for clean, defined results that frame your face beautifully.",
        image: "/waxing-threading.png",
      },
    ],
  },
];

const allCategories = ["All", ...serviceCategories.map((c) => c.category)];

function ServiceCard({
  title,
  description,
  image,
  featured,
  index,
}: {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(44,57,48,0.1)" }}
      style={{
        borderRadius: "1.1rem",
        overflow: "hidden",
        background: "var(--color-pearl)",
        border: featured
          ? "2px solid var(--color-primary)"
          : "1px solid rgba(129,171,143,0.2)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        willChange: "transform",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            top: "0.9rem",
            right: "0.9rem",
            zIndex: 3,
            padding: "0.28rem 0.85rem",
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
            color: "var(--color-cream)",
            fontSize: "0.65rem",
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
      <div style={{ position: "relative", width: "100%", height: "175px", overflow: "hidden" }}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 55%, rgba(44,57,48,0.2) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem 1.4rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.3rem",
            fontWeight: 500,
            color: "var(--color-charcoal)",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "0.87rem",
            color: "var(--color-warm-gray)",
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleServices =
    activeCategory === "All"
      ? serviceCategories.flatMap((c) => c.services)
      : serviceCategories
          .filter((c) => c.category === activeCategory)
          .flatMap((c) => c.services);

  return (
    <section
      id="services"
      className="marble-bg"
      style={{ padding: "var(--section-padding) 0", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.25rem" }}>
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <span className="text-label">Our Premium Services</span>
          <div className="section-divider" />
          <h2
            className="heading-lg"
            style={{ marginTop: "0.75rem", marginBottom: "0.85rem" }}
          >
            Beauty, Tailored to You
          </h2>
          <p
            className="text-body"
            style={{ maxWidth: "560px", margin: "0 auto" }}
          >
            Experience high-end results with professional artistry. From precision
            styling to rejuvenating skincare — keep it brief, keep it beautiful.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.48rem 1.2rem",
                borderRadius: "100px",
                border: "1.5px solid",
                borderColor:
                  activeCategory === cat
                    ? "var(--color-primary)"
                    : "rgba(129,171,143,0.35)",
                background:
                  activeCategory === cat ? "var(--color-primary)" : "white",
                color:
                  activeCategory === cat
                    ? "var(--color-cream)"
                    : "var(--color-warm-gray)",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.25s ease",
                fontFamily: "var(--font-body)",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              {cat !== "All" &&
                serviceCategories.find((c) => c.category === cat)?.icon}{" "}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {visibleServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <p className="text-body" style={{ marginBottom: "1.1rem", fontSize: "0.92rem" }}>
            Want to know more? We&apos;d love to hear from you.
          </p>
          <motion.a
            href="tel:236-235-2284"
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ textDecoration: "none" }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={15} /> Get in Touch
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
