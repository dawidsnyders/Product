'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MARKETS, BORROW_PAIRS, Market } from '@/data/mock-data';
import { TokenPair } from '@/components/ui/TokenPair';
import { Badge } from '@/components/ui/Badge';

function formatNumber(num: number): string {
    if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `$${(num / 1_000).toFixed(0)}K`;
    return `$${num.toFixed(0)}`;
}

export function MarketsList() {
    const [expandedMarket, setExpandedMarket] = useState<string | null>(null);

    const toggleMarket = (marketId: string) => {
        setExpandedMarket(expandedMarket === marketId ? null : marketId);
    };

    const getPairsForMarket = (marketName: string) => {
        return BORROW_PAIRS.filter(p => p.market === marketName);
    };

    return (
        <div className="space-y-4">
            <div className="card overflow-hidden">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Market</th>
                            <th>TVL</th>
                            <th>Pairs</th>
                            <th>Top APY</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MARKETS.map((market) => {
                            const isExpanded = expandedMarket === market.id;
                            const pairs = getPairsForMarket(market.name);

                            return (
                                <>
                                    <tr
                                        key={market.id}
                                        className="cursor-pointer card-hover"
                                        onClick={() => toggleMarket(market.id)}
                                    >
                                        <td className="w-8">
                                            <span className={`transition-transform ${isExpanded ? 'rotate-90' : ''} inline-block`}>
                                                ▶
                                            </span>
                                        </td>
                                        <td>
                                            <span className="font-medium">{market.name}</span>
                                        </td>
                                        <td>
                                            <span className="font-medium">{formatNumber(market.tvl)}</span>
                                        </td>
                                        <td>
                                            <span>{market.pairCount} pairs</span>
                                        </td>
                                        <td>
                                            <span className="text-[var(--kamino-green)] font-medium">
                                                {market.topAPY.toFixed(1)}%
                                            </span>
                                        </td>
                                        <td>
                                            <Badge variant={market.status === 'active' ? 'success' : 'warning'}>
                                                {market.status}
                                            </Badge>
                                        </td>
                                    </tr>

                                    {/* Expanded pairs */}
                                    {isExpanded && pairs.map((pair) => (
                                        <tr key={pair.id} className="bg-[var(--bg-tertiary)]">
                                            <td></td>
                                            <td colSpan={2}>
                                                <div className="flex items-center gap-3 pl-4">
                                                    <TokenPair
                                                        collateral={pair.collateral}
                                                        debt={pair.debt}
                                                        size="sm"
                                                    />
                                                    {pair.hasFixedRates && (
                                                        <Badge variant="fixed">Fixed</Badge>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-sm">Max LTV: {pair.maxLTV}%</span>
                                            </td>
                                            <td>
                                                <span className="text-[var(--kamino-green)]">
                                                    {pair.borrowAPY.toFixed(2)}%
                                                </span>
                                            </td>
                                            <td>
                                                <Link
                                                    href={`/borrow/${pair.id}`}
                                                    className="btn btn-secondary text-sm"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Borrow
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
