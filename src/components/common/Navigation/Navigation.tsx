import React, { PropsWithChildren } from 'react';

import { To, useMatch, useResolvedPath } from 'react-router-dom';
import { rem } from '@mantine/core';
import { Icon as IconType } from '@tabler/icons-react';

import { combineClassNames } from '@/utils/components';
import { Link } from '@/components/common/Link';

import styles from './Navigation.module.css';

export interface NavItemProps {
  icon: IconType;
  to: To;
}

const NAV_ITEM_ICON_SIZE = rem(24);

export const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({
  children,
  icon: Icon,
  to,
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={combineClassNames(
        styles.navItem,
        match && styles.activeNavItem,
      )}
      to={to}
    >
      <Icon style={{ width: NAV_ITEM_ICON_SIZE, height: NAV_ITEM_ICON_SIZE }} />
      <span className={styles.text}>{children}</span>
    </Link>
  );
};

export const Nav: React.FC<PropsWithChildren> = ({ children }) => {
  return <nav className={styles.nav}>{children}</nav>;
};
