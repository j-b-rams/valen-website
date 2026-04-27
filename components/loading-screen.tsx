"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function LoadingLeaf({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
      animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 80 120"
      fill="none"
    >
      <path
        d="M40 5C58 22 62 58 40 115C18 58 22 22 40 5Z"
        stroke="var(--primary)"
        strokeWidth="0.6"
        fill="none"
      />
      <path d="M40 12V105" stroke="var(--primary)" strokeWidth="0.3" />
    </motion.svg>
  );
}

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2400;
    const interval = 30;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setProgress(Math.min(Math.round(eased * 100), 100));

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => onComplete(), 600);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      animate={progress >= 100 ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: progress >= 100 ? 0.3 : 0 }}
      className="fixed inset-0 z-[200] bg-surface flex flex-col items-center justify-center overflow-hidden transition-colors duration-400"
    >
      {/* decorative leaves */}
      <LoadingLeaf className="w-24 h-36 top-[8%] left-[10%] rotate-[-30deg]" delay={0.2} />
      <LoadingLeaf className="w-20 h-28 top-[15%] right-[12%] rotate-[20deg]" delay={0.4} />
      <LoadingLeaf className="w-16 h-24 bottom-[12%] left-[15%] rotate-[45deg]" delay={0.6} />
      <LoadingLeaf className="w-18 h-26 bottom-[18%] right-[10%] rotate-[-15deg]" delay={0.5} />

      {/* thin horizontal lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
        className="absolute top-[30%] left-[10%] right-[10%] h-px bg-line origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-[30%] left-[10%] right-[10%] h-px bg-line origin-right"
      />

      {/* main content */}
      <div className="relative flex flex-col items-center px-6">
        {/* small label above */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[10px] text-ink-faint tracking-[0.4em] uppercase mb-6"
        >
          portfolio
        </motion.p>

        {/* editorial name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-display)] text-7xl md:text-9xl italic text-ink tracking-tighter leading-none mb-2 transition-colors duration-400 text-shadow-hero"
        >
          valen
        </motion.h1>

        {/* thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="w-16 h-px bg-primary my-6 origin-center shadow-glow"
        />

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-[family-name:var(--font-accent)] text-sm text-ink-muted font-light tracking-wide mb-10 transition-colors duration-400"
        >
          designer · creator · dreamer
        </motion.p>

        {/* progress line */}
        <div className="w-32 h-px bg-line rounded-full overflow-hidden shadow-soft">
          <motion.div
            className="h-full bg-primary rounded-full origin-left"
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.05 }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.0 }}
          className="font-[family-name:var(--font-accent)] text-[11px] text-ink-faint tracking-[0.2em] mt-4 font-light transition-colors duration-400"
        >
          {progress < 100 ? `${progress}` : "✦"}
        </motion.p>
      </div>

      {/* bottom editorial detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
      >
        <div className="w-8 h-px bg-line-strong" />
        <span className="font-[family-name:var(--font-accent)] text-[10px] text-ink-faint tracking-[0.3em] font-light">
          2026
        </span>
        <div className="w-8 h-px bg-line-strong" />
      </motion.div>
    </motion.div>
  );
}
