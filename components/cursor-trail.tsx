"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Trail {
  id: number;
  x: number;
  y: number;
}

let trailId = 0;

export function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    let lastTime = 0;

    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 60) return;
      lastTime = now;

      const newTrail = { id: trailId++, x: e.clientX, y: e.clientY };
      setTrails((prev) => [...prev.slice(-8), newTrail]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[150]">
      <AnimatePresence>
        {trails.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{ left: t.x - 4, top: t.y - 4 }}
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path
                d="M4 0.5C6 2.5 6.5 6 4 11.5C1.5 6 2 2.5 4 0.5Z"
                fill="var(--primary)"
                opacity={0.3 + (i / trails.length) * 0.3}
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
