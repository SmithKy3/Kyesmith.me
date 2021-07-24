import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { HeaderLightningBolt, LightModeIcon, DarkModeIcon } from "./icons";
import * as DarkMode from "helpers/dark-mode";

interface HeaderState {
  isDarkModeEnabled: boolean;
}

const HeaderContainer = styled.header`
  display: block;
  position: relative;
  width: 100%;
  height: max-content;
  padding: 2rem 0;
`;

const HeaderText = styled.h1`
  display: block;
  width: max-content;
  margin: 0 auto 0 0.5rem;
  font-size: 32px;
  font-weight: 500;
  color: var(--color--main);

  @media (min-width: ${(props) => props.theme.screenSizes.small}) {
    margin: auto;
  }

  span {
    color: var(--color--accent);
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;

    svg {
      fill: var(--color--accent);
    }

    &:hover {
      color: var(--color--accentAlt);

      svg {
        fill: var(--color--accentAlt);
      }
    }
  }
`;

export const Header: React.FC<{}> = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      const initialDarkModeState = DarkMode.getState();
      setIsDarkMode(initialDarkModeState);
      DarkMode.applyDarkModeState(initialDarkModeState);
    }
  }, [setIsDarkMode]);

  const toggleDarkMode = useCallback(() => {
    const newDarkModeState = DarkMode.toggleState();
    setIsDarkMode(newDarkModeState);
  }, []);

  return (
    <HeaderContainer>
      <HeaderText>
        <Link href="/">
          <span>
            Kye Smith <HeaderLightningBolt />
          </span>
        </Link>
      </HeaderText>
      <LightModeIcon isHidden={isDarkMode} onClick={toggleDarkMode} />
      <DarkModeIcon isHidden={!isDarkMode} onClick={toggleDarkMode} />
    </HeaderContainer>
  );
};
