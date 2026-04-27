"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

const links = [
  { label: "home", href: "#home" },
  { label: "work", href: "#work" },
  { label: "certifications", href: "#certifications" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

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
        scrolled ? "bg-surface-blur backdrop-blur-md border-b border-line shadow-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <a
          href="#home"
          className="font-[family-name:var(--font-display)] text-primary font-bold text-xl italic tracking-tighter hover:text-primary-bright transition-colors"
        >
          vgf
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`text-xs tracking-[0.15em] transition-colors duration-200 ${
                activeSection === label
                  ? "text-primary font-medium"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-line hover:border-primary-subtle shadow-soft hover:shadow-glow transition-all text-ink-muted hover:text-primary cursor-pointer"
            aria-label="toggle theme"
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
