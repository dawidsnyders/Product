import { useState, useMemo } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'
import { PageHeader } from '@/components/multiply/PageHeader'
import { PositionCards } from '@/components/multiply/PositionCards'
import { RecommendedCards } from '@/components/multiply/RecommendedCards'
import { FilterBar } from '@/components/multiply/FilterBar'
import { CategorySection } from '@/components/multiply/CategorySection'
import { LearnMoreDrawer } from '@/components/multiply/LearnMoreDrawer'
import { WalkthroughModal } from '@/components/multiply/WalkthroughModal'
import {
  strategies,
  categories,
  mockPositions,
} from '@/data/mock-strategies'
function App() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('tvl')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerCategory, setDrawerCategory] = useState<string | null>(null)
  const [walkthroughOpen, setWalkthroughOpen] = useState(false)

  const filteredStrategies = useMemo(() => {
    let filtered = [...strategies]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (s) =>
          s.asset.toLowerCase().includes(q) ||
          s.symbol.toLowerCase().includes(q)
      )
    }

    filtered.sort((a, b) => {
      const aPair = a.pairs[a.selectedPairIndex]
      const bPair = b.pairs[b.selectedPairIndex]
      switch (sortBy) {
        case 'apy':
          return bPair.apy - aPair.apy
        case 'liquidity':
          return bPair.liquidityAvailable - aPair.liquidityAvailable
        case 'tvl':
        default:
          if (a.boosted && !b.boosted) return -1
          if (!a.boosted && b.boosted) return 1
          return b.totalSupplied - a.totalSupplied
      }
    })

    return filtered
  }, [searchQuery, sortBy])

  const strategiesByCategory = useMemo(() => {
    const map: Record<string, typeof strategies> = {}
    for (const cat of categories) {
      map[cat.key] = filteredStrategies.filter((s) => s.category === cat.key)
    }
    return map
  }, [filteredStrategies])

  const visibleCategories = activeFilter
    ? categories.filter((c) => c.key === activeFilter)
    : categories

  const handleLearnMore = (categoryKey: string) => {
    setDrawerCategory(categoryKey)
    setDrawerOpen(true)
  }

  return (
    <div className="min-h-screen w-full">
      <Sidebar />

      <div className="ml-[72px] min-h-screen flex flex-col">
        <TopBar />

        <main className="flex-1 w-full px-8 py-6">
          <PageHeader onOpenWalkthrough={() => setWalkthroughOpen(true)} />

          <PositionCards positions={mockPositions} />
          <RecommendedCards />

          <FilterBar
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {visibleCategories.map((category) => (
            <CategorySection
              key={category.key}
              category={category}
              strategies={strategiesByCategory[category.key] || []}
              onLearnMore={handleLearnMore}
            />
          ))}
        </main>
      </div>

      <LearnMoreDrawer
        isOpen={drawerOpen}
        onClose={() => {
          setDrawerOpen(false)
          setDrawerCategory(null)
        }}
        initialCategory={drawerCategory}
      />

      <WalkthroughModal
        isOpen={walkthroughOpen}
        onClose={() => setWalkthroughOpen(false)}
      />
    </div>
  )
}

export default App
