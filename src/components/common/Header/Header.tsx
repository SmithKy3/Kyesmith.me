import React, { useCallback } from 'react';

import {
  AppShell,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

// import { Nav, NavItem } from '@/components/common/Navigation/Navigation';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  const isLightMode = computedColorScheme === 'light';
  const toggleColorScheme = useCallback(() => {
    setColorScheme(isLightMode ? 'dark' : 'light');
  }, [isLightMode, setColorScheme]);

  return (
    <AppShell.Header className={styles.header}>
      {/* <Nav>
        <NavItem icon="🏠" to="/">
          Home
        </NavItem>
        <NavItem icon="💼" to="/projects">
          Projects
        </NavItem>
      </Nav> */}
      <div className={styles.actions}>
        <Switch
          checked={isLightMode}
          classNames={{
            trackLabel: styles.colorModeLabel,
          }}
          onChange={toggleColorScheme}
          offLabel="🌕"
          onLabel="☀️"
          size="lg"
        />
      </div>
    </AppShell.Header>
  );
};
