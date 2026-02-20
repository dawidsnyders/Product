'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BORROW_PAIRS, BorrowPair } from '@/data/mock-data';
import { Badge } from '@/components/ui/Badge';
import { TokenPair } from '@/components/ui/TokenPair';
import { Toggle } from '@/components/ui/Toggle';

interface PairsListProps {
    pairs?: BorrowPair[];
}

function formatNumber(num: number): string {
    if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `$${(num / 1_000).toFixed(0)}K`;
    return `$${num.toFixed(0)}`;
}

export function PairsList({ pairs = BORROW_PAIRS }: PairsListProps) {
    const [fixedRatesOnly, setFixedRatesOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMarket, setSelectedMarket] = useState<string>('all');

    // Get unique markets for filter
    const markets = ['all', ...new Set(pairs.map(p => p.market))];

    // Filter pairs
    const filteredPairs = pairs.filter(pair => {
        if (fixedRatesOnly && !pair.hasFixedRates) return false;
        if (selectedMarket !== 'all' && pair.market !== selectedMarket) return false;
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
                pair.collateral.symbol.toLowerCase().includes(query) ||
                pair.debt.symbol.toLowerCase().includes(query) ||
                pair.market.toLowerCase().includes(query)
            );
        }
        return true;
    });

    return (
        <div className="space-y-4">
            {/* Filters */}
            <div className="flex items-center gap-4 p-4 card">
                {/* Search */}
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search pairs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-sm focus:outline-none focus:border-[var(--border-focus)]"
                    />
                </div>

                {/* Market Filter */}
                <select
                    value={selectedMarket}
                    onChange={(e) => setSelectedMarket(e.target.value)}
                    className="px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-sm focus:outline-none focus:border-[var(--border-focus)]"
                >
                    {markets.map(market => (
                        <option key={market} value={market}>
                            {market === 'all' ? 'All Markets' : market}
                        </option>
                    ))}
                </select>

                {/* Fixed Rates Toggle */}
                <div className="flex items-center gap-3 px-4 py-2 bg-[var(--bg-tertiary)] rounded-lg">
                    <Toggle
                        label="Fixed Rates Only"
                        checked={fixedRatesOnly}
                        onChange={setFixedRatesOnly}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="card overflow-hidden">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Pair</th>
                            <th>Market</th>
                            <th>Max LTV</th>
                            <th>Borrow APY</th>
                            <th>Incentives</th>
                            <th>Available</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPairs.map((pair) => (
                            <tr key={pair.id} className="cursor-pointer card-hover">
                                <td>
                                    <div className="flex items-center gap-3">
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
                                    <span className="text-[var(--text-secondary)] text-sm">
                                        {pair.market}
                                    </span>
                                </td>
                                <td>
                                    <span className="font-medium">{pair.maxLTV}%</span>
                                </td>
                                <td>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-[var(--kamino-green)]">
                                            {pair.borrowAPY.toFixed(2)}%
                                        </span>
                                        {pair.borrowAPYFixed && (
                                            <span className="text-xs text-[var(--text-muted)]">
                                                Fixed: {pair.borrowAPYFixed.min.toFixed(1)} - {pair.borrowAPYFixed.max.toFixed(1)}%
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    {pair.incentiveAPR ? (
                                        <span className="text-[var(--kamino-purple)]">
                                            +{pair.incentiveAPR.toFixed(1)}%
                                        </span>
                                    ) : (
                                        <span className="text-[var(--text-muted)]">—</span>
                                    )}
                                </td>
                                <td>
                                    <span className="font-medium">
                                        {formatNumber(pair.availableLiquidity)}
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        href={`/borrow/${pair.id}`}
                                        className="btn btn-secondary text-sm"
                                    >
                                        Borrow
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredPairs.length === 0 && (
                    <div className="p-8 text-center text-[var(--text-muted)]">
                        No pairs match your filters
                    </div>
                )}
            </div>
        </div>
    );
}
