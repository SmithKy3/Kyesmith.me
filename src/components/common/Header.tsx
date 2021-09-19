import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Lightning, SunFill, MoonFill } from '@styled-icons/bootstrap';

import { useDarkMode } from 'hooks/useDarkMode';
import {
  containerStyles,
  h1Styles,
  lightningIconStyles,
  moonIconStyles,
  sunIconStyles,
} from 'assets/css-in-js/components/header';

const HeaderContainer = styled.header`
  ${containerStyles}
`;

const HeaderH1 = styled.h1`
  ${h1Styles}
`;

export const LightningIcon = styled(Lightning)`
  ${lightningIconStyles}
`;

export const SunIcon = styled(SunFill)<{ isHidden: boolean }>`
  ${sunIconStyles}
`;

export const MoonIconStyles = styled(MoonFill)<{ isHidden: boolean }>`
  ${moonIconStyles}
`;

export const Header: React.FC<{}> = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <HeaderContainer>
      <HeaderH1>
        <Link href="/">
          <span>
            Kye Smith <LightningIcon />
          </span>
        </Link>
      </HeaderH1>
      <SunIcon isHidden={isDarkMode} onClick={toggleDarkMode} />
      <MoonIconStyles isHidden={!isDarkMode} onClick={toggleDarkMode} />
    </HeaderContainer>
  );
};
