import React from 'react';

interface HeisempLogoProps {
  variant?: 'full' | 'mark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showDescriptor?: boolean;
}

export const HeisempLogo: React.FC<HeisempLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showDescriptor = true,
}) => {
  // Dimension tokens maintaining exact proportions
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  }[size];

  const descriptorSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  }[size];

  const LogoMark = (
    <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center`}>
      <svg
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md select-none"
        aria-hidden="true"
      >
        {/* Subtle 3D Ambient Depth */}
        <g opacity="0.3" transform="translate(2, 3)">
          <path
            d="M46 22 L62 16 C63 15.6 64.2 16.2 64.5 17.2 L65.5 54 L80 43 C81 42.2 82.5 42.8 82.5 44 L83 90 C83 91.2 82 92.2 80.8 92.5 L60 97 C58.8 97.2 57.8 96.5 57.5 95.3 L54 75 L46 79 C44.8 79.5 43.5 78.8 43.5 77.5 L43.5 24 C43.5 22.8 44.5 21.8 46 22 Z"
            fill="#000000"
          />
          <path
            d="M44 87 L60 76 C61 75.3 62.5 76 62.5 77.2 L62.5 98 C62.5 99.2 61.5 100.2 60.3 100.8 L44 112 C43 112.7 41.5 112 41.5 110.8 L41.5 90 C41.5 88.8 42.5 87.8 44 87 Z"
            fill="#000000"
          />
        </g>

        {/* 3D Under-Facet */}
        <path
          d="M43.5 76 L54 71.5 L57.5 95 C57.8 96.2 58.8 97 60 96.8 L80.8 92.3 C82 92 83 91 83 89.8 L83 92 C83 93.2 82 94.2 80.8 94.5 L60 99 C58.8 99.2 57.8 98.5 57.5 97.3 L54 75.5 L43.5 80 Z"
          fill="#1C242B"
          opacity="0.75"
        />

        {/* Official White Stylized "h" Monogram */}
        <path
          d="M46 20 L62 14 C63.2 13.5 64.5 14.4 64.5 15.6 L65 52 L79.5 41 C80.5 40.2 82 40.8 82 42 L82.5 88 C82.5 89.2 81.5 90.2 80.3 90.5 L59.5 95 C58.3 95.2 57.3 94.5 57 93.3 L53.5 73 L45.5 77 C44.3 77.5 43 76.8 43 75.5 L43 22 C43 20.8 44.2 19.8 46 20 Z"
          fill="#FFFFFF"
        />

        {/* Vibrant Orange Bottom Diamond / Rhombus */}
        <path
          d="M43.5 85 L59.5 74 C60.7 73.2 62.2 74 62.2 75.4 L62.2 96 C62.2 97.2 61.2 98.2 60 98.8 L44 110 C42.8 110.8 41.2 110 41.2 108.6 L41.2 87.8 C41.2 86.6 42.2 85.6 43.5 85 Z"
          fill="#FF5C28"
        />

        {/* Vibrant Orange Pen Nib Droplet Emblem */}
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M79.5 28 C79.5 28 72 38.5 72 47 C72 52.8 75.4 56.5 79.5 56.5 C83.6 56.5 87 52.8 87 47 C87 38.5 79.5 28 79.5 28 Z M79.5 51.5 C77.3 51.5 75.5 49.7 75.5 47.5 C75.5 45.3 77.3 43.5 79.5 43.5 C81.7 43.5 83.5 45.3 83.5 47.5 C83.5 49.7 81.7 51.5 79.5 51.5 Z"
            fill="#FF5C28"
          />
          <line
            x1="79.5"
            y1="29"
            x2="79.5"
            y2="43.5"
            stroke="#08090B"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {LogoMark}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {LogoMark}
      <div className="flex flex-col text-left">
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: '18px',
            fontWeight: 'normal',
            textDecorationLine: 'none',
          }}
          className="tracking-tight text-white group-hover:text-[#FF5C28] transition-colors uppercase leading-none no-underline"
        >
          HEISEMP DESIGNS
        </span>
        {showDescriptor && (
          <span className={`${descriptorSizes} tracking-[0.25em] text-neutral-400 font-medium uppercase mt-1 leading-none`}>
            CREATIVE STUDIO
          </span>
        )}
      </div>
    </div>
  );
};
