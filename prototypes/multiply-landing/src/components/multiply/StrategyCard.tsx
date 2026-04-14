import type { Strategy } from '@/data/mock-strategies'
import { formatCurrency } from '@/lib/utils'
import { StackedTokens } from '@/components/ui/StackedTokens'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  strategy: Strategy
}

export function StrategyCard({ strategy }: Props) {
  const selectedPair = strategy.pairs[strategy.selectedPairIndex]
  const isNegativeApy = selectedPair.apy < 0

  return (
    <div
      className={cn(
        'grid grid-cols-[1fr_100px_90px_90px_100px] items-center px-5 py-4 rounded-xl border cursor-pointer transition-all duration-150',
        strategy.boosted
          ? 'bg-white border-brand/25 hover:border-brand/40 hover:shadow-[0_2px_8px_rgba(14,165,233,0.08)]'
          : 'bg-white border-border hover:border-border-hover hover:shadow-[var(--shadow-card-hover)]'
      )}
    >
      {/* Market column */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
          style={{ backgroundColor: strategy.color }}
        >
          {strategy.symbol.slice(0, 2)}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[14px] text-text-primary">
              {strategy.asset}
            </span>
            {strategy.boosted && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium bg-brand-dim text-brand">
                <Sparkles size={9} />
                {strategy.boostLabel || 'Boosted'}
              </span>
            )}
          </div>
          <div className="text-[12px] text-text-muted">
            Up to {strategy.maxLeverage}x
          </div>
        </div>
      </div>

      {/* Borrow tokens */}
      <div>
        <StackedTokens pairs={strategy.pairs} />
      </div>

      {/* APY */}
      <div className="text-right">
        <span
          className={cn(
            'text-[14px] font-medium',
            isNegativeApy ? 'text-danger' : 'text-text-primary'
          )}
        >
          {selectedPair.apy.toFixed(2)}%
        </span>
      </div>

      {/* TVL */}
      <div className="text-right">
        <span className="text-[14px] text-text-primary">
          {formatCurrency(strategy.totalSupplied)}
        </span>
      </div>

      {/* Liquidity */}
      <div className="text-right">
        <span className="text-[14px] text-text-primary">
          {formatCurrency(selectedPair.liquidityAvailable)}
        </span>
      </div>
    </div>
  )
}
