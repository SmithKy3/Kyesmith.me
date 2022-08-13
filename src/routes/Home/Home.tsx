import React from 'react';

import { ColorGradientCanvas } from '@/components/ColorGradientCanvas';
import { Rubiks } from '@/components/Rubiks/';

import styles from './Home.module.scss';

const rubiksFaceColors = [
  'var(--color--accent)',
  'var(--color--accentAlt)',
  'var(--color--primary)',
];

export const Home: React.FC = () => (
  <React.Fragment>
    <ColorGradientCanvas className={styles.backdrop} />
    <h1 className={styles.heading}>
      <span>Kye Smith</span>
      <Rubiks
        className={styles.rubiks}
        faceColors={rubiksFaceColors}
        whileHover={{
          scale: [1, 1, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          duration: 1,
        }}
      />
    </h1>
    <h2 className={styles.subheading}>Frontend Developer</h2>
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutCard}>
        <p>
          Currently working for{' '}
          <a className={styles.m3terLink} href="https://m3ter.com">
            m3ter
          </a>
          , solving the problems that come with usage-based pricing and creating
          some awesome tools with some really clever folks.
        </p>
      </div>
      <div className={styles.aboutCard}>
        <p>
          I previously worked for Wren Kitchens, helping update their homegrown
          kitchen-planning, CAD-based, web app, and I spent some time with a
          great UK eCommerce agency building bespoke, multi-language BigCommerce
          themes &amp; apps.
        </p>
      </div>
      <div className={styles.aboutCard}>
        <p>
          I also think a Rubik's cube is an underrated little gizmo nowadays.
        </p>
      </div>
    </div>
  </React.Fragment>
);
