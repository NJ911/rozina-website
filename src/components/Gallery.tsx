"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/bridal-service.png", category: "Bridal", alt: "Bridal makeup" },
  { src: "/makeup-service.png", category: "Makeup", alt: "Glamour makeup" },
  { src: "/hair-styling.png", category: "Hair", alt: "Hair styling" },
  { src: "/facial-treatment.png", category: "Facial", alt: "Facial treatment" },
  { src: "/laser-treatment.png", category: "Laser", alt: "Laser treatment" },
  { src: "/waxing-threading.png", category: "Beauty", alt: "Threading" },
  { src: "/hero-salon.png", category: "Salon", alt: "Salon interior" },
  { src: "/bridal-service.png", category: "Bridal", alt: "Bridal look" },
];

const categories = ["All", "Bridal", "Makeup", "Hair", "Facial", "Laser", "Beauty"];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeFilter === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" style={{ padding: "var(--section-padding) 0", background: "var(--color-warm-white)", position: "relative", overflow: "hidden" }}>
      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="text-label">Our Work</span>
          <div className="section-divider" />
          <h2 className="heading-lg" style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>Photo Gallery</h2>
          <p className="text-body" style={{ maxWidth: "500px", margin: "0 auto" }}>Explore the artistry behind every look we create.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
          {categories.map((cat) => (
            <motion.button key={cat} onClick={() => setActiveFilter(cat)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: "0.5rem 1.25rem", borderRadius: "100px", border: "1.5px solid", borderColor: activeFilter === cat ? "var(--color-primary)" : "rgba(183,110,121,0.2)", background: activeFilter === cat ? "var(--color-primary)" : "transparent", color: activeFilter === cat ? "white" : "var(--color-warm-gray)", fontSize: "0.8rem", fontWeight: 500, cursor: "pointer", transition: "all 0.3s", fontFamily: "var(--font-body)" }}>{cat}</motion.button>
          ))}
        </motion.div>

        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div key={`${img.src}-${img.category}-${i}`} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4, delay: i * 0.05 }} onClick={() => setSelectedImage(img.src)} style={{ position: "relative", aspectRatio: i % 3 === 0 ? "3/4" : "1/1", borderRadius: "1rem", overflow: "hidden", cursor: "pointer" }} whileHover={{ scale: 1.02 }}>
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover", transition: "transform 0.6s" }} />
                <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent, rgba(183,110,121,0.6))", display: "flex", alignItems: "flex-end", padding: "1.25rem" }}>
                  <span style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 500 }}>{img.category}</span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out", padding: "2rem" }}>
            <motion.button onClick={() => setSelectedImage(null)} whileHover={{ scale: 1.1, rotate: 90 }} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "white" }}><X size={24} /></motion.button>
            <motion.img src={selectedImage} alt="Gallery full view" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: "1rem", objectFit: "contain" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
