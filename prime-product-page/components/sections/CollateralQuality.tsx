"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { borrowerProfile } from "@/data/prime-stats";

export function CollateralQuality() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Headline */}
          <div className="lg:w-[40%]">
            <ScrollReveal>
              <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
                Collateral
                <br />
                Quality
              </h2>
            </ScrollReveal>
          </div>

          {/* Right: Data table */}
          <div className="flex-1">
            <ScrollReveal delay={0.1}>
              <h3 className="text-base font-bold mb-6">Borrower Profile</h3>
            </ScrollReveal>

            <StaggerContainer className="divide-y divide-[#E5E5E5]" staggerDelay={0.06}>
              {borrowerProfile.map((item) => (
                <StaggerItem
                  key={item.label}
                  className="flex justify-between items-center py-4"
                >
                  <span className="text-[15px] text-[#444]">{item.label}</span>
                  <span className="text-[15px] font-bold text-black">
                    {item.value}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.6} className="mt-8">
              <p className="text-sm text-[#888] leading-relaxed">
                744+ FICO = ~60th percentile of US credit scores. Firmly prime —
                well above the subprime borrowers that drove 2008 losses.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
