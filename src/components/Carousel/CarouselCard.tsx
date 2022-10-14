import React from 'react';

import styles from './CarouselCard.module.scss';

interface CarouselCardProps {
  width: number;
  padding: number;
  children?: React.ReactNode;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
  width,
  padding,
  children,
}) => {
  return (
    <div
      className={styles.carouselCard}
      style={{ width: `${width}px`, padding: `0 ${padding}px` }}
    >
      {children}
    </div>
  );
};
