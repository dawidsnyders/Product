import { cn } from '@/lib/utils'
import {
  Home,
  ArrowLeftRight,
  TrendingUp,
  Landmark,
  Layers,
  Wallet,
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '#', active: false },
  { icon: ArrowLeftRight, label: 'Swap', href: '#', active: false },
  { icon: TrendingUp, label: 'Earn', href: '#', active: false },
  { icon: Landmark, label: 'Borrow', href: '#', active: false },
  { icon: Layers, label: 'Multiply', href: '#', active: true },
  { icon: Wallet, label: 'Assets', href: '#', active: false },
]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[72px] bg-[#0B0F1A] flex flex-col items-center py-5 z-50">
      {/* Logo — matches the "K" mark from screenshots */}
      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center mb-8">
        <span className="text-[#0B0F1A] font-bold text-base leading-none">K</span>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col items-center gap-0.5 flex-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              'flex flex-col items-center gap-1 px-1 py-2.5 rounded-lg w-[56px] transition-colors text-center',
              item.active
                ? 'text-white'
                : 'text-[#6B7280] hover:text-[#9CA3AF]'
            )}
          >
            <item.icon size={20} strokeWidth={1.5} />
            <span className="text-[10px] font-medium leading-none">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
