"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedMarqueeHero = ({ tagline, title, description, ctaText, images }) => {
  // Duplicate the images multiple times for smoother continuous loop
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title || "Fire Safety & Industrial Equipment Solutions"}
      </motion.h1>

      {description && (
        <motion.p
          className="text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}

      {/* ✅ Continuous seamless image marquee */}
      <div className="w-full overflow-hidden mt-12">
        <motion.div
          className="flex gap-8"
          animate={{ 
            x: ["0%", "-100%"] // Move the entire width of one set
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // Slower duration for smoother continuous motion
            ease: "linear",
          }}
        >
          {duplicatedImages.map((img, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                src={img}
                alt={`hero-img-${i}`}
                className="w-[300px] h-[200px] object-cover rounded-xl border border-gray-700 shadow-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      {ctaText && (
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-semibold">
            {ctaText}
          </button>
        </motion.div>
      )}
    </section>
  );
};