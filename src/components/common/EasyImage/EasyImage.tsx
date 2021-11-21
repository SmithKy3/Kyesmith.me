import React from 'react';

import styles from './EasyImage.module.scss';

interface EasyImageProps {
  imgFileName: string;
}

export const EasyImage: React.FC<EasyImageProps> = ({ imgFileName }) => {
  return <img src={`/img/${imgFileName}`} className={styles.image} />;
};
