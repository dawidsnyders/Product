'use client';

import { useState } from 'react';
import { PairsList } from '@/components/borrow/PairsList';
import { MarketsList } from '@/components/borrow/MarketsList';

type ViewMode = 'pairs' | 'markets';

export default function BorrowPage() {
    const [viewMode, setViewMode] = useState<ViewMode>('pairs');

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Borrow</h1>
                <p className="text-[var(--text-secondary)]">
                    Securely borrow against your crypto. Choose a pair to get started.
                </p>
            </div>

            {/* View Toggle - Pairs / Markets */}
            <div className="mb-6">
                <div className="tabs inline-flex">
                    <button
                        onClick={() => setViewMode('pairs')}
                        className={`tab ${viewMode === 'pairs' ? 'active' : ''}`}
                    >
                        Pairs
                    </button>
                    <button
                        onClick={() => setViewMode('markets')}
                        className={`tab ${viewMode === 'markets' ? 'active' : ''}`}
                    >
                        Markets
                    </button>
                </div>
            </div>

            {/* Content based on view mode */}
            {viewMode === 'pairs' ? (
                <PairsList />
            ) : (
                <MarketsList />
            )}
        </div>
    );
}
