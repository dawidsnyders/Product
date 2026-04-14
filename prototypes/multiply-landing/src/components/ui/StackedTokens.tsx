import { useState } from 'react'
import type { BorrowPair } from '@/data/mock-strategies'
import { formatCurrency } from '@/lib/utils'

type Props = {
  pairs: BorrowPair[]
  maxVisible?: number
}

export function StackedTokens({ pairs, maxVisible = 3 }: Props) {
  const [showTooltip, setShowTooltip] = useState(false)

  const visible = pairs.slice(0, maxVisible)
  const overflow = pairs.length - maxVisible

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex items-center">
        {visible.map((pair, i) => (
          <div
            key={pair.symbol}
            className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white"
            style={{
              backgroundColor: pair.color,
              marginLeft: i > 0 ? '-6px' : '0',
              zIndex: maxVisible - i,
            }}
          >
            {pair.symbol.slice(0, 2)}
          </div>
        ))}
        {overflow > 0 && (
          <div
            className="w-6 h-6 rounded-full border-2 border-white bg-bg-tertiary flex items-center justify-center text-[9px] font-medium text-text-secondary"
            style={{ marginLeft: '-6px', zIndex: 0 }}
          >
            +{overflow}
          </div>
        )}
      </div>

      {/* Tooltip */}
      {showTooltip && pairs.length > 1 && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-border rounded-lg p-3 shadow-lg z-50 min-w-[200px]">
          <div className="text-[11px] font-medium text-text-muted mb-2 uppercase tracking-wide">
            Borrow assets
          </div>
          <div className="flex flex-col gap-1.5">
            {pairs.map((pair) => (
              <div key={pair.symbol} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-white"
                    style={{ backgroundColor: pair.color }}
                  >
                    {pair.symbol.slice(0, 2)}
                  </div>
                  <span className="text-[12px] text-text-primary font-medium">{pair.token}</span>
                </div>
                <span className="text-[11px] text-text-muted">
                  {formatCurrency(pair.liquidityAvailable)}
                </span>
              </div>
            ))}
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
        </div>
      )}
    </div>
  )
}
