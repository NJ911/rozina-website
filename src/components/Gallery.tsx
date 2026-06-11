"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

// Real salon photos + existing service images
const galleryImages = [
  { src: "/IMG_8478.jpeg", category: "Salon", alt: "Reception and wash station" },
  { src: "/IMG_8476.jpeg", category: "Salon", alt: "Nail desk area with marble wall" },
  { src: "/IMG_8477.jpeg", category: "Salon", alt: "Hair styling chairs" },
  { src: "/IMG_8475.jpeg", category: "Salon", alt: "Marble waiting area cabinets" },
  { src: "/bridal-service.png", category: "Bridal", alt: "Bridal makeup" },
  { src: "/makeup-service.png", category: "Makeup", alt: "Glamour makeup" },
  { src: "/hair-styling.png", category: "Hair", alt: "Hair styling" },
  { src: "/facial-treatment.png", category: "Skincare", alt: "Facial treatment" },
];

const categories = ["All", "Salon", "Bridal", "Makeup", "Hair", "Skincare"];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section
      id="gallery"
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--color-warm-white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-6%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,171,143,0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <span className="text-label">Our Space &amp; Work</span>
          <div className="section-divider" />
          <h2 className="heading-lg" style={{ marginTop: "0.75rem", marginBottom: "0.9rem" }}>
            Photo Gallery
          </h2>
          <p className="text-body" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Take a peek inside our salon and explore the artistry behind every look we create.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "0.45rem 1.15rem",
                borderRadius: "100px",
                border: "1.5px solid",
                borderColor:
                  activeFilter === cat
                    ? "var(--color-primary)"
                    : "rgba(129,171,143,0.3)",
                background:
                  activeFilter === cat ? "var(--color-primary)" : "transparent",
                color:
                  activeFilter === cat ? "var(--color-cream)" : "var(--color-warm-gray)",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.25s ease",
                fontFamily: "var(--font-body)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
                onClick={() => setSelectedImage(img.src)}
                whileHover={{ scale: 1.02 }}
                style={{
                  position: "relative",
                  aspectRatio: i % 4 === 0 ? "3/4" : "4/3",
                  borderRadius: "0.9rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  willChange: "transform",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent, rgba(44,57,48,0.55))",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1.1rem",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.15rem",
                      fontWeight: 400,
                    }}
                  >
                    {img.alt}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2000,
              background: "rgba(26,32,25,0.92)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "zoom-out",
              padding: "2rem",
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "50%",
                width: "46px",
                height: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "white",
              }}
              aria-label="Close image"
            >
              <X size={22} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Gallery full view"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              style={{
                maxWidth: "88vw",
                maxHeight: "84vh",
                borderRadius: "1rem",
                objectFit: "contain",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
