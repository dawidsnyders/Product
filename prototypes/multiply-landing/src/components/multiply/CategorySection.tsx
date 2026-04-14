import { useState } from 'react'
import type { CategoryInfo, Strategy } from '@/data/mock-strategies'
import { StrategyCard } from './StrategyCard'
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react'

type Props = {
  category: CategoryInfo
  strategies: Strategy[]
  onLearnMore: (categoryKey: string) => void
}

export function CategorySection({ category, strategies, onLearnMore }: Props) {
  const [expanded, setExpanded] = useState(false)

  const visibleStrategies = expanded
    ? strategies
    : strategies.slice(0, category.defaultVisible)
  const hasMore = strategies.length > category.defaultVisible
  const hiddenCount = strategies.length - category.defaultVisible

  if (strategies.length === 0) return null

  return (
    <section className="mb-10">
      {/* Section header */}
      <div className="mb-4">
        <h2 className="text-[16px] font-semibold text-text-primary">
          {category.title}
        </h2>
        <p className="text-[13px] text-text-secondary mt-0.5">
          {category.subtitle}{' '}
          <button
            onClick={() => onLearnMore(category.key)}
            className="inline-flex items-center gap-1 text-brand hover:text-brand-light transition-colors cursor-pointer font-medium"
          >
            <BookOpen size={11} />
            Learn more
          </button>
        </p>
      </div>

      {/* Column labels */}
      <div className="grid grid-cols-[1fr_100px_90px_90px_100px] items-center px-5 pb-2 text-[11px] font-medium text-text-muted uppercase tracking-wider">
        <div>Market</div>
        <div>Borrow</div>
        <div className="text-right">APY</div>
        <div className="text-right">TVL</div>
        <div className="text-right">Liquidity</div>
      </div>

      {/* Card rows with spacing */}
      <div className="flex flex-col gap-2">
        {visibleStrategies.map((strategy) => (
          <StrategyCard key={strategy.id} strategy={strategy} />
        ))}
      </div>

      {/* Show more / less */}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 mt-3 text-[13px] text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          {expanded ? (
            <>
              <ChevronUp size={14} />
              Show less
            </>
          ) : (
            <>
              <ChevronDown size={14} />
              Show more ({hiddenCount})
            </>
          )}
        </button>
      )}
    </section>
  )
}
