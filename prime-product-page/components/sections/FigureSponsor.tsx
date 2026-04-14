"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { trackRecord } from "@/data/prime-stats";

const figureStats = [
  { value: "$505M+", label: "FY2025 Revenue" },
  { value: "$132M", label: "FY2025 Net Income" },
  { value: "$1.1B", label: "Cash Position" },
  { value: "$22B+", label: "Total Originated" },
];

export function FigureSponsor() {
  return (
    <section className="py-32 bg-[#F7F7F5]">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-5xl font-black tracking-[-0.04em] uppercase" style={{ letterSpacing: "0.15em" }}>
              FIGURE
            </span>
          </div>
          <p className="text-lg text-[#666] mb-16">
            Nasdaq: FIGR &mdash; Largest non-bank HELOC originator in the US
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Stats grid */}
          <div className="lg:w-[45%]">
            <StaggerContainer
              className="grid grid-cols-2 gap-[2px] mb-8"
              staggerDelay={0.1}
            >
              {figureStats.map((stat) => (
                <StaggerItem key={stat.label} className="bg-[#C6F4FF] p-6">
                  <div className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-black tracking-[-0.02em] mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm text-[#444]">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.4}>
              <p className="text-sm text-[#888] leading-relaxed">
                IPO underwritten by Goldman Sachs, Jefferies, BofA Securities.
                <br />
                Securitization partners: Goldman Sachs, JPMorgan, Barclays.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Track record */}
          <ScrollReveal delay={0.2} className="flex-1">
            <div className="bg-[#C6F4FF] p-8 h-full">
              <h3 className="text-base font-bold mb-6">
                7-Year Through-Cycle Track Record
              </h3>
              <div className="space-y-5">
                {trackRecord.map((item, i) => (
                  <div key={i} className="text-[15px] leading-relaxed text-[#222]">
                    <span className="font-bold">
                      {item.period} ({item.label}):
                    </span>{" "}
                    {item.detail}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
