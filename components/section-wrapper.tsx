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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className={`min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 ${className}`}
    >
      <div className="w-full max-w-[1200px] mx-auto">{children}</div>
    </motion.section>
  );
}
