// Credit performance data: 180+DQ by yearly vintage
// Each vintage is an array of [month, delinquencyRate] pairs
export const vintageData: Record<string, { month: number; rate: number }[]> = {
  "2019": [
    { month: 1, rate: 0 }, { month: 5, rate: 0.02 }, { month: 10, rate: 0.08 },
    { month: 15, rate: 0.15 }, { month: 20, rate: 0.22 }, { month: 25, rate: 0.30 },
    { month: 30, rate: 0.36 }, { month: 35, rate: 0.40 }, { month: 40, rate: 0.44 },
    { month: 45, rate: 0.47 }, { month: 50, rate: 0.50 }, { month: 55, rate: 0.52 },
    { month: 60, rate: 0.54 }, { month: 65, rate: 0.56 }, { month: 70, rate: 0.58 },
    { month: 75, rate: 0.60 }, { month: 80, rate: 0.62 },
  ],
  "2020": [
    { month: 1, rate: 0 }, { month: 5, rate: 0.03 }, { month: 10, rate: 0.12 },
    { month: 15, rate: 0.28 }, { month: 20, rate: 0.45 }, { month: 25, rate: 0.58 },
    { month: 30, rate: 0.68 }, { month: 35, rate: 0.78 }, { month: 40, rate: 0.85 },
    { month: 45, rate: 0.90 }, { month: 50, rate: 0.95 }, { month: 55, rate: 0.98 },
    { month: 60, rate: 1.00 }, { month: 65, rate: 1.02 }, { month: 70, rate: 1.04 },
  ],
  "2021": [
    { month: 1, rate: 0 }, { month: 5, rate: 0.04 }, { month: 10, rate: 0.18 },
    { month: 15, rate: 0.42 }, { month: 20, rate: 0.65 }, { month: 25, rate: 0.88 },
    { month: 30, rate: 1.05 }, { month: 35, rate: 1.20 }, { month: 40, rate: 1.35 },
    { month: 45, rate: 1.48 }, { month: 50, rate: 1.58 }, { month: 55, rate: 1.65 },
    { month: 60, rate: 1.72 }, { month: 65, rate: 1.75 },
  ],
  "2022": [
    { month: 1, rate: 0 }, { month: 5, rate: 0.05 }, { month: 10, rate: 0.22 },
    { month: 15, rate: 0.48 }, { month: 20, rate: 0.72 }, { month: 25, rate: 0.95 },
    { month: 30, rate: 1.12 }, { month: 35, rate: 1.25 }, { month: 40, rate: 1.32 },
    { month: 45, rate: 1.35 }, { month: 50, rate: 1.30 }, { month: 55, rate: 1.25 },
  ],
  "2023": [
    { month: 1, rate: 0 }, { month: 5, rate: 0.04 }, { month: 10, rate: 0.15 },
    { month: 15, rate: 0.35 }, { month: 20, rate: 0.55 }, { month: 25, rate: 0.72 },
    { month: 30, rate: 0.85 }, { month: 35, rate: 0.95 }, { month: 40, rate: 1.00 },
  ],
  "2024": [
    { month: 1, rate: 0 }, { month: 5, rate: 0.03 }, { month: 10, rate: 0.12 },
    { month: 15, rate: 0.28 }, { month: 20, rate: 0.48 }, { month: 25, rate: 0.65 },
    { month: 30, rate: 0.80 }, { month: 35, rate: 0.92 }, { month: 40, rate: 1.00 },
  ],
  "2025": [
    { month: 1, rate: 0 }, { month: 3, rate: 0.01 }, { month: 5, rate: 0.02 },
    { month: 8, rate: 0.03 },
  ],
};

export const vintageColors: Record<string, string> = {
  "2019": "#EF4444", // red
  "2020": "#F97316", // orange
  "2021": "#22C55E", // green
  "2022": "#B8860B", // dark gold
  "2023": "#60A5FA", // blue
  "2024": "#818CF8", // indigo
  "2025": "#000000", // black
};
