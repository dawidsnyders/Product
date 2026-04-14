import { Search } from 'lucide-react'

export function TopBar() {
  return (
    <header className="h-[52px] border-b border-border flex items-center justify-between px-6 bg-white sticky top-0 z-40">
      {/* Left spacer for alignment */}
      <div className="w-[120px]" />

      {/* Center: Search */}
      <div className="relative flex-1 max-w-[420px]">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          placeholder="Search for vaults, stables and more..."
          className="w-full pl-9 pr-8 py-2 text-[13px] bg-bg-secondary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-border-focus"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-text-muted font-mono">/</div>
      </div>

      {/* Right: Wallet */}
      <div className="w-[120px] flex justify-end">
        <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium text-text-primary bg-bg-secondary border border-border rounded-full hover:border-border-hover transition-colors cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-success" />
          0xaffa...57d2
        </button>
      </div>
    </header>
  )
}
