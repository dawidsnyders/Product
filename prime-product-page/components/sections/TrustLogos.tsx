"use client";

import { motion } from "motion/react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { trustPartners, institutionalPartners } from "@/data/partners";

const stats = [
  { value: "$17B+", label: "Loans Originated" },
  { value: "18", label: "Security Audits" },
  { value: "3", label: "Formal Verifications" },
  { value: "Zero", label: "Bad Debt" },
];

function PartnerLogo({
  name,
  logo,
  subtitle,
}: {
  name: string;
  logo: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 group cursor-default"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-10 flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="h-8 w-auto max-w-[120px] object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const next = target.nextElementSibling as HTMLElement;
            if (next) next.style.display = "block";
          }}
        />
        <span className="hidden text-sm font-bold text-[#555] group-hover:text-[#222] transition-colors">
          {name}
        </span>
      </div>
      {subtitle && (
        <span className="text-[11px] text-[#aaa] text-center leading-tight">
          {subtitle}
        </span>
      )}
    </motion.div>
  );
}

export function TrustLogos() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        {/* Headline + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <ScrollReveal>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.03em]">
              Battle-tested.
              <br />
              Transparent.
              <br />
              Trusted.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6 lg:pt-4">
              <p className="text-[17px] leading-relaxed text-[#333]">
                Kamino is Solana&apos;s largest on-chain lending and risk
                infrastructure provider with an established operating record at
                scale. Fully open source with 18 independent security audits and
                multiple formal verifications.
              </p>
              <p className="text-[17px] leading-relaxed text-[#333]">
                Used by institutional participants including licensed exchanges,
                federally chartered digital asset banks, and publicly listed
                companies.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Institutional Partners */}
        <ScrollReveal className="mb-16">
          <div className="border-t border-[#E5E5E5] pt-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#999] uppercase mb-10 text-center">
              Institutional Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {institutionalPartners.map((partner) => (
                <PartnerLogo
                  key={partner.name}
                  name={partner.name}
                  logo={partner.logo}
                  subtitle={partner.role}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Platform Partners */}
        <ScrollReveal className="mb-20">
          <div className="border-t border-[#E5E5E5] pt-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#999] uppercase mb-10 text-center">
              Trusted By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {trustPartners.map((partner) => (
                <PartnerLogo
                  key={partner.name}
                  name={partner.name}
                  logo={partner.logo}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="bg-[#C6F4FF] p-8 text-center"
            >
              {stat.value === "Zero" ? (
                <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-none tracking-[-0.02em]">
                  Zero
                </span>
              ) : (
                <AnimatedCounter
                  value={stat.value}
                  className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-none tracking-[-0.02em]"
                />
              )}
              <p className="text-sm text-[#444] mt-3 font-medium">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
