"use client";

import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/ui/ScrollReveal";
import { safetyFeatures } from "@/data/prime-stats";
import { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3L4 7v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V7l-8-4z" />
    </svg>
  ),
  document: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  ),
  lock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  ),
  clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" />
    </svg>
  ),
};

export function CapitalPreservation() {
  return (
    <section className="py-32 bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
          <ScrollReveal>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em] text-white">
              Built for capital
              <br />
              preservation.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="max-w-[440px]">
            <p className="text-[15px] leading-relaxed text-white/50">
              Securitization exit consistently receives AAA ratings from S&P,
              Moody&apos;s, DBRS Morningstar, and KBRA. Risk manifests as yield
              volatility, not capital loss.
            </p>
          </ScrollReveal>
        </div>

        {/* Safety cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {safetyFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="border border-white/10 p-8 h-full hover:border-white/25 transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-white/60">
                  {icons[feature.icon]}
                </div>
                <h3 className="text-base font-bold mb-4 text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/45">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
