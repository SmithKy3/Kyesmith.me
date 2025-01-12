import React, { CSSProperties } from 'react';

import { Image } from '@mantine/core';

export interface M3terIconProps {
  style?: CSSProperties;
}

export const M3terIcon: React.FC<M3terIconProps> = (props) => (
  <Image src="/img/m3ter-short.svg" {...props} />
);
