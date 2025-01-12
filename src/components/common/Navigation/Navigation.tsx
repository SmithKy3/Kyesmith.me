import React, { PropsWithChildren } from 'react';

import { To, useMatch, useResolvedPath } from 'react-router-dom';

import { combineClassNames } from '@/utils/components';
import { Link } from '@/components/common/Link';

import styles from './Navigation.module.css';

export interface NavItemProps {
  icon: string;
  to: To;
}

export const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({
  children,
  icon,
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
      <span className={styles.navItemIcon}>{icon}</span>
      <span className={styles.text}>{children}</span>
    </Link>
  );
};

export const Nav: React.FC<PropsWithChildren> = ({ children }) => {
  return <nav className={styles.nav}>{children}</nav>;
};
