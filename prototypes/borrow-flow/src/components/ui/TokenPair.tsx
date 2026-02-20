import { Token } from '@/data/mock-data';

interface TokenPairProps {
    collateral: Token;
    debt: Token;
    size?: 'sm' | 'md' | 'lg';
    showArrow?: boolean;
}

const sizes = {
    sm: { icon: 'w-6 h-6 text-sm', text: 'text-sm' },
    md: { icon: 'w-8 h-8 text-base', text: 'text-base' },
    lg: { icon: 'w-10 h-10 text-lg', text: 'text-lg' },
};

export function TokenPair({ collateral, debt, size = 'md', showArrow = true }: TokenPairProps) {
    const sizeStyle = sizes[size];

    return (
        <div className="flex items-center gap-2">
            {/* Collateral Token */}
            <div className="flex items-center gap-2">
                <div className={`${sizeStyle.icon} rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center`}>
                    {collateral.icon}
                </div>
                <span className={`font-medium ${sizeStyle.text}`}>{collateral.symbol}</span>
            </div>

            {showArrow && (
                <span className="text-[var(--text-muted)]">→</span>
            )}

            {/* Debt Token */}
            <div className="flex items-center gap-2">
                <div className={`${sizeStyle.icon} rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center`}>
                    {debt.icon}
                </div>
                <span className={`font-medium ${sizeStyle.text}`}>{debt.symbol}</span>
            </div>
        </div>
    );
}
