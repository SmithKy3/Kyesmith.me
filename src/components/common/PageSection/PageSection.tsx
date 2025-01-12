import React, { PropsWithChildren, useMemo } from 'react';

import { Paper, useComputedColorScheme } from '@mantine/core';

import styles from './PageSection.module.css';

export interface PageSectionProps {
  variant?: 'alternate' | 'default';
}

export const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({
  children,
  variant = 'default',
}) => {
  const computedColorScheme = useComputedColorScheme();
  const bg = useMemo(() => {
    if (variant === 'alternate') {
      return computedColorScheme === 'light' ? 'gray.0' : 'dark.8';
    }
    return undefined;
  }, [computedColorScheme, variant]);

  return (
    <Paper bg={bg} className={styles.wrapper}>
      {children}
    </Paper>
  );
};
