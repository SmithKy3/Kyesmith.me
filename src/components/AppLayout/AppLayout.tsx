import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

import styles from './AppLayout.module.scss';

export interface AppLayoutProps {
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <React.Fragment>
    <Header />
    <main className={styles.contentWrapper}>
      <div className={styles.contentHeaderSpacer} />
      <div className={styles.content}>{children}</div>
    </main>
    <Footer />
  </React.Fragment>
);
