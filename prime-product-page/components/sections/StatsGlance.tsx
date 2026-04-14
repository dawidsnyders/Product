"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: "~8%", label: "Underlying APY", sublabel: "From HELOC warehouse lending" },
  { value: "$300M", label: "Market Cap on Solana", sublabel: "" },
  { value: "744+", label: "Weighted Average FICO Score", sublabel: "" },
  { value: "~42", label: "Day Average Hold Period", sublabel: "Before securitization exit" },
  { value: "<1.75%", label: "Peak Severe Delinquency", sublabel: "All vintages (2019–2025)" },
  { value: "7.1/10", label: "Independent Risk Rating (A)", sublabel: "Allez Labs" },
];

export function StatsGlance() {
  return (
    <section className="py-32 bg-[#F7F7F5]">
      <div className="max-w-[1400px] mx-auto px-12">
        <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-6">
          PRIME at a glance.
        </h2>
        <p className="text-lg text-[#555] max-w-[700px] leading-relaxed mb-16">
          PRIME replaces Wall Street warehouse lenders on-chain — a structurally
          short-duration exposure to high-quality US consumer credit with T-bill
          capital preservation and full DeFi composability.
        </p>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]"
          staggerDelay={0.1}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="bg-[#C6F4FF] p-8">
              <div className="text-[clamp(2rem,3.5vw,2.8rem)] font-black tracking-[-0.02em] leading-tight mb-3">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-[15px] font-medium text-[#222]">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-sm text-[#888] mt-1">{stat.sublabel}</div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
