import React from 'react';
import Link from 'next/link';
import { Lightning, SunFill, MoonFill } from '@styled-icons/bootstrap';

import { useDarkMode } from 'hooks/useDarkMode';

import styles from './Header.module.scss';

export const Header: React.FC<{}> = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.container}>
      <h1 className={styles.mainHeading}>
        <Link href="/">
          <span>
            Kye Smith <Lightning className={styles.lightningIcon} />
          </span>
        </Link>
      </h1>
      <SunFill
        className={`${styles.themeToggleIcon} ${styles.themeToggleIconDark}`}
        onClick={toggleDarkMode}
        style={{
          top: isDarkMode ? '2vh' : '-50vh',
          transform: isDarkMode ? 'none' : 'translateY(-50%)',
        }}
      />
      <MoonFill
        className={`${styles.themeToggleIcon} ${styles.themeToggleIconLight}`}
        onClick={toggleDarkMode}
        style={{
          right: isDarkMode ? '-50vh' : '2vh',
          transform: isDarkMode ? 'translateY(-50%)' : 'none',
        }}
      />
    </header>
  );
};
