"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { trancheStructure } from "@/data/prime-stats";

export function RiskAdjusted() {
  return (
    <section className="py-32 bg-[#F7F7F5]">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left */}
          <div className="lg:w-[40%]">
            <ScrollReveal>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em] mb-6">
                Risk-Adjusted
                <br />
                Opportunities
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-[15px] leading-relaxed text-[#444] max-w-[400px]">
                <p className="mb-4">
                  <strong>Tranche Structure</strong>
                </p>
                <p>
                  Kamino&apos;s PRIME market naturally splits into tranches:
                  leveraged Multiply users take the junior position (first to absorb
                  losses), while stablecoin lenders sit senior (protected by the
                  buffer that Multiply users provide).
                </p>
                <p className="mt-4 text-[#888]">
                  This self-selecting dynamic means higher risk takers provide a
                  cushion for more conservative participants.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Tranche cards */}
          <div className="flex-1">
            <StaggerContainer className="space-y-[2px]" staggerDelay={0.12}>
              {trancheStructure.map((tranche) => (
                <StaggerItem key={tranche.role}>
                  <div className="bg-[#C6F4FF] p-8 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-lg font-bold mb-1">{tranche.role}</div>
                      <div className="text-sm text-[#666]">{tranche.risk}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black tracking-[-0.02em]">
                        {tranche.yield}
                      </div>
                      <div className="text-xs text-[#888]">Annualized Return</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
