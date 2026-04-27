"use client";

import { motion } from "framer-motion";

const shapes = [
  { x: "8%", y: "15%", type: "dot", color: "bg-primary", size: "w-1.5 h-1.5", delay: 0 },
  { x: "92%", y: "25%", type: "dot", color: "bg-fern", size: "w-1 h-1", delay: 0.2 },
  { x: "85%", y: "60%", type: "cross", color: "text-primary", size: "", delay: 0.4 },
  { x: "12%", y: "75%", type: "ring", color: "border-line-strong", size: "w-4 h-4", delay: 0.3 },
  { x: "50%", y: "8%", type: "dot", color: "bg-sage", size: "w-1 h-1", delay: 0.1 },
  { x: "75%", y: "85%", type: "dot", color: "bg-gold", size: "w-1.5 h-1.5", delay: 0.5 },
  { x: "20%", y: "45%", type: "cross", color: "text-ink-faint", size: "", delay: 0.6 },
  { x: "95%", y: "45%", type: "ring", color: "border-line", size: "w-3 h-3", delay: 0.35 },
];

export function ScatteredDots() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: s.delay,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="absolute"
          style={{ left: s.x, top: s.y }}
        >
          {s.type === "dot" && (
            <div className={`${s.size} rounded-full ${s.color} opacity-40`} />
          )}
          {s.type === "ring" && (
            <div className={`${s.size} rounded-full border ${s.color} opacity-30`} />
          )}
          {s.type === "cross" && (
            <span className={`text-[10px] ${s.color} opacity-30 select-none`}>+</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
