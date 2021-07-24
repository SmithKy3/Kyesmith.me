import React from 'react';
import styled from 'styled-components';
import { throttle } from 'helpers/throttle';

interface FanycyContainerProps {
    className?: string;
}
interface FancyContainerState {
    shadowStyles: React.CSSProperties;
}

const Container = styled.div`
    position: relative;
    width: 0;
    height: 0;
    margin: 0;
    background-color: var(--color--background);
    border: 2px solid var(--color--main);
`;

const Shadow = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: var(--color--main);
    opacity: 0.25;
    will-change: transform;
    transition: transform .3s;
`;

export class FancyContainer extends React.Component<FanycyContainerProps, FancyContainerState> {
    private ref = React.createRef<HTMLDivElement>();

    constructor(props: FanycyContainerProps) {
        super(props);

        this.state = {
            shadowStyles: {}
        }
    }

    public componentDidMount() {
        window.addEventListener('mousemove', (event) => this.updateShadowPosition(event));
    }

    public componentWillUnmount() {
        window.removeEventListener('mousemove', (event) => this.updateShadowPosition(event));
    }

    private _updateShadowPosition(event: MouseEvent): void {
        let x = 0;
        let y = 0;

        if (this.ref?.current) {
            const containerBounds = this.ref.current.getBoundingClientRect();
            const containerCenter = {
                x: containerBounds.left + (0.5 * containerBounds.width),
                y: containerBounds.top + (0.5 * containerBounds.height),
            };

            x = 0.1 * (containerCenter.x - event.clientX);
            if (Math.abs(x) > 0.25 * containerBounds.width) {
                x = Math.sign(x) * 0.25 * containerBounds.width;
            }

            y = 0.1 * (containerCenter.y - event.clientY);
            if (Math.abs(y) > 0.25 * containerBounds.height) {
                y = Math.sign(y) * 0.25 * containerBounds.height
            }
        }

        const shadowStyles: React.CSSProperties = {
            transform: `translate3d(${x}px, ${y}px, 0px)`
        };
        this.setState({ ...this.state, shadowStyles });
    }
    private updateShadowPosition = throttle(this._updateShadowPosition, 100);

    public render() {
        return (
            <Container className={this.props.className || ''}>
                <Shadow style={this.state.shadowStyles} ref={this.ref}/>
                {this.props.children}
            </Container>
        );
    }
}