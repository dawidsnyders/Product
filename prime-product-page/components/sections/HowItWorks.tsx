"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Origination",
    node: "FIGURE → US BORROWERS",
    description:
      "Figure originates HELOCs to prime US borrowers — 744+ FICO, 62% CLTV, $709K average home value.",
  },
  {
    num: "02",
    title: "Collateral",
    node: "LICENSED ORIGINATORS → WAREHOUSE FACILITY",
    description:
      "Licensed originators post HELOCs as collateral into the warehouse facility at 90% LTV with full recourse.",
  },
  {
    num: "03",
    title: "Capital",
    node: "SOLANA DEFI USERS → PRIME TOKEN",
    description:
      "DeFi lenders provide capital via PRIME and earn ~8% yield from borrower interest payments.",
  },
  {
    num: "04",
    title: "Securitization",
    node: "AAA RATED SECURITIZATION",
    description:
      "Every ~42 days, HELOCs exit to AAA-rated securitization. Warehouse repaid, fresh loans cycle in.",
  },
  {
    num: "05",
    title: "Yield Bridge",
    node: "CHAINLINK CCIP → SOLANA",
    description:
      "Yield flows to Solana as the PRIME token via Chainlink CCIP bridge. Fully composable across DeFi.",
    highlight: true,
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.15, 0.75], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <ScrollReveal>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
              How PRIME
              <br />
              Works
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="max-w-[440px] hidden lg:block">
            <div className="text-base font-bold mb-2">~42 Day Exposure Window</div>
            <p className="text-[15px] leading-relaxed text-[#444]">
              PRIME lenders are exposed only to the warehouse window — not the
              25-year life of the HELOC. By the time a borrower makes their
              second payment, the loan has already been sold to institutional
              buyers.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps with animated line */}
        <div className="mt-20 flex gap-16">
          {/* Vertical progress line */}
          <div className="hidden lg:block relative w-[2px] flex-shrink-0 ml-4">
            <div className="absolute inset-0 bg-[#E5E5E5]" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-black origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Step cards */}
          <div className="flex-1 space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-8 items-start py-10 border-b border-[#E5E5E5] last:border-b-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {/* Step number */}
                <div
                  className={`text-4xl font-black w-16 flex-shrink-0 ${
                    step.highlight ? "text-[#C6F4FF]" : "text-[#E5E5E5]"
                  }`}
                >
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-black">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium tracking-[0.1em] uppercase text-[#999] mb-3">
                    {step.node}
                  </div>
                  <p
                    className={`text-base leading-relaxed ${
                      step.highlight ? "text-black font-medium" : "text-[#444]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Visual node indicator */}
                <div
                  className={`w-3 h-3 rounded-full flex-shrink-0 mt-2 ${
                    step.highlight ? "bg-[#C6F4FF]" : "bg-[#E5E5E5]"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
