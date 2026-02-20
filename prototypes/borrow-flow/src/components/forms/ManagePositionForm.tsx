'use client';

import { useState } from 'react';
import { BorrowPair, FixedRateTerm } from '@/data/mock-data';
import { Toggle } from '@/components/ui/Toggle';
import { LTVBar } from '@/components/ui/LTVBar';

interface ManagePositionFormProps {
    pair: BorrowPair;
    hasFixedRates: boolean;
    fixedTerms: FixedRateTerm[];
    currentPosition?: {
        loanId: number;
        collateralAmount: number;
        debtAmount: number;
        currentLTV: number;
        healthFactor: number;
    };
}

type FormTab = 'deposit' | 'deposit-borrow' | 'repay' | 'withdraw';

export function ManagePositionForm({
    pair,
    hasFixedRates,
    fixedTerms,
    currentPosition
}: ManagePositionFormProps) {
    const [activeTab, setActiveTab] = useState<FormTab>(currentPosition ? 'deposit-borrow' : 'deposit');
    const [rateType, setRateType] = useState<'variable' | 'fixed'>('variable');
    const [selectedTerm, setSelectedTerm] = useState<FixedRateTerm | null>(fixedTerms[0] || null);
    const [rollover, setRollover] = useState(false);

    // Form state
    const [collateralAmount, setCollateralAmount] = useState('');
    const [borrowAmount, setBorrowAmount] = useState('');

    // Calculate projected LTV
    const calculateProjectedLTV = () => {
        const collateral = parseFloat(collateralAmount) || 0;
        const borrow = parseFloat(borrowAmount) || 0;
        const existingCollateral = currentPosition?.collateralAmount || 0;
        const existingDebt = currentPosition?.debtAmount || 0;

        const totalCollateral = existingCollateral + collateral;
        const totalDebt = existingDebt + borrow;

        if (totalCollateral === 0) return 0;
        // Simplified: assuming 1 collateral token = $100 for demo
        const collateralValue = totalCollateral * 100;
        return (totalDebt / collateralValue) * 100;
    };

    const projectedLTV = calculateProjectedLTV();

    const tabs: { id: FormTab; label: string }[] = currentPosition
        ? [
            { id: 'deposit', label: 'Deposit' },
            { id: 'deposit-borrow', label: 'Deposit & Borrow' },
            { id: 'repay', label: 'Repay' },
            { id: 'withdraw', label: 'Withdraw' },
        ]
        : [
            { id: 'deposit', label: 'Deposit' },
            { id: 'deposit-borrow', label: 'Deposit & Borrow' },
        ];

    return (
        <div className="card p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
                {currentPosition ? 'Manage Position' : 'Create Position'}
            </h3>

            {/* Tabs */}
            <div className="tabs mb-6">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab text-xs ${activeTab === tab.id ? 'active' : ''}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Form Content */}
            <div className="space-y-4">
                {/* Collateral Input */}
                {(activeTab === 'deposit' || activeTab === 'deposit-borrow' || activeTab === 'withdraw') && (
                    <div>
                        <label className="block text-sm text-[var(--text-muted)] mb-2">
                            {activeTab === 'withdraw' ? 'Withdraw Amount' : 'Collateral Amount'}
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="0.00"
                                value={collateralAmount}
                                onChange={(e) => setCollateralAmount(e.target.value)}
                                className="w-full px-4 py-3 pr-20 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg focus:outline-none focus:border-[var(--border-focus)]"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <span className="text-[var(--text-muted)]">{pair.collateral.symbol}</span>
                                <button className="text-xs text-[var(--kamino-blue)] font-medium">MAX</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Borrow Amount */}
                {(activeTab === 'deposit-borrow' || activeTab === 'repay') && (
                    <div>
                        <label className="block text-sm text-[var(--text-muted)] mb-2">
                            {activeTab === 'repay' ? 'Repay Amount' : 'Borrow Amount'}
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="0.00"
                                value={borrowAmount}
                                onChange={(e) => setBorrowAmount(e.target.value)}
                                className="w-full px-4 py-3 pr-20 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg focus:outline-none focus:border-[var(--border-focus)]"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <span className="text-[var(--text-muted)]">{pair.debt.symbol}</span>
                                <button className="text-xs text-[var(--kamino-blue)] font-medium">MAX</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Rate Type Selector (only for borrow actions) */}
                {hasFixedRates && (activeTab === 'deposit-borrow') && (
                    <div className="pt-4 border-t border-[var(--border-primary)]">
                        <label className="block text-sm text-[var(--text-muted)] mb-3">Rate Type</label>
                        <div className="tabs">
                            <button
                                onClick={() => setRateType('variable')}
                                className={`tab ${rateType === 'variable' ? 'active' : ''}`}
                            >
                                Variable Rate
                            </button>
                            <button
                                onClick={() => setRateType('fixed')}
                                className={`tab flex items-center gap-2 ${rateType === 'fixed' ? 'active' : ''}`}
                            >
                                Fixed Rate
                                <span className="badge badge-new text-[10px] py-0">New</span>
                            </button>
                        </div>

                        {/* Fixed Rate Options */}
                        {rateType === 'fixed' && (
                            <div className="mt-4 space-y-4">
                                {/* Term Selector */}
                                <div>
                                    <label className="block text-sm text-[var(--text-muted)] mb-2">Select Term</label>
                                    <select
                                        value={selectedTerm?.days || ''}
                                        onChange={(e) => {
                                            const term = fixedTerms.find(t => t.days === parseInt(e.target.value));
                                            setSelectedTerm(term || null);
                                        }}
                                        className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg focus:outline-none focus:border-[var(--border-focus)]"
                                    >
                                        {fixedTerms.map(term => (
                                            <option key={term.days} value={term.days}>
                                                {term.days} Days @ {term.rate.toFixed(2)}% APY
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Rollover Toggle */}
                                <div className="p-3 bg-[var(--bg-tertiary)] rounded-lg">
                                    <Toggle
                                        label="Rollover"
                                        description="Automatically renew loan when term expires"
                                        checked={rollover}
                                        onChange={setRollover}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* LTV Preview */}
                {(activeTab === 'deposit' || activeTab === 'deposit-borrow') && (
                    <div className="pt-4 border-t border-[var(--border-primary)]">
                        <label className="block text-sm text-[var(--text-muted)] mb-3">Projected LTV</label>
                        <LTVBar
                            currentLTV={projectedLTV}
                            maxLTV={pair.maxLTV}
                            showLabels
                            size="md"
                        />
                    </div>
                )}

                {/* Transaction Summary */}
                <div className="pt-4 border-t border-[var(--border-primary)]">
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[var(--text-muted)]">Borrow APY</span>
                            <span className="text-[var(--kamino-green)] font-medium">
                                {rateType === 'fixed' && selectedTerm
                                    ? `${selectedTerm.rate.toFixed(2)}% (Fixed ${selectedTerm.days}D)`
                                    : `${pair.borrowAPY.toFixed(2)}% (Variable)`
                                }
                            </span>
                        </div>
                        {pair.incentiveAPR && (
                            <div className="flex justify-between">
                                <span className="text-[var(--text-muted)]">Incentive APR</span>
                                <span className="text-[var(--kamino-purple)] font-medium">
                                    +{pair.incentiveAPR}%
                                </span>
                            </div>
                        )}
                        <div className="flex justify-between">
                            <span className="text-[var(--text-muted)]">Max LTV</span>
                            <span>{pair.maxLTV}%</span>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button className="btn btn-primary w-full mt-4">
                    {activeTab === 'deposit' && 'Deposit Collateral'}
                    {activeTab === 'deposit-borrow' && 'Deposit & Borrow'}
                    {activeTab === 'repay' && 'Repay Loan'}
                    {activeTab === 'withdraw' && 'Withdraw Collateral'}
                </button>
            </div>
        </div>
    );
}
