import React from 'react';

import { combineClassNames } from '@/utils/components';
import { WarpSpeedCanvas } from '@/components/WarpSpeedCanvas';
import { BlockLink } from '@/components/BlockLink/BlockLink';

import styles from './NotFound.module.scss';

export const NotFound: React.FC = () => (
  <WarpSpeedCanvas className={styles.canvas}>
    <div className={styles.textWrapper}>
      <p className={combineClassNames(styles.text, styles.text404)}>404</p>
      <p className={styles.text}>
        Looks like you're lost, let's get you{' '}
        <BlockLink href="https:kyesmith.me">home</BlockLink>
      </p>
    </div>
  </WarpSpeedCanvas>
);
