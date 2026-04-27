"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className={`min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 bg-surface transition-colors duration-400 ${className}`}
    >
      <div className="w-full max-w-[1200px] mx-auto">{children}</div>
    </motion.section>
  );
}
