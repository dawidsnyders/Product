import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { StatsGlance } from "@/components/sections/StatsGlance";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FigureSponsor } from "@/components/sections/FigureSponsor";
import { CollateralQuality } from "@/components/sections/CollateralQuality";
import { CreditPerformance } from "@/components/sections/CreditPerformance";
import { CapitalPreservation } from "@/components/sections/CapitalPreservation";
import { PrimeOnKamino } from "@/components/sections/PrimeOnKamino";
import { RiskAdjusted } from "@/components/sections/RiskAdjusted";
import { PrimeMultiply } from "@/components/sections/PrimeMultiply";
import { MultiplyPerformance } from "@/components/sections/MultiplyPerformance";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { GetInTouch } from "@/components/sections/GetInTouch";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <StatsGlance />
      <HowItWorks />
      <FigureSponsor />
      <CollateralQuality />
      <CreditPerformance />
      <CapitalPreservation />
      <PrimeOnKamino />
      <RiskAdjusted />
      <PrimeMultiply />
      <MultiplyPerformance />
      <TrustLogos />
      <GetInTouch />
      <Footer />
    </main>
  );
}
