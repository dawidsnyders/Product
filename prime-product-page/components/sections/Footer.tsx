"use client";

import { KaminoLogo } from "@/components/icons/KaminoIcon";

export function Footer() {
  return (
    <footer className="bg-black text-white/40 py-16">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="mb-10">
          <h3 className="text-sm font-bold text-white/50 mb-5">Disclaimer</h3>
          <div className="text-sm leading-relaxed space-y-4 max-w-[640px]">
            <p>
              This presentation is for informational purposes only and does not
              constitute an offer to sell, a solicitation to buy, or a
              recommendation for any security, token, or financial instrument, nor
              does it constitute investment, legal, tax, or other professional
              advice.
            </p>
            <p>
              The information contained herein is preliminary and subject to
              change without notice. Forward-looking statements involve known and
              unknown risks, uncertainties, and other factors that may cause
              actual results to differ materially from those expressed or implied.
            </p>
            <p>
              Past performance is not indicative of future results. Digital assets
              involve significant risks, including but not limited to market
              volatility, regulatory uncertainty, technological vulnerabilities,
              and potential loss of principal. Prospective participants should
              conduct their own due diligence and consult with qualified legal,
              tax, and financial advisors before making any decisions.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-between items-center">
          <KaminoLogo className="text-lg text-white/40" />
          <div className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Kamino Finance
          </div>
        </div>
      </div>
    </footer>
  );
}
