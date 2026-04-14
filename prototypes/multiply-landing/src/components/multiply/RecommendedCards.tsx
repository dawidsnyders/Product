import { strategies, recommendedStrategies } from '@/data/mock-strategies'
import { formatCurrency } from '@/lib/utils'
import { Lightbulb } from 'lucide-react'

export function RecommendedCards() {
  const recommendations = recommendedStrategies.map((rec) => {
    const strategy = strategies.find((s) => s.id === rec.strategyId)!
    const selectedPair = strategy.pairs[strategy.selectedPairIndex]
    return { ...rec, strategy, selectedPair }
  })

  return (
    <div className="mb-8">
      <h3 className="text-[15px] font-semibold text-text-primary mb-3">
        Recommended for you
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {recommendations.map(({ strategy, selectedPair, rationale }) => (
          <div
            key={strategy.id}
            className="p-4 rounded-xl bg-bg-card border border-border hover:border-border-hover hover:shadow-[var(--shadow-card-hover)] cursor-pointer transition-all duration-200"
          >
            {/* Top: token info + APY */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: strategy.color }}
                >
                  {strategy.symbol.slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-[14px] text-text-primary">
                    {strategy.asset}
                  </div>
                  <div className="text-[12px] text-text-muted">
                    {formatCurrency(strategy.totalSupplied)} TVL
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[12px] text-text-muted uppercase tracking-wide">APY</div>
                <div className="text-[16px] font-semibold text-success">
                  {selectedPair.apy.toFixed(2)}%
                </div>
              </div>
            </div>

            {/* Rationale */}
            <div className="flex items-center gap-1.5 text-[12px] text-text-muted">
              <Lightbulb size={12} className="text-text-muted shrink-0" />
              {rationale}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
