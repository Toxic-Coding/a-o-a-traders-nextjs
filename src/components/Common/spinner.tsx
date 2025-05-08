import React from 'react';

interface SpinnerProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', color = 'gray', className = '' }) => {
    const sizeClasses = {
        small: 'w-4 h-4 border-2',
        medium: 'w-8 h-8 border-4',
        large: 'w-12 h-12 border-4',
    };

    return (
        <div
            className={`animate-spin rounded-full border-t-transparent border-${color} ${sizeClasses[size]} ${className}`}
            role="status"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;