import * as React from 'react';
import { Header } from '@/src/components/Header';
import styled, { ThemeProvider } from 'styled-components';
import theme from "@assets/styled-theme.json";

interface DefaultLayoutProps {
    pageName: string;
}

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

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Main>
                { props.children }
            </Main>
        </ThemeProvider>
    );
};
