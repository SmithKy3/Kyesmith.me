import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { ArrowLeftSquareFill } from '@styled-icons/bootstrap';

import { Header } from 'components/common/Header';

import theme from 'assets/styled-theme.json';
import { backButtonStyles, mainStyles } from 'assets/css-in-js/layouts/myWork';

interface MyWorkMetaProps {
  title: string;
  description: string;
  keywords: string[];
}

const Main = styled.main`
  ${mainStyles}
`;

const BackButton = styled.a`
  ${backButtonStyles}
`;

export const MyWorkMeta: React.FC<MyWorkMetaProps> = ({
  title,
  description,
  keywords,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(',')} />
    </Head>
  );
};

export const MyWorkLayout: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Main>
      <BackButton id="back-button" href="/#my-work">
        <ArrowLeftSquareFill />
      </BackButton>
      {children}
    </Main>
  </ThemeProvider>
);
