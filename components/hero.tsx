"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LeafParticles } from "./leaf-particles";
import { ScatteredDots } from "./scattered-dots";

function BackdropLeaf({
  className,
  d,
  delay,
}: {
  className: string;
  d: string;
  delay: number;
}) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute pointer-events-none drop-shadow-icon ${className}`}
      viewBox="0 0 120 160"
      fill="none"
    >
      <path
        d={d}
        fill="var(--leaf-fill)"
        stroke="var(--leaf-stroke)"
        strokeWidth="0.5"
      />
    </motion.svg>
  );
}

const backdropLeaves = [
  {
    className: "w-44 h-56 -top-4 right-[5%] md:right-[15%] rotate-[25deg] sway",
    d: "M60 5C85 30 90 80 60 155C30 80 35 30 60 5Z",
    delay: 0.6,
  },
  {
    className: "w-36 h-48 top-[10%] right-[0%] md:right-[8%] -rotate-[15deg] sway [animation-delay:1s]",
    d: "M10 130C10 50 40 10 110 10C90 50 50 110 10 130Z",
    delay: 0.8,
  },
  {
    className: "w-32 h-40 top-[38%] left-[2%] md:left-[8%] rotate-[40deg] sway [animation-delay:2s]",
    d: "M60 8C90 30 95 85 70 145C35 120 25 55 60 8Z",
    delay: 1.0,
  },
  {
    className: "w-28 h-36 bottom-[22%] right-[3%] md:right-[20%] -rotate-[35deg] sway [animation-delay:0.5s]",
    d: "M60 5C85 30 90 80 60 155C30 80 35 30 60 5Z",
    delay: 1.2,
  },
  {
    className: "w-20 h-28 top-[55%] right-[35%] rotate-[60deg] sway [animation-delay:1.5s]",
    d: "M10 130C10 50 40 10 110 10C90 50 50 110 10 130Z",
    delay: 1.4,
  },
];

const nameChars = "valen".split("");

const charVariant = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: 0.4 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const decoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const decoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-surface transition-colors duration-400"
    >
      <LeafParticles />
      <ScatteredDots />

      <motion.div style={{ y: decoY, opacity: decoOpacity }}>
        {backdropLeaves.map((leaf, i) => (
          <BackdropLeaf key={i} {...leaf} />
        ))}
      </motion.div>

      <motion.div style={{ y: decoY, opacity: decoOpacity }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.0 }}
          className="absolute top-[18%] right-[12%] w-20 h-20 rounded-full border border-line-strong spin-slow pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
          className="absolute top-[60%] left-[6%] w-3 h-3 rounded-full bg-primary-soft pulse-soft pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-[15%] right-[30%] w-6 h-6 rounded-full border border-line drift pointer-events-none"
        />
      </motion.div>

      <div className="w-full max-w-[1200px] mx-auto relative z-20">
        {/* accent line */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[3px] w-12 bg-primary mb-10 rounded-full shadow-glow"
        />

        {/* character-by-character name reveal */}
        <motion.div style={{ y: nameY }}>
          <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-9xl tracking-tighter leading-[0.95] italic text-ink transition-colors duration-400 flex overflow-hidden text-shadow-hero">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="show"
                variants={charVariant}
                className="inline-block"
                style={{ perspective: "400px" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* tagline */}
        <motion.div style={{ y: taglineY }} className="mt-8 max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-accent)] text-lg md:text-xl text-ink-muted leading-relaxed font-light transition-colors duration-400"
          >
            i make things look good and feel right.
            <span className="text-primary font-normal transition-colors duration-400">
              {" "}currently designing
            </span>{" "}
            whatever catches my eye.
          </motion.p>
        </motion.div>

        {/* scroll prompt */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex items-center gap-5"
        >
          <motion.div
            animate={{ width: [0, 64] }}
            transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
            className="h-px bg-line-strong transition-colors duration-400"
          />
          <motion.span
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[11px] text-ink-faint tracking-[0.25em] transition-colors duration-400"
          >
            scroll
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
