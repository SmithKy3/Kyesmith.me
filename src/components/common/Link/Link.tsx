import React, { PropsWithChildren } from 'react';

import { Link as RouterLink, To } from 'react-router-dom';
import { Anchor } from '@mantine/core';

export interface LinkProps {
  className?: string;
  to: To;
}

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  className,
  to,
}) => {
  return (
    <Anchor classNames={{ root: className }} component={RouterLink} to={to}>
      {children}
    </Anchor>
  );
};
