import { ChevronRight, HelpCircle, BarChart3, Sparkles } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { platformStats } from '@/data/mock-strategies'

type Props = {
  onOpenWalkthrough: () => void
}

export function PageHeader({ onOpenWalkthrough }: Props) {
  return (
    <div className="mb-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-[12px] text-text-muted mb-5">
        <span className="hover:text-text-secondary cursor-pointer">Home</span>
        <ChevronRight size={11} />
        <span className="text-text-secondary">Multiply</span>
      </div>

      {/* Title */}
      <h1 className="text-[28px] font-semibold text-text-primary tracking-tight leading-tight mb-2">
        Multiply
      </h1>

      {/* Subtitle row — left: description, right: stats (matches Lend screenshot) */}
      <div className="flex items-center justify-between">
        <p className="text-[13px] text-text-secondary">
          Amplify your yields with one-click leverage.{' '}
          <button
            onClick={onOpenWalkthrough}
            className="inline-flex items-center gap-1 text-brand hover:text-brand-light transition-colors cursor-pointer font-medium"
          >
            <HelpCircle size={12} />
            How it works
          </button>
        </p>

        {/* Stats — right-aligned, matching Lend's "Total deposits" / "Interest generated" */}
        <div className="flex items-center gap-5 text-[13px]">
          <div className="flex items-center gap-1.5 text-text-secondary">
            <BarChart3 size={13} className="text-text-muted" />
            Total deposits:
            <span className="text-text-primary font-semibold">
              {formatCurrency(platformStats.totalDeposits)}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary">
            <Sparkles size={13} className="text-text-muted" />
            Active borrows:
            <span className="text-text-primary font-semibold">
              {formatCurrency(platformStats.activeBorrows)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
