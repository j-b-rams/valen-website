"use client";

import { motion } from "framer-motion";

export function SectionDivider({ variant = "leaves" }: { variant?: "leaves" | "lines" | "botanical" }) {
  if (variant === "lines") {
    return (
      <div className="relative py-16 overflow-hidden bg-surface transition-colors duration-400">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 flex items-center gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 h-px bg-line origin-left"
          />
          <motion.svg
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            width="20" height="28" viewBox="0 0 20 28" fill="none"
            className="shrink-0"
          >
            <path d="M10 2C15 7 16 14 10 26C4 14 5 7 10 2Z" stroke="var(--primary)" strokeWidth="1" fill="none" />
            <path d="M10 5V22" stroke="var(--primary)" strokeWidth="0.5" />
          </motion.svg>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 h-px bg-line origin-right"
          />
        </div>
      </div>
    );
  }

  if (variant === "botanical") {
    return (
      <div className="relative py-20 overflow-hidden bg-surface transition-colors duration-400">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 relative flex items-center justify-center">
          {/* sweeping leaves */}
          <motion.svg
            initial={{ opacity: 0, x: -60, rotate: -30 }}
            whileInView={{ opacity: 0.2, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            width="80" height="50" viewBox="0 0 80 50" fill="none"
            className="absolute left-[15%]"
          >
            <path d="M5 45C5 20 25 5 75 5C60 18 30 38 5 45Z" stroke="var(--primary)" strokeWidth="0.8" fill="var(--leaf-fill)" />
          </motion.svg>
          <motion.svg
            initial={{ opacity: 0, x: 60, rotate: 30 }}
            whileInView={{ opacity: 0.2, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            width="80" height="50" viewBox="0 0 80 50" fill="none"
            className="absolute right-[15%] scale-x-[-1]"
          >
            <path d="M5 45C5 20 25 5 75 5C60 18 30 38 5 45Z" stroke="var(--primary)" strokeWidth="0.8" fill="var(--leaf-fill)" />
          </motion.svg>

          {/* center dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
            className="w-2 h-2 rounded-full bg-primary"
          />
        </div>
      </div>
    );
  }

  // "leaves" variant
  return (
    <div className="relative py-16 overflow-hidden bg-surface transition-colors duration-400">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-center gap-4">
        {[...Array(3)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, y: 20, rotate: -15 + i * 15 }}
            whileInView={{ opacity: 0.18, y: 0, rotate: -10 + i * 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            width="16" height="24" viewBox="0 0 16 24" fill="none"
          >
            <path d="M8 1C12 5 13 12 8 23C3 12 4 5 8 1Z" fill="var(--leaf-fill)" stroke="var(--leaf-stroke)" strokeWidth="0.5" />
          </motion.svg>
        ))}
      </div>
    </div>
  );
}
