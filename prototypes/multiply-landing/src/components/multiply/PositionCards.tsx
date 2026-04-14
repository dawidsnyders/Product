import type { Position } from '@/data/mock-strategies'
import { cn, formatCurrency } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

type Props = {
  positions: Position[]
}

export function PositionCards({ positions }: Props) {
  if (positions.length === 0) return null

  return (
    <div className="mb-6">
      {/* Banner — matches "You have 3 open positions" from Lend+Position screenshot */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-[13px]">
          <div className="w-1.5 h-1.5 rounded-full bg-success" />
          <span className="text-text-secondary">
            You have{' '}
            <span className="text-text-primary font-medium">
              {positions.length} open position{positions.length !== 1 ? 's' : ''}
            </span>
          </span>
        </div>
        <button className="flex items-center gap-1 text-[13px] text-brand hover:text-brand-light transition-colors cursor-pointer font-medium">
          View portfolio
          <ExternalLink size={11} />
        </button>
      </div>

      {/* Scrollable position cards — matches Borrow+Positions screenshot */}
      <div className="flex gap-3 overflow-x-auto pb-1 scroll-x">
        {positions.map((pos) => (
          <div
            key={pos.id}
            className="min-w-[280px] p-4 rounded-xl bg-bg-card border border-border hover:border-border-hover hover:shadow-[var(--shadow-card-hover)] cursor-pointer transition-all"
          >
            {/* Top: name + safety badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                  style={{ backgroundColor: pos.color }}
                >
                  {pos.symbol.slice(0, 2)}
                </div>
                <div>
                  <div className="text-[14px] font-medium text-text-primary">
                    {pos.asset} Multiply
                  </div>
                  <div className="text-[12px] text-text-muted">
                    Leverage {pos.leverage}x
                  </div>
                </div>
              </div>
              <SafetyBadge label={pos.safetyLabel} />
            </div>

            {/* Bottom: value + PnL */}
            <div className="flex items-baseline justify-between">
              <div className="text-[18px] font-semibold text-text-primary">
                {formatCurrency(pos.value)}
              </div>
              <div
                className={cn(
                  'text-[13px] font-medium',
                  pos.pnl >= 0 ? 'text-success' : 'text-danger'
                )}
              >
                {pos.pnl >= 0 ? '+' : '-'}
                {formatCurrency(Math.abs(pos.pnl)).replace('$', '$')}{' '}
                <span className="text-[11px] text-text-muted">
                  ({pos.pnlPercent >= 0 ? '+' : ''}
                  {pos.pnlPercent.toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SafetyBadge({ label }: { label: Position['safetyLabel'] }) {
  const styles = {
    Safe: 'bg-success-dim text-success',
    Watch: 'bg-warning-dim text-warning',
    'At Risk': 'bg-danger-dim text-danger',
  }

  return (
    <span
      className={cn(
        'text-[11px] font-medium px-2 py-0.5 rounded-full',
        styles[label]
      )}
    >
      {label}
    </span>
  )
}
