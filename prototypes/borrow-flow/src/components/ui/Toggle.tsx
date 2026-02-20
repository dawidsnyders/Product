'use client';

import { useState } from 'react';

interface ToggleProps {
    label?: string;
    description?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export function Toggle({ label, description, checked = false, onChange }: ToggleProps) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onChange?.(newValue);
    };

    return (
        <div className="flex items-center justify-between">
            {(label || description) && (
                <div className="flex flex-col">
                    {label && <span className="text-sm font-medium">{label}</span>}
                    {description && <span className="text-xs text-[var(--text-muted)]">{description}</span>}
                </div>
            )}
            <button
                onClick={handleToggle}
                className={`toggle ${isChecked ? 'active' : ''}`}
                role="switch"
                aria-checked={isChecked}
            >
                <div className="toggle-knob" />
            </button>
        </div>
    );
}
