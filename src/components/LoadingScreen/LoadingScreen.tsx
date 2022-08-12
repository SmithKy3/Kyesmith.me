import React from 'react';

import styles from './LoadingScreen.module.scss';

export const LoadingScreen: React.FC = () => (
  <div className={styles.wrapper}>
    <span className={styles.spinner} />
  </div>
);
