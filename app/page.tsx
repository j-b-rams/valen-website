"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Certifications } from "@/components/designs";
import { LoadingScreen } from "@/components/loading-screen";
import { SectionDivider } from "@/components/section-divider";
import { Marquee } from "@/components/marquee";
import { CursorTrail } from "@/components/cursor-trail";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={handleLoadComplete} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative grain bg-surface min-h-screen"
      >
        <CursorTrail />
        <Navigation />
        <Hero />
        <SectionDivider variant="botanical" />
        <Work />
        <Marquee words={["indesign", "photoshop", "after effects", "illustrator", "canva", "blender", "ibis paint", "quickbooks", "excel"]} direction="right" />
        <SectionDivider variant="lines" />
        <Certifications />
      </motion.main>
    </>
  );
}
