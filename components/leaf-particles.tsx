"use client";

import { motion } from "framer-motion";

function LeafSvg({ size, variant }: { size: number; variant: number }) {
  if (variant === 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 32" fill="none">
        <path
          d="M12 1C17 7 18 16 12 30C6 16 7 7 12 1Z"
          fill="var(--leaf-fill)"
          stroke="var(--leaf-stroke)"
          strokeWidth="0.8"
        />
        <path d="M12 4V26" stroke="var(--leaf-stroke)" strokeWidth="0.5" />
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg width={size} height={size * 0.8} viewBox="0 0 28 22" fill="none">
        <path
          d="M2 18C2 8 10 2 26 2C22 10 14 18 2 18Z"
          fill="var(--leaf-fill)"
          stroke="var(--leaf-stroke)"
          strokeWidth="0.8"
        />
        <path d="M4 16Q14 10 24 3" stroke="var(--leaf-stroke)" strokeWidth="0.5" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 20 28" fill="none">
      <path
        d="M10 2C16 6 18 14 14 24C8 22 4 14 10 2Z"
        fill="var(--leaf-fill)"
        stroke="var(--leaf-stroke)"
        strokeWidth="0.8"
      />
      <path d="M10 4Q12 14 13 22" stroke="var(--leaf-stroke)" strokeWidth="0.5" />
    </svg>
  );
}

const LEAVES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: 5 + ((i * 7.3) % 90),
  size: 14 + (i % 4) * 6,
  variant: i % 3,
  startY: -(10 + (i % 5) * 8),
  delay: i * 1.8,
  duration: 16 + (i % 5) * 4,
  rotateStart: (i * 37) % 360,
  swayAmount: 20 + (i % 3) * 15,
}));

export function LeafParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {LEAVES.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ left: `${leaf.x}%`, top: `${leaf.startY}%` }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, leaf.swayAmount, -leaf.swayAmount * 0.6, leaf.swayAmount * 0.4, 0],
            rotate: [leaf.rotateStart, leaf.rotateStart + 180, leaf.rotateStart + 360],
          }}
          transition={{
            y: {
              duration: leaf.duration,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay,
            },
            x: {
              duration: leaf.duration * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: leaf.delay,
            },
            rotate: {
              duration: leaf.duration * 1.2,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay,
            },
          }}
        >
          <LeafSvg size={leaf.size} variant={leaf.variant} />
        </motion.div>
      ))}
    </div>
  );
}
