'use client';

import { useState } from 'react';
import { FixedRateTerm } from '@/data/mock-data';

interface AvailableLiquidityProps {
    terms: FixedRateTerm[];
}

export function AvailableLiquidity({ terms }: AvailableLiquidityProps) {
    const [selectedTerm, setSelectedTerm] = useState<'all' | 30 | 60 | 90>('all');

    const filteredTerms = selectedTerm === 'all'
        ? terms
        : terms.filter(t => t.days === selectedTerm);

    return (
        <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Available Liquidity</h3>

            {/* Term Tabs */}
            <div className="tabs mb-6">
                <button
                    onClick={() => setSelectedTerm('all')}
                    className={`tab ${selectedTerm === 'all' ? 'active' : ''}`}
                >
                    All Terms
                </button>
                <button
                    onClick={() => setSelectedTerm(30)}
                    className={`tab ${selectedTerm === 30 ? 'active' : ''}`}
                >
                    30 Days
                </button>
                <button
                    onClick={() => setSelectedTerm(60)}
                    className={`tab ${selectedTerm === 60 ? 'active' : ''}`}
                >
                    60 Days
                </button>
                <button
                    onClick={() => setSelectedTerm(90)}
                    className={`tab ${selectedTerm === 90 ? 'active' : ''}`}
                >
                    90 Days
                </button>
            </div>

            {/* Liquidity Bars */}
            <div className="space-y-4">
                {filteredTerms.map((term) => {
                    const fillPercentage = (term.availableLiquidity / term.maxLiquidity) * 100;

                    return (
                        <div key={term.days} className="flex items-center gap-4">
                            <div className="w-20 text-sm font-medium">
                                {term.days} Days
                            </div>
                            <div className="flex-1">
                                <div className="h-6 bg-[var(--bg-tertiary)] rounded-lg overflow-hidden relative">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg"
                                        style={{ width: `${fillPercentage}%` }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                                        ${(term.availableLiquidity / 1_000_000).toFixed(1)}M available
                                    </div>
                                </div>
                            </div>
                            <div className="w-24 text-right">
                                <span className="text-[var(--kamino-blue)] font-semibold">
                                    {term.rate.toFixed(2)}%
                                </span>
                                <span className="text-xs text-[var(--text-muted)]"> APY</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
