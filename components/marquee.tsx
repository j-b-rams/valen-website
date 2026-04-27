"use client";

import { motion } from "framer-motion";

export function Marquee({ words, direction = "left" }: { words: string[]; direction?: "left" | "right" }) {
  const text = words.join(" ✦ ") + " ✦ ";
  const repeated = text.repeat(4);

  return (
    <div className="overflow-hidden py-6 bg-surface transition-colors duration-400 border-y border-line">
      <motion.div
        animate={{ x: direction === "left" ? [0, "-50%"] : ["-50%", 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap"
      >
        <span className="font-[family-name:var(--font-accent)] text-sm md:text-base text-ink-faint font-light tracking-[0.15em] transition-colors duration-400">
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}
