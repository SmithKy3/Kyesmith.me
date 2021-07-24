import React from 'react';
import { Header } from 'components/Header';
import styled, { ThemeProvider } from 'styled-components';
import theme from "assets/styled-theme.json";

const Main = styled.main`
    width: 100%;
    height: max-content;
    padding: 2rem 5% 5rem;

    @media (min-width: ${props => props.theme.screenSizes.medium}) {
        padding: 2rem 15% 5rem;
    }

    @media (min-width: ${props => props.theme.screenSizes.large}) {
        padding: 2rem 30% 5rem;
    }
`;

export const DefaultLayout: React.FC<{}> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Header />
        <Main>
            {children}
        </Main>
    </ThemeProvider>
);
