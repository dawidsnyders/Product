interface LTVBarProps {
    currentLTV: number;
    maxLTV: number;
    showLabels?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export function LTVBar({ currentLTV, maxLTV, showLabels = false, size = 'md' }: LTVBarProps) {
    const percentage = Math.min((currentLTV / maxLTV) * 100, 100);

    // Determine risk zone
    const getRiskClass = () => {
        const ratio = currentLTV / maxLTV;
        if (ratio < 0.5) return 'ltv-safe';
        if (ratio < 0.75) return 'ltv-moderate';
        if (ratio < 0.9) return 'ltv-risky';
        return 'ltv-danger';
    };

    const heights = {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
    };

    return (
        <div className="w-full">
            {showLabels && (
                <div className="flex justify-between text-xs text-[var(--text-muted)] mb-1">
                    <span>LTV: {currentLTV.toFixed(1)}%</span>
                    <span>Max: {maxLTV}%</span>
                </div>
            )}
            <div className={`ltv-bar ${heights[size]}`}>
                <div
                    className={`ltv-fill ${getRiskClass()}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
