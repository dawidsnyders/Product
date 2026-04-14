// Leverage yield data for the interactive calculator
export const leverageYieldData = [
  { leverage: 1, label: "PRIME (1x)", apy: 8.0, borrowCost: 0, netYield: 8.0 },
  { leverage: 2, label: "Multiply 2x", apy: 10.2, borrowCost: 5.8, netYield: 10.2 },
  { leverage: 3, label: "Multiply 3x", apy: 12.45, borrowCost: 5.8, netYield: 12.45 },
  { leverage: 4, label: "Multiply 4x", apy: 14.5, borrowCost: 6.0, netYield: 14.5 },
  { leverage: 5, label: "Multiply 5x", apy: 16.64, borrowCost: 6.2, netYield: 16.64 },
  { leverage: 6, label: "Multiply 6x", apy: 18.5, borrowCost: 6.3, netYield: 18.5 },
  { leverage: 7, label: "Multiply 7x", apy: 20.8, borrowCost: 6.5, netYield: 20.8 },
  { leverage: 8, label: "Multiply 8x", apy: 23.14, borrowCost: 6.7, netYield: 23.14 },
  { leverage: 9, label: "Multiply 9x", apy: 25.0, borrowCost: 7.0, netYield: 25.0 },
];

// Calculate yield at any leverage level (interpolated)
export function calculateYield(leverage: number): {
  apy: number;
  borrowCost: number;
  netYield: number;
} {
  const baseYield = 8.0;
  const baseBorrowCost = 5.8;
  const borrowCostIncrease = 0.15; // per leverage level

  if (leverage <= 1) return { apy: baseYield, borrowCost: 0, netYield: baseYield };

  const borrowCost = baseBorrowCost + (leverage - 2) * borrowCostIncrease;
  const spread = baseYield - borrowCost;
  const netYield = baseYield + spread * (leverage - 1);

  return {
    apy: Math.round(netYield * 100) / 100,
    borrowCost: Math.round(borrowCost * 100) / 100,
    netYield: Math.round(netYield * 100) / 100,
  };
}
