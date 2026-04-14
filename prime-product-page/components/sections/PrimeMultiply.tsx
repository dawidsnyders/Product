"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { leverageYieldData, calculateYield } from "@/data/multiply-data";

export function PrimeMultiply() {
  const [leverage, setLeverage] = useState(5);
  const yieldData = calculateYield(leverage);

  const barWidth = Math.min((yieldData.apy / 28) * 100, 100);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
          <ScrollReveal>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
              PRIME
              <br />
              Multiply
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="max-w-[440px]">
            <p className="text-base font-bold mb-2">Positive Carry</p>
            <p className="text-[15px] leading-relaxed text-[#444]">
              Amplify PRIME yield through positive carry — the rational spread
              between collateral yield and borrow cost. 86% of all PRIME on
              Kamino flows through Multiply.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: How it works + Calculator */}
          <div className="lg:w-[45%]">
            <ScrollReveal>
              <div className="bg-[#C6F4FF] p-8 mb-8">
                <h3 className="text-base font-bold mb-5">How it Works</h3>
                <div className="space-y-4 text-[15px] leading-relaxed text-[#222]">
                  <div>
                    <strong>1.</strong> Deposit PRIME as collateral (earning ~8%
                    base yield)
                  </div>
                  <div>
                    <strong>2.</strong> Borrow stablecoins against it (paying
                    ~5–7%)
                  </div>
                  <div>
                    <strong>3.</strong> Buy more PRIME with borrowed stablecoins
                  </div>
                  <div>
                    <strong>4.</strong> Repeat — up to 9x in a single transaction
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm font-bold text-[#222] mb-2">
                86% of all PRIME on Kamino flows through Multiply.
              </p>
              <p className="text-sm text-[#888]">
                Borrow utilization capped at 90%. Loop remains profitable up to
                97% utilization.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Interactive calculator */}
          <div className="flex-1">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#F7F7F5] p-8">
                <h3 className="text-base font-bold mb-8">
                  Leverage Calculator
                </h3>

                {/* Leverage slider */}
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-[#666]">Leverage</span>
                    <span className="text-2xl font-black">{leverage}x</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={9}
                    step={1}
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    className="w-full"
                    aria-label="Leverage multiplier"
                  />
                  <div className="flex justify-between text-xs text-[#999] mt-2">
                    <span>1x</span>
                    <span>3x</span>
                    <span>5x</span>
                    <span>7x</span>
                    <span>9x</span>
                  </div>
                </div>

                {/* Yield output */}
                <div className="space-y-6">
                  {/* APY bar */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#666]">Net APY</span>
                      <span className="text-xl font-black">
                        {yieldData.apy.toFixed(2)}%
                      </span>
                    </div>
                    <div className="w-full h-10 bg-[#E0E0E0] relative">
                      <motion.div
                        className="h-full bg-black"
                        animate={{ width: `${barWidth}%` }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4">
                      <div className="text-xs text-[#888] mb-1">
                        Base PRIME Yield
                      </div>
                      <div className="text-lg font-bold">8.00%</div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="text-xs text-[#888] mb-1">
                        Borrow Cost
                      </div>
                      <div className="text-lg font-bold">
                        {leverage > 1
                          ? `${yieldData.borrowCost.toFixed(1)}%`
                          : "—"}
                      </div>
                    </div>
                  </div>

                  {/* Reference points */}
                  <div className="border-t border-[#E0E0E0] pt-4">
                    <div className="text-xs text-[#888] mb-3 uppercase tracking-wider font-medium">
                      Reference Points
                    </div>
                    <div className="space-y-2">
                      {leverageYieldData
                        .filter((d) => [1, 3, 5, 8].includes(d.leverage))
                        .map((d) => (
                          <div
                            key={d.leverage}
                            className={`flex justify-between text-sm ${
                              d.leverage === leverage
                                ? "font-bold text-black"
                                : "text-[#666]"
                            }`}
                          >
                            <span>{d.label}</span>
                            <span>{d.apy}%</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
