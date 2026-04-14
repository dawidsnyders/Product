export const primeStats = {
  apy: "~8%",
  marketCap: "$300M",
  ficoScore: "744+",
  warehouseDays: "~42",
  delinquencyPeak: "<1.75%",
  riskRating: "7.1/10",
  riskGrade: "A",
  kaminoMarketSize: "$550M",
  totalBorrowed: "$230M",
  activeLoans: "3,219",
  badDebt: "Zero",
  figureRevenue: "$505M+",
  figureNetIncome: "$132M",
  figureCash: "$1.1B",
  figureTotalOriginated: "$22B+",
  momGrowth: "~45%",
  kaminoAudits: "18",
  kaminoVerifications: "3",
  kaminoLoansOriginated: "$17B+",
};

export const borrowerProfile = [
  { label: "Weighted Avg. FICO", value: "744–754" },
  { label: "Average Home Value", value: "$709,085" },
  { label: "Average Borrower Income", value: "$182K–$195K" },
  { label: "Combined LTV", value: "62–65%" },
  { label: "Debt-to-Income", value: "36.6%" },
  { label: "Weighted Avg. Coupon", value: "9.0–9.2%" },
  { label: "Average Loan Size", value: "~$90,000" },
  { label: "Loan Type", value: "Fixed-rate, fully amortizing" },
];

export const safetyFeatures = [
  {
    icon: "shield",
    title: "Overcollateralization & Auto-Markdown",
    description:
      "HELOCs valued at $1.03 enter at $1.00; max advance $0.90 (90% LTV). Any HELOC 30+ days delinquent is immediately marked to $0. At 93% LLTV breach, collateral is seized and auctioned. Full recourse to licensed originators.",
  },
  {
    icon: "document",
    title: "SEC 1940 Act Registration",
    description:
      "YLDS is the first SEC-registered yield-bearing stablecoin. Daily NAV mandated by SEC. Public prospectus. Independent directors. Contractual redemption rights enforceable in federal court.",
  },
  {
    icon: "lock",
    title: "Qualified Custody (UMB Bank)",
    description:
      "70-year-old Fed-regulated national bank. $70B+ assets under custody. Overseen by Federal Reserve and OCC. Segregated, bankruptcy-remote structures. Daily reconciliation.",
  },
  {
    icon: "clock",
    title: "Short Duration (~42 Days)",
    description:
      "Exposure rolls continuously through the warehouse window. By the second borrower payment (~day 60), the HELOC has already been securitized and exited PRIME. No long-duration credit risk.",
  },
];

export const trackRecord = [
  {
    period: "2020–2021",
    label: "COVID",
    detail: "Continued originations, <2% delinquencies. No capital losses.",
  },
  {
    period: "2022–2023",
    label: "Rate Hikes 0→5.25%",
    detail: "Some unprofitable quarters, zero capital losses to investors.",
  },
  {
    period: "2023",
    label: "Banking Crisis",
    detail: "Maintained securitization access throughout.",
  },
  {
    period: "H2 2025",
    label: "Scale",
    detail: "$946M in AAA-rated securitizations. 58% net margin.",
  },
  {
    period: "FY2025",
    label: "Growth",
    detail: "$8.4B marketplace volume (+63% YoY). Q4 volume $2.7B (+131% YoY).",
  },
];

export const trancheStructure = [
  {
    role: "Multiply (Junior)",
    risk: "First loss",
    yield: "11–23%",
    description: "Leveraged Multiply users take the junior position — first to absorb losses",
  },
  {
    role: "Stablecoin Lenders (Senior)",
    risk: "Protected by loopers",
    yield: "5–5.5%",
    description: "Stablecoin lenders sit senior, protected by the buffer that Multiply users provide",
  },
  {
    role: "PRIME Holders (Base)",
    risk: "Direct exposure",
    yield: "~8%",
    description: "Hold PRIME without leverage for direct exposure to warehouse yield",
  },
];
