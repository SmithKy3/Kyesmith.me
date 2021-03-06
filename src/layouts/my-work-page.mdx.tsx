import * as React from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header } from '@/src/components/Header';
import styled, { ThemeProvider } from 'styled-components';
import theme from "@assets/styled-theme.json";
import { ArrowLeftSquareFill } from '@styled-icons/bootstrap';

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

    h1, h2, h3, h4, h5, h6, p, a {
        color: var(--color--main);
    }

    h2 {
        margin: 0 auto 1.5rem;
        text-align: left;
        text-decoration: underline;
        font-size: 24px;
    }

    h4 {
        margin: 0 auto 1.5rem;
        text-align: left;
        font-size: 16px;
        font-weight: 100;
        font-style: italic;
    }

    p {
        line-height: 2.5;
        margin: .5rem auto;
    }

    a:not(#back-button) {
        text-decoration: none;
        font-weight: bolder;
        padding: 0 .5rem;
        background-color: var(--color--main);
        color: var(--color--background);

        svg { 
            width: 20px;
            height: 20px;
            margin: 0 2px;
            fill: var(--color--background);
        }

        &:hover, &:active {
            color: var(--color--accent);

            svg {
                fill: var(--color--accent);
            }
        }
    }

    > ul {
        font-size: 16px;

        ul {
            padding-left: 1rem;
        }
    }

    hr {
        margin: 1rem 0;
    }
`;

const BackButton = styled.a`
    display: block;
    width: max-content;
    margin: 0 auto 3rem 0;
    background: none;

    &:hover {
        svg {
            fill: var(--color--accent);
        }
    }

    svg {
        width: 40px;
        height: 40px;
        margin-right: 2px;
        fill: var(--color--main);
    }
`;

type WorkPageProps = PageProps & {
    pageContext: {
        frontmatter: Record<string, string>;
    }
};

const WorkPageLayout: React.FC<WorkPageProps> = (props) => {
    const { frontmatter } = props.pageContext;
    console.log(frontmatter);
    return (
        <ThemeProvider theme={theme}>
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            >
                <title>{frontmatter.title || 'KyeSmith.me - my work'}</title>
                <meta name="description" content={frontmatter.description || ''}/>
                <meta name="keywords" content={`${frontmatter.keywords},kye,smith` || 'kye,smith'}/>
            </Helmet>
            <Header />
            <Main>
                <BackButton id="back-button" href="/#my-work"><ArrowLeftSquareFill /></BackButton>
                { props.children }
            </Main>
        </ThemeProvider>
    );
};

export default WorkPageLayout;
