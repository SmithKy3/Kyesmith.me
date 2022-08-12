import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

import { combineClassNames } from '@/utils/components';
import { useDarkModeContext } from '@/contexts/DarkModeContext';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <header className={styles.wrapper}>
      <nav className={styles.navWrapper}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            combineClassNames(styles.navLink, isActive && styles.activeNavLink)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            combineClassNames(styles.navLink, isActive && styles.activeNavLink)
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/components"
          className={({ isActive }) =>
            combineClassNames(styles.navLink, isActive && styles.activeNavLink)
          }
        >
          Components
        </NavLink>
      </nav>
      <AnimatePresence>
        {isDarkMode && (
          <motion.button
            className={styles.themeToggleButton}
            onClick={toggleDarkMode}
            initial={{
              top: '2vh',
              right: '-50vh',
            }}
            animate={{
              top: '2vh',
              right: '2vh',
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              top: '-50vh',
              right: '2vh',
              transitionDuration: '1s',
            }}
            whileHover={{ scale: 1.1 }}
          >
            <FaRegLightbulb />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isDarkMode && (
          <motion.button
            className={styles.themeToggleButton}
            onClick={toggleDarkMode}
            initial={{
              top: '2vh',
              right: '-50vh',
            }}
            animate={{
              top: '2vh',
              right: '2vh',
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              top: '-50vh',
              right: '2vh',
              transitionDuration: '1s',
            }}
            whileHover={{ scale: 1.1 }}
          >
            <FaLightbulb />
          </motion.button>
        )}
      </AnimatePresence>
    </header>
  );
};
