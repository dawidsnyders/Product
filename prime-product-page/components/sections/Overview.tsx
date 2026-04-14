"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { KaminoStackedIcon } from "@/components/icons/KaminoIcon";

const valueProps = [
  {
    title: "What is PRIME?",
    body: "A yield-bearing token backed by short-term US HELOC warehouse lending. Delivers 8–9% APY from real homeowner interest payments — not token emissions, not trading fees, not speculation. 100% backed by US Treasury bills under SEC-registered custody.",
  },
  {
    title: "How does the yield work?",
    body: "T-bill base yield (4–5%) enhanced by warehouse spread (3–4%) earned during the ~42-day hold period before HELOCs exit to AAA-rated securitization. Yield is reflected in PRIME token value appreciation.",
  },
  {
    title: "Why Kamino?",
    body: "PRIME is the fastest-growing RWA in DeFi, with Kamino as its primary distribution partner. 90% of PRIME in circulation is deployed on Kamino. Kamino Multiply amplifies PRIME yield to 11–21% APY via positive carry against USDC, CASH, or PYUSD borrowing.",
  },
];

export function Overview() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Headline */}
        <div className="flex justify-between items-start mb-20">
          <ScrollReveal>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
              Real yield.
              <br />
              Established track record.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="hidden lg:block">
            <KaminoStackedIcon size={70} color="#000" />
          </ScrollReveal>
        </div>

        {/* Three columns */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {valueProps.map((prop) => (
            <StaggerItem
              key={prop.title}
              className="bg-[#C6F4FF] p-8"
            >
              <h3 className="text-lg font-bold mb-6 pl-4 border-l-[3px] border-black leading-tight">
                {prop.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#222]">
                {prop.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
