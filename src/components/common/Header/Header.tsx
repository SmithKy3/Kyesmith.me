import React, { useCallback } from 'react';

import {
  AppShell,
  rem,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconBriefcaseFilled,
  IconBrightness,
  IconBrightnessOff,
  IconHomeFilled,
} from '@tabler/icons-react';

import { Nav, NavItem } from '@/components/common/Navigation';

import styles from './Header.module.css';

const COLOR_SCHEME_ICON_SIZE = rem(24);

export const Header: React.FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  const isLightMode = computedColorScheme === 'light';
  const toggleColorScheme = useCallback(() => {
    setColorScheme(isLightMode ? 'dark' : 'light');
  }, [isLightMode, setColorScheme]);

  return (
    <AppShell.Header className={styles.header}>
      <Nav>
        <NavItem icon={IconHomeFilled} to="/">
          Home
        </NavItem>
        <NavItem icon={IconBriefcaseFilled} to="/projects">
          Projects
        </NavItem>
      </Nav>
      <div className={styles.actions}>
        <Switch
          checked={isLightMode}
          onChange={toggleColorScheme}
          offLabel={
            <IconBrightnessOff
              style={{
                width: COLOR_SCHEME_ICON_SIZE,
                height: COLOR_SCHEME_ICON_SIZE,
              }}
            />
          }
          onLabel={
            <IconBrightness
              style={{
                width: COLOR_SCHEME_ICON_SIZE,
                height: COLOR_SCHEME_ICON_SIZE,
              }}
            />
          }
          size="lg"
        />
      </div>
    </AppShell.Header>
  );
};
