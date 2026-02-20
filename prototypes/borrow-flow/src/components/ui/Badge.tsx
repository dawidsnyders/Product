interface BadgeProps {
    variant: 'fixed' | 'new' | 'success' | 'warning' | 'danger';
    children: React.ReactNode;
    className?: string;
}

const variantStyles = {
    fixed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    new: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    danger: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export function Badge({ variant, children, className = '' }: BadgeProps) {
    return (
        <span className={`badge border ${variantStyles[variant]} ${className}`}>
            {children}
        </span>
    );
}
