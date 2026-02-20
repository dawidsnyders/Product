'use client';

import { useState } from 'react';

interface Loan {
    loanId: number;
    collateralAmount: number;
    debtAmount: number;
    currentLTV: number;
    healthFactor: number;
}

interface LoanSelectorProps {
    loans: Loan[];
    collateralSymbol: string;
    debtSymbol: string;
    onCreateNew?: () => void;
}

export function LoanSelector({
    loans,
    collateralSymbol,
    debtSymbol,
    onCreateNew
}: LoanSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLoanId, setSelectedLoanId] = useState(loans[0]?.loanId || 1);

    const selectedLoan = loans.find(l => l.loanId === selectedLoanId);

    const getHealthColor = (hf: number) => {
        if (hf > 1.5) return 'bg-green-500';
        if (hf > 1.2) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <div className="relative">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-secondary)] transition-colors"
            >
                <div className={`w-2 h-2 rounded-full ${getHealthColor(selectedLoan?.healthFactor || 1.5)}`} />
                <span className="font-medium">Loan #{selectedLoanId}</span>
                <span className="text-[var(--text-muted)] text-sm">
                    {selectedLoan ? `${selectedLoan.debtAmount.toLocaleString()} ${debtSymbol}` : ''}
                </span>
                <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu */}
                    <div className="absolute right-0 top-full mt-2 w-72 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg shadow-lg z-20 overflow-hidden">
                        {/* Loan Options */}
                        {loans.map((loan) => (
                            <button
                                key={loan.loanId}
                                onClick={() => {
                                    setSelectedLoanId(loan.loanId);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-[var(--bg-tertiary)] transition-colors ${loan.loanId === selectedLoanId ? 'bg-[var(--bg-tertiary)]' : ''
                                    }`}
                            >
                                <div className={`w-2 h-2 rounded-full ${getHealthColor(loan.healthFactor)}`} />
                                <div className="flex-1 text-left">
                                    <div className="font-medium">Loan #{loan.loanId}</div>
                                    <div className="text-sm text-[var(--text-muted)]">
                                        {loan.collateralAmount} {collateralSymbol} → {loan.debtAmount.toLocaleString()} {debtSymbol}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-[var(--text-muted)]">LTV</div>
                                    <div className="font-medium">{loan.currentLTV}%</div>
                                </div>
                            </button>
                        ))}

                        {/* Create New Loan */}
                        <button
                            onClick={() => {
                                onCreateNew?.();
                                setIsOpen(false);
                            }}
                            className="w-full px-4 py-3 flex items-center gap-3 border-t border-[var(--border-primary)] hover:bg-[var(--bg-tertiary)] transition-colors text-[var(--kamino-blue)]"
                        >
                            <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-sm">+</span>
                            <span className="font-medium">Create New Loan</span>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
