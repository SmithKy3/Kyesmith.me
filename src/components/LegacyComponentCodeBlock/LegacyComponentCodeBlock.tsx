import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import darkStyles from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import lightStyles from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';

import { useDarkModeContext } from '@/contexts/DarkModeContext';

import styles from './LegacyComponentCodeBlock.module.scss';

export interface LegacyComponentCodeBlockProps {
  componentCode: string;
}

const syntaxHighlighterCustomStyles: React.CSSProperties = {
  background: 'transparent',
  fontSize: '12px',
};

export const LegacyComponentCodeBlock: React.FC<
  LegacyComponentCodeBlockProps
> = ({ componentCode }) => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <div className={styles.wrapper}>
      <SyntaxHighlighter
        language="typescript"
        style={isDarkMode ? darkStyles : lightStyles}
        customStyle={syntaxHighlighterCustomStyles}
      >
        {componentCode}
      </SyntaxHighlighter>
    </div>
  );
};
