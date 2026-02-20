'use client';

import { use } from 'react';
import Link from 'next/link';
import { BORROW_PAIRS, getFixedRateTerms } from '@/data/mock-data';
import { TokenPair } from '@/components/ui/TokenPair';
import { Badge } from '@/components/ui/Badge';
import { LTVBar } from '@/components/ui/LTVBar';
import { BorrowingOverview } from '@/components/pair-detail/BorrowingOverview';
import { AvailableLiquidity } from '@/components/pair-detail/AvailableLiquidity';
import { ManagePositionForm } from '@/components/forms/ManagePositionForm';
import { LoanSelector } from '@/components/multi-loan/LoanSelector';

interface PageProps {
    params: Promise<{ pairId: string }>;
}

export default function PairDetailPage({ params }: PageProps) {
    const { pairId } = use(params);
    const pair = BORROW_PAIRS.find(p => p.id === pairId);
    const fixedTerms = pair ? getFixedRateTerms(pairId) : [];

    if (!pair) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="text-center py-20">
                    <h2 className="text-xl font-semibold mb-2">Pair not found</h2>
                    <Link href="/borrow" className="text-[var(--kamino-blue)] hover:underline">
                        Back to Borrow
                    </Link>
                </div>
            </div>
        );
    }

    const hasPosition = pair.yourPosition && pair.yourPosition.length > 0;

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
                <Link href="/borrow" className="text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                    Borrow
                </Link>
                <span className="mx-2 text-[var(--text-muted)]">/</span>
                <span className="text-[var(--text-primary)]">
                    {pair.collateral.symbol} → {pair.debt.symbol}
                </span>
            </nav>

            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <TokenPair
                        collateral={pair.collateral}
                        debt={pair.debt}
                        size="lg"
                    />
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="text-[var(--text-secondary)]">{pair.market}</span>
                    {pair.hasFixedRates && (
                        <Badge variant="fixed">Fixed Rates Available</Badge>
                    )}
                </div>

                {/* Loan Selector - only if has positions */}
                {hasPosition && (
                    <LoanSelector
                        loans={pair.yourPosition!}
                        collateralSymbol={pair.collateral.symbol}
                        debtSymbol={pair.debt.symbol}
                    />
                )}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Overview */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Borrowing Overview */}
                    <BorrowingOverview
                        pair={pair}
                        currentPosition={hasPosition ? pair.yourPosition![0] : undefined}
                    />

                    {/* Available Liquidity for Fixed Rates */}
                    {pair.hasFixedRates && (
                        <AvailableLiquidity terms={fixedTerms} />
                    )}

                    {/* Rewards Overview */}
                    {pair.incentiveAPR && (
                        <div className="card p-6">
                            <h3 className="text-lg font-semibold mb-4">Rewards Overview</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--kamino-purple)]/20 flex items-center justify-center">
                                    🎁
                                </div>
                                <div>
                                    <div className="font-medium">Incentive APR</div>
                                    <div className="text-[var(--kamino-purple)] text-lg font-semibold">
                                        +{pair.incentiveAPR}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column - Position Form */}
                <div className="lg:col-span-1">
                    <ManagePositionForm
                        pair={pair}
                        hasFixedRates={pair.hasFixedRates}
                        fixedTerms={fixedTerms}
                        currentPosition={hasPosition ? pair.yourPosition![0] : undefined}
                    />
                </div>
            </div>
        </div>
    );
}
