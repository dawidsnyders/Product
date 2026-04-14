import { cn } from '@/lib/utils'
import type { CategoryInfo } from '@/data/mock-strategies'
import { Search, SlidersHorizontal } from 'lucide-react'

type Props = {
  categories: CategoryInfo[]
  activeFilter: string | null
  onFilterChange: (key: string | null) => void
  searchQuery: string
  onSearchChange: (q: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-5 border-b border-border pb-3">
      {/* Category tabs — plain text style matching Lend screenshot */}
      <div className="flex items-center gap-1 overflow-x-auto">
        <TabButton
          active={activeFilter === null}
          onClick={() => onFilterChange(null)}
        >
          All vaults
        </TabButton>
        {categories.map((cat) => (
          <TabButton
            key={cat.key}
            active={activeFilter === cat.key}
            onClick={() => onFilterChange(cat.key)}
          >
            {cat.title.split(' ').slice(0, 2).join(' ')}
          </TabButton>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search assets..."
            className="pl-8 pr-3 py-1.5 text-[13px] bg-bg-primary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-border-focus w-[180px]"
          />
        </div>

        {/* Sort dropdown styled as button */}
        <button
          onClick={() => {
            const sorts = ['tvl', 'apy', 'liquidity']
            const idx = sorts.indexOf(sortBy)
            onSortChange(sorts[(idx + 1) % sorts.length])
          }}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-[13px] text-text-secondary border border-border rounded-lg hover:text-text-primary hover:border-border-hover transition-colors cursor-pointer"
        >
          <SlidersHorizontal size={13} />
          {sortBy === 'tvl' && 'TVL'}
          {sortBy === 'apy' && 'APY'}
          {sortBy === 'liquidity' && 'Liquidity'}
        </button>
      </div>
    </div>
  )
}

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-3 py-1.5 text-[14px] font-medium whitespace-nowrap transition-colors cursor-pointer rounded-md',
        active
          ? 'text-text-primary bg-bg-tertiary'
          : 'text-text-muted hover:text-text-secondary'
      )}
    >
      {children}
    </button>
  )
}
