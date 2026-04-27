"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glare?: boolean;
}

export function TiltCard({ children, className = "", tiltAmount = 10, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltAmount, -tiltAmount]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltAmount, tiltAmount]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), springConfig);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "800px",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(0)", transformStyle: "preserve-3d" }} className="relative">
        {children}
        {glare && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
              ),
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
