"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GetInTouch() {
  return (
    <section className="py-32 bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          {/* Left: Headline */}
          <ScrollReveal className="lg:w-[45%]">
            <h2 className="text-[clamp(3.5rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.04em] text-white">
              Get in
              <br />
              Touch
            </h2>
          </ScrollReveal>

          {/* Right: Contact info + CTAs */}
          <ScrollReveal delay={0.15} className="flex-1 max-w-[500px]">
            <div className="mb-10">
              <h3 className="text-sm uppercase tracking-[0.1em] text-white/40 font-medium mb-8">
                PRIME Enquiries
              </h3>

              <div className="mb-8">
                <div className="text-xl font-bold text-white mb-1">
                  Cheryl Chan
                </div>
                <div className="text-[15px] text-white/50 mb-4">
                  Head of Strategy, Kamino Finance
                </div>
                <div className="space-y-2">
                  <a
                    href="mailto:cheryl@kamino-foundation.com"
                    className="block text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    cheryl@kamino-foundation.com
                  </a>
                  <div className="text-[15px] text-white/70">+6592982416</div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <a
                href="mailto:cheryl@kamino-foundation.com?subject=PRIME%20Enquiry"
                className="flex items-center justify-center w-full py-4 px-8 bg-white text-black font-bold text-[15px] hover:bg-[#C6F4FF] transition-colors"
              >
                Contact Us
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center py-3 px-6 border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors"
                >
                  Download Deck
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center py-3 px-6 border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors"
                >
                  Product Explainer
                </a>
              </div>

              <a
                href="https://app.kamino.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-8 border border-white/10 text-white/50 text-sm font-medium hover:border-white/25 hover:text-white/70 transition-colors"
              >
                View on Kamino &rarr;
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
