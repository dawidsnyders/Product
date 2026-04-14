"use client";

import { motion } from "motion/react";
import { KaminoLogo } from "@/components/icons/KaminoIcon";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Kamino logo top-left */}
      <motion.div
        className="absolute top-10 left-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <KaminoLogo className="text-xl text-black" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-12 flex items-center min-h-screen">
        <div className="flex w-full items-center justify-between gap-16">
          {/* Left: Text */}
          <div className="max-w-[720px]">
            <motion.h1
              className="text-[clamp(3.5rem,7vw,6.5rem)] font-black leading-[0.92] tracking-[-0.04em] text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              PRIME
              <br />
              on Kamino
            </motion.h1>

            <motion.p
              className="mt-8 text-xl text-[#444] leading-relaxed max-w-[520px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Institutional-grade HELOC yield,
              <br />
              amplified on-chain.
            </motion.p>

            {/* Floating stats */}
            <motion.div
              className="mt-16 flex gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {[
                { value: "~8%", label: "APY" },
                { value: "$300M", label: "Market Cap" },
                { value: "744+", label: "Avg. FICO" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + i * 0.15 }}
                >
                  <div className="text-3xl font-black tracking-[-0.02em] text-black">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-[#999] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Ice-blue decorative block with Kamino pattern */}
          <motion.div
            className="hidden lg:flex w-[480px] h-[480px] bg-[#C6F4FF] items-center justify-center relative overflow-hidden flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Dot pattern overlay */}
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="opacity-20">
              {Array.from({ length: 10 }).map((_, row) =>
                Array.from({ length: 10 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={10 + col * 20}
                    cy={10 + row * 20}
                    r={3}
                    fill="#000"
                  />
                ))
              )}
            </svg>
            {/* Large "P" watermark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[280px] font-black text-white/30 leading-none select-none">
                P
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-[1px] h-8 bg-[#ccc]"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-xs text-[#999] tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
