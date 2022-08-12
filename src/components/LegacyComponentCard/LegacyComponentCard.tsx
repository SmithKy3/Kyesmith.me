import React, { useCallback, useState, ReactNode } from 'react';

import { combineClassNames } from '@/utils/components';
import { BlockLink } from '@/components/BlockLink/BlockLink';
import { LegacyComponentCodeBlock } from '@/components/LegacyComponentCodeBlock';

import styles from './LegacyComponentCard.module.scss';

export interface LegacyComponentCardProps {
  componentCode: string;
  componentCodeLink: string;
  componentDemo: ReactNode;
  description: string;
  title: string;
}

enum CardTabs {
  Code = 'CODE',
  Demo = 'DEMO',
}

export const LegacyComponentCard: React.FC<LegacyComponentCardProps> = ({
  componentCode,
  componentCodeLink,
  componentDemo,
  description,
  title,
}) => {
  const [activeTab, setActiveTab] = useState<CardTabs>(CardTabs.Demo);
  const onDemoTabClick = useCallback(() => {
    setActiveTab(CardTabs.Demo);
  }, []);
  const onCodeTabClick = useCallback(() => {
    setActiveTab(CardTabs.Code);
  }, []);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHeader}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.title}>{title}</h4>
        </div>
        <div>
          <button
            className={combineClassNames(
              styles.tab,
              activeTab === CardTabs.Demo && styles.activeTab
            )}
            onClick={onDemoTabClick}
          >
            Demo
          </button>
          <button
            className={combineClassNames(
              styles.tab,
              activeTab === CardTabs.Code && styles.activeTab
            )}
            onClick={onCodeTabClick}
          >
            Code
          </button>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.description}>
          {description}
          <br />
          <br />
          View the full source code and styling on{' '}
          <BlockLink openInNewTab href={componentCodeLink}>
            GitHub
          </BlockLink>
          .
        </p>
        <div>
          {activeTab === CardTabs.Demo && componentDemo}
          {activeTab === CardTabs.Code && (
            <LegacyComponentCodeBlock componentCode={componentCode} />
          )}
        </div>
      </div>
    </div>
  );
};
