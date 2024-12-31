import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
    return (
        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800">
            {children}
        </span>
    );
}; 