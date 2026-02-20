'use client';

import Link from 'next/link';
import { getPortfolioSummary } from '@/data/mock-data';
import { TokenPair } from '@/components/ui/TokenPair';
import { LTVBar } from '@/components/ui/LTVBar';
import { Badge } from '@/components/ui/Badge';

export default function DashboardPage() {
    const portfolio = getPortfolioSummary();

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                <p className="text-[var(--text-secondary)]">
                    Overview of your positions across all markets
                </p>
            </div>

            {/* Portfolio Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <SummaryCard
                    label="Total Supplied"
                    value={`$${portfolio.totalSupplied.toLocaleString()}`}
                    trend="+2.4%"
                    trendUp
                />
                <SummaryCard
                    label="Total Borrowed"
                    value={`$${portfolio.totalBorrowed.toLocaleString()}`}
                />
                <SummaryCard
                    label="Net APY"
                    value={`${portfolio.netAPY.toFixed(1)}%`}
                    valueColor="text-[var(--kamino-green)]"
                />
                <SummaryCard
                    label="Health Factor"
                    value={portfolio.healthFactor.toFixed(2)}
                    valueColor={portfolio.healthFactor > 1.5 ? 'text-[var(--kamino-green)]' : 'text-[var(--kamino-yellow)]'}
                />
            </div>

            {/* Alerts Banner */}
            {portfolio.healthFactor < 1.3 && (
                <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center gap-3">
                    <span className="text-xl">⚠️</span>
                    <div>
                        <div className="font-medium text-yellow-400">Liquidation Warning</div>
                        <div className="text-sm text-[var(--text-muted)]">
                            Your health factor is approaching the liquidation threshold. Consider adding collateral or repaying debt.
                        </div>
                    </div>
                </div>
            )}

            {/* Positions List */}
            <div className="card">
                <div className="p-4 border-b border-[var(--border-primary)] flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Your Positions</h2>
                    <Link href="/borrow" className="btn btn-secondary text-sm">
                        + New Position
                    </Link>
                </div>

                {portfolio.positions.length > 0 ? (
                    <div className="divide-y divide-[var(--border-primary)]">
                        {portfolio.positions.map((position) => (
                            <div key={position.id} className="p-4 hover:bg-[var(--bg-card-hover)] transition-colors">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <TokenPair
                                            collateral={position.collateral}
                                            debt={position.debt}
                                            size="md"
                                        />
                                        <Badge variant="success">{position.market}</Badge>
                                    </div>
                                    <Link
                                        href={`/borrow/${position.id}`}
                                        className="btn btn-primary text-sm"
                                    >
                                        Manage
                                    </Link>
                                </div>

                                {/* Loan Details */}
                                {position.yourPosition?.map((loan) => (
                                    <div key={loan.loanId} className="pl-4 border-l-2 border-[var(--border-primary)] ml-4">
                                        <div className="flex items-center gap-6 mb-2">
                                            <div className="text-sm">
                                                <span className="text-[var(--text-muted)]">Loan #{loan.loanId}</span>
                                            </div>
                                            <div className="text-sm">
                                                <span className="text-[var(--text-muted)]">Collateral: </span>
                                                <span className="font-medium">{loan.collateralAmount} {position.collateral.symbol}</span>
                                            </div>
                                            <div className="text-sm">
                                                <span className="text-[var(--text-muted)]">Borrowed: </span>
                                                <span className="font-medium">{loan.debtAmount.toLocaleString()} {position.debt.symbol}</span>
                                            </div>
                                            <div className="text-sm">
                                                <span className="text-[var(--text-muted)]">Health: </span>
                                                <span className={`font-medium ${loan.healthFactor > 1.5 ? 'text-[var(--kamino-green)]' :
                                                        loan.healthFactor > 1.2 ? 'text-[var(--kamino-yellow)]' :
                                                            'text-[var(--kamino-red)]'
                                                    }`}>
                                                    {loan.healthFactor.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                        <LTVBar
                                            currentLTV={loan.currentLTV}
                                            maxLTV={position.maxLTV}
                                            size="sm"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-8 text-center">
                        <div className="text-[var(--text-muted)] mb-4">
                            You don&apos;t have any positions yet
                        </div>
                        <Link href="/borrow" className="btn btn-primary">
                            Start Borrowing
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

function SummaryCard({
    label,
    value,
    trend,
    trendUp,
    valueColor = 'text-[var(--text-primary)]'
}: {
    label: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
    valueColor?: string;
}) {
    return (
        <div className="card p-4">
            <div className="text-sm text-[var(--text-muted)] mb-1">{label}</div>
            <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-bold ${valueColor}`}>{value}</span>
                {trend && (
                    <span className={`text-sm ${trendUp ? 'text-[var(--kamino-green)]' : 'text-[var(--kamino-red)]'}`}>
                        {trend}
                    </span>
                )}
            </div>
        </div>
    );
}
