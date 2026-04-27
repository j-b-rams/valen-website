"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { ScatteredDots } from "./scattered-dots";
import { TiltCard } from "./tilt-card";

interface Certification {
  name: string;
  issuer: string;
  icon: string;
}

const certifications: Certification[] = [
  { name: "adobe indesign", issuer: "adobe", icon: "Id" },
  { name: "adobe photoshop", issuer: "adobe", icon: "Ps" },
  { name: "adobe after effects", issuer: "adobe", icon: "Ae" },
  { name: "adobe illustrator", issuer: "adobe", icon: "Ai" },
  { name: "canva", issuer: "canva", icon: "Cv" },
  { name: "blender", issuer: "blender", icon: "Bl" },
  { name: "ibis paint", issuer: "ibs", icon: "ibs" },
  { name: "quickbooks", issuer: "intuit", icon: "Qb" },
  { name: "microsoft excel", issuer: "microsoft", icon: "Ex" },
];

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const cardPop = {
  hidden: { opacity: 0, y: 40, scale: 0.85, rotateX: -15 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Certifications() {
  return (
    <SectionWrapper id="certifications" className="relative">
      <ScatteredDots />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div
          variants={slideRight}
          className="h-[3px] w-12 bg-fern rounded-full mb-6 shadow-glow"
        />
        <motion.h2
          variants={slideUp}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-ink italic tracking-tight mb-3 transition-colors duration-400 text-shadow-sm"
        >
          certifications
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="font-[family-name:var(--font-accent)] text-ink-muted text-base max-w-2xl mb-14 leading-relaxed font-light transition-colors duration-400"
        >
          tools i know inside and out.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        style={{ perspective: "1000px" }}
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            custom={i}
            variants={cardPop}
            style={{ transformStyle: "preserve-3d" }}
          >
            <TiltCard tiltAmount={12} className="group cursor-default h-full">
              <div className="p-6 md:p-8 bg-surface-card border border-line rounded-sm hover:border-primary-subtle shadow-card hover:shadow-card-hover transition-all duration-300 text-center relative overflow-hidden h-full">
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-faded to-transparent" />

                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -5, 0],
                    scale: [1, 1.15, 1],
                    transition: { duration: 0.5 },
                  }}
                  className="relative z-10 w-14 h-14 mx-auto mb-5 rounded-sm bg-primary-faded flex items-center justify-center group-hover:bg-primary shadow-soft group-hover:shadow-elevated transition-all duration-300"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <span className="font-[family-name:var(--font-display)] text-lg text-primary group-hover:text-surface font-bold italic transition-colors duration-300">
                    {cert.icon}
                  </span>
                </motion.div>
                <h3
                  className="relative z-10 font-[family-name:var(--font-display)] text-sm text-ink italic mb-2 transition-colors duration-400"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {cert.name}
                </h3>
                <p
                  className="relative z-10 text-[11px] text-ink-faint tracking-[0.15em] transition-colors duration-400"
                  style={{ transform: "translateZ(10px)" }}
                >
                  certified · {cert.issuer}
                </p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      {/* footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-24 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-400 shadow-inner-soft"
      >
        <p className="text-[11px] text-ink-faint tracking-[0.1em]">
          made with care + good taste
        </p>
        <p className="text-[11px] text-ink-faint tracking-[0.1em]">
          <span className="text-primary italic font-[family-name:var(--font-display)] font-bold">v</span>{" "}
          — 2026
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
