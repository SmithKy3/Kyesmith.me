import React from 'react';
import { motion, MotionProps } from 'framer-motion';

import { combineClassNames } from '@/utils/components';

import styles from './Card.module.scss';

export interface CardProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  ...motionProps
}) => (
  <motion.div
    className={combineClassNames(styles.card, className)}
    {...motionProps}
  >
    {children}
  </motion.div>
);
