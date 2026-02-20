'use client';

import { BorrowPair } from '@/data/mock-data';
import { LTVBar } from '@/components/ui/LTVBar';

interface BorrowingOverviewProps {
    pair: BorrowPair;
    currentPosition?: {
        loanId: number;
        collateralAmount: number;
        debtAmount: number;
        currentLTV: number;
        healthFactor: number;
    };
}

export function BorrowingOverview({ pair, currentPosition }: BorrowingOverviewProps) {
    return (
        <div className="card p-6">
            <h3 className="text-lg font-semibold mb-6">Borrowing Overview</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {/* Current APY */}
                <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">Borrow APY</div>
                    <div className="text-2xl font-bold text-[var(--kamino-green)]">
                        {pair.borrowAPY.toFixed(2)}%
                    </div>
                </div>

                {/* Max LTV */}
                <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">Max LTV</div>
                    <div className="text-2xl font-bold">
                        {pair.maxLTV}%
                    </div>
                </div>

                {/* Liquidation Threshold */}
                <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">Liq. Threshold</div>
                    <div className="text-2xl font-bold">
                        {(pair.maxLTV + 5)}%
                    </div>
                </div>

                {/* Available Liquidity */}
                <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">Available</div>
                    <div className="text-2xl font-bold">
                        ${(pair.availableLiquidity / 1_000_000).toFixed(1)}M
                    </div>
                </div>
            </div>

            {/* Current Position (if exists) */}
            {currentPosition && (
                <div className="pt-6 border-t border-[var(--border-primary)]">
                    <h4 className="text-sm font-medium text-[var(--text-muted)] mb-4">Your Position</h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
                        <div>
                            <div className="text-sm text-[var(--text-muted)] mb-1">Collateral</div>
                            <div className="text-lg font-semibold">
                                {currentPosition.collateralAmount.toLocaleString()} {pair.collateral.symbol}
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-[var(--text-muted)] mb-1">Borrowed</div>
                            <div className="text-lg font-semibold">
                                {currentPosition.debtAmount.toLocaleString()} {pair.debt.symbol}
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-[var(--text-muted)] mb-1">Current LTV</div>
                            <div className="text-lg font-semibold">
                                {currentPosition.currentLTV}%
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-[var(--text-muted)] mb-1">Health Factor</div>
                            <div className={`text-lg font-semibold ${currentPosition.healthFactor > 1.5 ? 'text-[var(--kamino-green)]' :
                                    currentPosition.healthFactor > 1.2 ? 'text-[var(--kamino-yellow)]' :
                                        'text-[var(--kamino-red)]'
                                }`}>
                                {currentPosition.healthFactor.toFixed(2)}
                            </div>
                        </div>
                    </div>

                    {/* LTV Bar */}
                    <LTVBar
                        currentLTV={currentPosition.currentLTV}
                        maxLTV={pair.maxLTV}
                        showLabels
                        size="lg"
                    />
                </div>
            )}
        </div>
    );
}
