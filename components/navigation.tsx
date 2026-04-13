"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "home", href: "#home" },
  { label: "work", href: "#work" },
  { label: "designs", href: "#designs" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => l.label);
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-sm border-b-2 border-pink/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <a
          href="#home"
          className="font-[family-name:var(--font-pixel)] text-pink font-bold text-sm tracking-tight hover:text-pink-deep transition-colors"
        >
          {"<v/>"}
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`font-[family-name:var(--font-pixel)] text-xs transition-colors duration-200 ${
                activeSection === label
                  ? "text-pink"
                  : "text-muted hover:text-off-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
