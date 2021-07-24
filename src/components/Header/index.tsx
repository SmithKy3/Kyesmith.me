import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderLightningBolt, LightModeIcon, DarkModeIcon } from './icons';
import * as DarkMode from 'helpers/dark-mode';

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
    margin: 0 auto 0 .5rem;
    font-size: 32px;
    font-weight: 500;
    color: var(--color--main);

    @media(min-width: ${props => props.theme.screenSizes.small}) {
        margin: auto;
    }

    a {
        color: var(--color--accent);
        text-decoration: none;
        transition: color .3s;
        > svg {
            fill: var(--color--accent);
            transition: fill .3s;
        }
    }

    a:hover {
        color: var(--color--accentAlt);
        > svg {
            fill: var(--color--accentAlt);
        }
    }
`;

export class Header extends React.Component<{}, HeaderState> {
    constructor(props: React.PropsWithChildren<{}>) {
        super(props);

        const isSSR = typeof window === 'undefined';
        this.state = {
            isDarkModeEnabled: !isSSR ? DarkMode.getState() : false,
        };
    }

    handleThemeIconClick() {
        const newDarkModeState = DarkMode.toggleState();
        this.setState({
            ...this.state,
            isDarkModeEnabled: newDarkModeState,
        });
    }

    render() {
        return (
            <HeaderContainer>
                <HeaderText>
                    {/* <Link href="/">
                        Kye Smith <HeaderLightningBolt />
                    </Link> */}
                </HeaderText>
                <LightModeIcon isHidden={this.state.isDarkModeEnabled} onClick={() => this.handleThemeIconClick()} />
                <DarkModeIcon isHidden={!this.state.isDarkModeEnabled} onClick={() => this.handleThemeIconClick()} />
            </HeaderContainer>
        );
    }
}
