"use client";

import { motion } from "framer-motion";

function PixelHeart({ className }: { className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1.0 + Math.random() * 0.8 }}
      className={`absolute pointer-events-none ${className}`}
    >
      <div className="pixel-heart float" />
    </motion.div>
  );
}

function PixelStar({ className }: { className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1.2 + Math.random() * 0.6 }}
      className={`absolute pointer-events-none ${className}`}
    >
      <div className="pixel-star sparkle" />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* pixel decorations */}
      <PixelHeart className="top-[18%] right-[12%] scale-150" />
      <PixelHeart className="top-[65%] right-[20%] scale-100 [animation-delay:1s]" />
      <PixelHeart className="bottom-[25%] left-[8%] scale-125 [animation-delay:0.5s]" />
      <PixelStar className="top-[25%] right-[30%]" />
      <PixelStar className="top-[50%] left-[15%] [animation-delay:0.7s]" />
      <PixelStar className="bottom-[35%] right-[8%] [animation-delay:1.4s]" />

      <div className="w-full max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-[family-name:var(--font-pixel)] text-xs text-lime mb-8 tracking-wider"
          >
            {">"} new game+
          </motion.p>

          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block text-pink"
            >
              valen
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 max-w-md"
          >
            <p className="text-base md:text-lg text-muted-light leading-relaxed">
              i make things look good and feel right.
              <span className="text-lime"> currently designing</span> whatever
              catches my eye.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-14 flex items-center gap-3"
          >
            <span className="font-[family-name:var(--font-pixel)] text-[10px] text-pink blink">
              &gt;
            </span>
            <span className="font-[family-name:var(--font-pixel)] text-[10px] text-muted tracking-wider">
              scroll to continue
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
