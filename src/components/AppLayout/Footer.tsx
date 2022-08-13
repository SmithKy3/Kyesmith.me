import { combineClassNames } from '@/utils/components';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.wrapper}>
    <div className={styles.iconsWrapper}>
      <a
        className={styles.link}
        href="https://github.com/SmithKy3"
        target="_blank"
      >
        <FaGithub
          className={combineClassNames(styles.icon, styles.githubIcon)}
        />
      </a>
      <a
        className={styles.link}
        href="https://uk.linkedin.com/in/kye-smith-121429165"
        target="_blank"
      >
        <FaLinkedin
          className={combineClassNames(styles.icon, styles.linkedinIcon)}
        />
      </a>
    </div>
  </footer>
);
