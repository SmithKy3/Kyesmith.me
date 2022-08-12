import React from 'react';

import styles from './BlockLink.module.scss';

export interface BlockLinkProps {
  href: string;
  openInNewTab?: boolean;
}

export const BlockLink: React.FC<BlockLinkProps> = ({
  href,
  openInNewTab = false,
  children,
}) => {
  return (
    <a
      target={openInNewTab ? '_blank' : '_self'}
      href={href}
      className={styles.link}
    >
      {children}
    </a>
  );
};
