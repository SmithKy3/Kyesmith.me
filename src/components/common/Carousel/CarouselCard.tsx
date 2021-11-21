import React from 'react';

import styles from './CarouselCard.module.scss';

interface CarouselCardProps {
  width: number;
  padding: number;
}

export const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  return (
    <div
      className={styles.carouselCard}
      style={{ width: `${props.width}px`, padding: `0 ${props.padding}px` }}
    >
      {props.children}
    </div>
  );
};
