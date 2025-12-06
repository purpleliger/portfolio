import type { FC } from 'react';
import './Logo.css';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: FC<LogoProps> = ({ size = 60, className = '' }) => {
  return (
    <div className={`logo ${className}`} style={{ width: 'auto', height: size }}>
      <svg
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="MMSec Logo"
        style={{ height: '100%', width: 'auto' }}
      >
        {/* Square background for MM */}
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="16"
          fill="url(#bgGradient)"
        />
        
        {/* MM Letters inside square */}
        <text
          x="50"
          y="62"
          fontFamily="'Inter', sans-serif"
          fontSize="38"
          fontWeight="800"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          MM
        </text>
        
        {/* Sec text outside square */}
        <text
          x="100"
          y="62"
          fontFamily="'Inter', sans-serif"
          fontSize="32"
          fontWeight="700"
          fill="var(--text-primary)"
          textAnchor="start"
          dominantBaseline="middle"
        >
          Sec
        </text>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};