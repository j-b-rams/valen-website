"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { ScatteredDots } from "./scattered-dots";
import { TiltCard } from "./tilt-card";
import { Magnetic } from "./magnetic";

interface Role {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  link?: { label: string; href: string };
}

const roles: Role[] = [
  {
    title: "founder & designer",
    company: "valyn",
    period: "2024 — present",
    description:
      "designing & creating designs that feel like home. building a brand rooted in warmth, intention, and making beautiful things for people who care about the details.",
    tags: ["brand identity", "creative direction", "design"],
    link: { label: "visit valyn →", href: "https://valyn.com" },
  },
  {
    title: "human resources rep",
    company: "jes",
    period: "2023 — present",
    description:
      "managing full-cycle staffing for hotels, restaurants, and resorts. sourcing and placing candidates across hospitality roles, coordinating interviews, handling onboarding, and building relationships with hiring managers to keep operations fully staffed and running smooth.",
    tags: ["staffing", "hospitality", "recruiting", "onboarding"],
  },
  {
    title: "graphic designer",
    company: "freelancing / aps",
    period: "2022 — present",
    description:
      "designing scroll-stopping graphics for social media campaigns that drive engagement and grow audiences. creating branded content across instagram, tiktok, and facebook — from story templates and carousel posts to promotional banners and seasonal campaigns.",
    tags: ["social media", "content design", "branding", "visual identity"],
  },
  {
    title: "accountant",
    company: "freelancing / aps",
    period: "2022 — present",
    description:
      "handling bookkeeping, financial reporting, and tax prep for small businesses. keeping the numbers clean and organized so clients can focus on running their business.",
    tags: ["bookkeeping", "tax prep", "quickbooks", "financial reporting"],
  },
];

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const flip3D = {
  hidden: { opacity: 0, rotateY: -25, x: -30 },
  show: { opacity: 1, rotateY: 0, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = [slideRight, flip3D, slideLeft, slideUp];

const tagPop = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, type: "spring", stiffness: 400, damping: 22 } },
};

export function Work() {
  return (
    <SectionWrapper id="work" className="relative">
      <ScatteredDots />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div
          variants={slideRight}
          className="h-[3px] w-12 bg-primary rounded-full mb-6 shadow-glow"
        />
        <motion.h2
          variants={slideUp}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-ink italic tracking-tight mb-3 transition-colors duration-400 text-shadow-sm"
        >
          where i&apos;ve been
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="font-[family-name:var(--font-accent)] text-ink-muted text-base max-w-2xl mb-14 leading-relaxed font-light transition-colors duration-400"
        >
          the journey so far and what i&apos;ve built along the way.
        </motion.p>
      </motion.div>

      <div className="space-y-5" style={{ perspective: "1200px" }}>
        {roles.map((role, i) => (
          <motion.div
            key={role.title + role.company}
            initial={cardVariants[i % cardVariants.length].hidden}
            whileInView={cardVariants[i % cardVariants.length].show}
            viewport={{ once: true, margin: "-40px" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <TiltCard tiltAmount={6} className="group">
              <div className="relative p-6 md:p-8 bg-surface-card border border-line rounded-sm hover:border-primary-subtle shadow-card hover:shadow-card-hover transition-all duration-300">
                <motion.div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-sm"
                  style={{ backgroundColor: "var(--primary)" }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3
                    className="font-[family-name:var(--font-display)] text-base text-ink group-hover:text-primary transition-colors italic"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {role.title}
                  </h3>
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[11px] text-ink-faint tracking-[0.1em]"
                  >
                    {role.period}
                  </motion.span>
                </div>
                <p className="text-xs text-primary-soft mb-3 tracking-[0.1em]">
                  {role.company}
                </p>
                <p className="font-[family-name:var(--font-accent)] text-ink-muted text-sm leading-relaxed mb-5 font-light">
                  {role.description}
                </p>
                {role.link && (
                  <Magnetic strength={0.2}>
                    <a
                      href={role.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs text-primary hover:text-primary-bright font-medium tracking-[0.1em] mb-5 transition-colors"
                    >
                      {role.link.label}
                    </a>
                  </Magnetic>
                )}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
                  className="flex flex-wrap gap-2"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {role.tags.map((tag) => (
                    <Magnetic key={tag} strength={0.15}>
                      <motion.span
                        variants={tagPop}
                        className="text-[10px] tracking-[0.1em] px-3 py-1.5 border border-line rounded-full text-ink-muted hover:text-primary hover:border-primary-faint shadow-soft hover:shadow-glow transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    </Magnetic>
                  ))}
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
