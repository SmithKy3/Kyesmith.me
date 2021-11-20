import React from 'react';

export const ClipPaths: React.FC<{}> = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath
        id="desktopHeaderBackgroundPath"
        clipPathUnits="objectBoundingBox"
      >
        <path
          d="M 0,0
            L 1,0
            L 1,0.3
            Q 0.875,0.5 0.75,0.3
            T 0.5,0.3
            Q 0.15,1 0,1
            Z"
        />
      </clipPath>

      <clipPath
        id="mobileHeaderBackgroundPath"
        clipPathUnits="objectBoundingBox"
      >
        <path
          d="M 0,0
            L 1,0
            L 1,0.5
            Q 0.875,0.75 0.75,0.5
            T 0,1
            Z"
        />
      </clipPath>

      <clipPath id="blob" clipPathUnits="objectBoundingBox">
        <path
          d="M 0.4,0
            C 0.55,0 1,0.22 1,0.5
            S 0.91,1 0.5,1
            C 0.27,1 0.05,0.77 0.1,0.5
            S 0.3,0 0.4,0
            Z"
        />
      </clipPath>
    </defs>
  </svg>
);
