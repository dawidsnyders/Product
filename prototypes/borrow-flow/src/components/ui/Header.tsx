'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/earn', label: 'Earn' },
    { href: '/borrow', label: 'Borrow' },
    { href: '/explore', label: 'Explore' },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                        K
                    </div>
                    <span className="text-lg font-semibold">Kamino</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Wallet Button */}
                <button className="btn btn-primary text-sm">
                    Connect Wallet
                </button>
            </div>
        </header>
    );
}
