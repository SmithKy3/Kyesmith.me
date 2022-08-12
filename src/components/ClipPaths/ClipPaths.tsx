import React from 'react';

import styles from './ClipPaths.module.scss';

export const ClipPaths: React.FC<{}> = () => (
  <svg className={styles.root}>
    <defs>
      <clipPath id="headerBackgroundPath" clipPathUnits="objectBoundingBox">
        <path
          d="M 0,0
            L 1,0
            L 1,1
            L 0.95,1
            Q 0.75,0 0.7,0.5
            T 0.6,1
            L 0,1
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
