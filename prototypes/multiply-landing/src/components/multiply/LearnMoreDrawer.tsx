import { useState, useEffect } from 'react'
import { X, ArrowLeft, ShieldCheck, AlertTriangle, Zap, BookOpen } from 'lucide-react'
import { categories, drawerContent } from '@/data/mock-strategies'

type Props = {
  isOpen: boolean
  onClose: () => void
  initialCategory?: string | null
}

export function LearnMoreDrawer({ isOpen, onClose, initialCategory }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen && initialCategory) {
      setActiveCategory(initialCategory)
    } else if (!isOpen) {
      setActiveCategory(null)
    }
  }, [isOpen, initialCategory])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-[60] transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-[480px] bg-white border-l border-border z-[70] shadow-[var(--shadow-drawer)] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="p-1 rounded-lg hover:bg-bg-secondary transition-colors cursor-pointer"
              >
                <ArrowLeft size={18} className="text-text-secondary" />
              </button>
            )}
            <h2 className="text-[16px] font-semibold text-text-primary">
              {activeCategory
                ? drawerContent[activeCategory]?.title
                : 'How Multiply Works'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-bg-secondary transition-colors cursor-pointer"
          >
            <X size={18} className="text-text-muted" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {activeCategory ? (
            <L2Content categoryKey={activeCategory} />
          ) : (
            <L1Overview onSelectCategory={setActiveCategory} />
          )}
        </div>
      </div>
    </>
  )
}

function L1Overview({
  onSelectCategory,
}: {
  onSelectCategory: (key: string) => void
}) {
  const categoryIcons: Record<string, typeof Zap> = {
    lst: Zap,
    rwa: ShieldCheck,
    stablecoin: BookOpen,
    defi: Zap,
    equity: AlertTriangle,
  }

  return (
    <div>
      <p className="text-[13px] text-text-secondary mb-5 leading-relaxed">
        Multiply creates leveraged yield positions in a single transaction using
        flash loans. Choose a category to learn how each type works.
      </p>

      <div className="flex flex-col gap-2">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat.key] || Zap
          const content = drawerContent[cat.key]

          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(cat.key)}
              className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-border-hover hover:bg-bg-secondary transition-all text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-bg-tertiary flex items-center justify-center shrink-0">
                <Icon size={18} className="text-brand" />
              </div>
              <div>
                <div className="text-[14px] font-semibold text-text-primary mb-0.5">
                  {cat.title}
                </div>
                <div className="text-[12px] text-text-secondary line-clamp-2">
                  {content?.description.slice(0, 100)}...
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function L2Content({ categoryKey }: { categoryKey: string }) {
  const content = drawerContent[categoryKey]
  if (!content) return null

  return (
    <div className="space-y-5">
      <p className="text-[13px] text-text-secondary leading-relaxed">
        {content.description}
      </p>

      <Section title="How it works" icon={<Zap size={15} className="text-brand" />}>
        <p className="text-[13px] text-text-secondary leading-relaxed">
          {content.howItWorks}
        </p>
      </Section>

      <Section title="What you earn" icon={<BookOpen size={15} className="text-success" />}>
        <p className="text-[13px] text-text-secondary leading-relaxed">
          {content.yieldSource}
        </p>
      </Section>

      <Section title="What are the risks" icon={<AlertTriangle size={15} className="text-warning" />}>
        <ul className="space-y-2">
          {content.risks.map((risk, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-warning mt-1.5 shrink-0" />
              {risk}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="How Kamino protects you" icon={<ShieldCheck size={15} className="text-success" />}>
        <ul className="space-y-2">
          {content.protections.map((protection, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
              {protection}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}

function Section({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="bg-bg-secondary rounded-xl p-4 border border-border">
      <div className="flex items-center gap-2 mb-2.5">
        {icon}
        <h3 className="text-[14px] font-semibold text-text-primary">{title}</h3>
      </div>
      {children}
    </div>
  )
}
