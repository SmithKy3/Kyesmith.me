import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header } from 'components/common/Header';

import theme from 'assets/styled-theme.json';
import { mainStyles } from 'assets/css-in-js/layouts/default';

const Main = styled.main`
  ${mainStyles}
`;

export const DefaultLayout: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Main>{children}</Main>
  </ThemeProvider>
);
