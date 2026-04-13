"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";

interface DesignItem {
  title: string;
  category: string;
  gradient: string;
  accent: string;
}

const designs: DesignItem[] = [
  {
    title: "bloom identity",
    category: "branding",
    gradient: "from-pink/20 to-pink-deep/10",
    accent: "text-pink",
  },
  {
    title: "midnight collection",
    category: "illustration",
    gradient: "from-lavender/20 to-lavender/8",
    accent: "text-lavender",
  },
  {
    title: "sunroom editorial",
    category: "layout",
    gradient: "from-peach/20 to-peach/8",
    accent: "text-peach",
  },
  {
    title: "verde campaign",
    category: "art direction",
    gradient: "from-lime/12 to-mint/12",
    accent: "text-lime",
  },
  {
    title: "soft focus series",
    category: "photography",
    gradient: "from-pink-soft/20 to-lavender/10",
    accent: "text-pink-soft",
  },
  {
    title: "new wave brand",
    category: "branding",
    gradient: "from-mint/12 to-lime/8",
    accent: "text-mint",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Designs() {
  return (
    <SectionWrapper id="designs">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-pixel)] text-xs text-lavender tracking-wider mb-4"
      >
        {"// designs"}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-off-white mb-6"
      >
        inventory
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted text-base max-w-2xl mb-14 leading-relaxed"
      >
        a collection of projects, experiments, and things that felt right while
        making them.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {designs.map((d) => (
          <motion.div
            key={d.title}
            variants={item}
            whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
            className="group cursor-pointer"
          >
            <div
              className={`aspect-[4/3] bg-gradient-to-br ${d.gradient} border-2 border-dark-border/50 group-hover:border-pink/30 transition-all duration-300 flex items-end p-5 relative overflow-hidden`}
            >
              <div className="w-full relative z-10">
                <p
                  className={`font-[family-name:var(--font-pixel)] text-[10px] ${d.accent} mb-2 tracking-wider`}
                >
                  {d.category}
                </p>
                <h3 className="font-[family-name:var(--font-pixel)] text-xs text-off-white">
                  {d.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 pt-8 border-t-2 border-dark-border/30 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="font-[family-name:var(--font-pixel)] text-[10px] text-muted">
          made with care + a lot of pink
        </p>
        <p className="font-[family-name:var(--font-pixel)] text-[10px] text-muted">
          <span className="text-pink">v</span> — 2026
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
