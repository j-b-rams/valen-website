"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";

interface Role {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

const roles: Role[] = [
  {
    title: "human resources rep",
    company: "company name",
    period: "2024 — present",
    description:
      "managing full-cycle staffing for hotels, restaurants, and resorts. sourcing and placing candidates across hospitality roles, coordinating interviews, handling onboarding, and building relationships with hiring managers to keep operations fully staffed and running smooth.",
    tags: ["staffing", "hospitality", "recruiting", "onboarding"],
  },
  {
    title: "graphic designer",
    company: "company name",
    period: "2024 — present",
    description:
      "designing scroll-stopping graphics for social media campaigns that drive engagement and grow audiences. creating branded content across instagram, tiktok, and facebook — from story templates and carousel posts to promotional banners and seasonal campaigns.",
    tags: ["social media", "content design", "branding", "visual identity"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Work() {
  return (
    <SectionWrapper id="work">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-pixel)] text-xs text-pink tracking-wider mb-4"
      >
        {"// work"}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-off-white mb-6"
      >
        quest log
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted text-base max-w-2xl mb-14 leading-relaxed"
      >
        where i&apos;ve been and what i&apos;ve built along the way.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-5"
      >
        {roles.map((role) => (
          <motion.div
            key={role.title + role.company}
            variants={item}
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            className="group relative p-6 md:p-8 bg-dark-card/60 border-2 border-dark-border/60 hover:border-pink/40 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
              <h3 className="font-[family-name:var(--font-pixel)] text-sm text-off-white group-hover:text-pink transition-colors">
                {role.title}
              </h3>
              <span className="font-[family-name:var(--font-pixel)] text-[10px] text-muted">
                {role.period}
              </span>
            </div>
            <p className="font-[family-name:var(--font-pixel)] text-[10px] text-pink mb-3">
              @ {role.company}
            </p>
            <p className="text-muted text-sm leading-relaxed mb-5">
              {role.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-[family-name:var(--font-pixel)] text-[10px] px-3 py-1.5 border border-dark-border/80 text-muted hover:text-pink hover:border-pink/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
