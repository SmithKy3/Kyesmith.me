import React from 'react';
import styled from 'styled-components';

import { throttle } from 'helpers/throttle';
import {
  containerStyles,
  shadowStyles,
} from 'assets/css-in-js/components/fancyContainer';

interface FanycyContainerProps {
  className?: string;
}
interface FancyContainerState {
  shadowStyles: React.CSSProperties;
}

const Container = styled.div`
  ${containerStyles}
`;

const Shadow = styled.div`
  ${shadowStyles}
`;

export class FancyContainer extends React.Component<
  FanycyContainerProps,
  FancyContainerState
> {
  private shadowRef = React.createRef<HTMLDivElement>();

  constructor(props: FanycyContainerProps) {
    super(props);

    this.state = {
      shadowStyles: {},
    };
  }

  public componentDidMount() {
    window.addEventListener('mousemove', (event) =>
      this.updateShadowPosition(event)
    );
  }

  public componentWillUnmount() {
    window.removeEventListener('mousemove', (event) =>
      this.updateShadowPosition(event)
    );
  }

  private _updateShadowPosition(event: MouseEvent): void {
    let x = 0;
    let y = 0;

    if (this.shadowRef.current) {
      const shadowBounds = this.shadowRef.current.getBoundingClientRect();
      const shadowCenter = {
        x: shadowBounds.left + 0.5 * shadowBounds.width,
        y: shadowBounds.top + 0.5 * shadowBounds.height,
      };

      x = 0.1 * (shadowCenter.x - event.clientX);
      if (Math.abs(x) > 0.25 * shadowBounds.width) {
        x = Math.sign(x) * 0.25 * shadowBounds.width;
      }

      y = 0.1 * (shadowCenter.y - event.clientY);
      if (Math.abs(y) > 0.25 * shadowBounds.height) {
        y = Math.sign(y) * 0.25 * shadowBounds.height;
      }
    }

    const shadowStyles: React.CSSProperties = {
      transform: `translate3d(${x}px, ${y}px, 0px)`,
    };
    this.setState({ ...this.state, shadowStyles });
  }
  private updateShadowPosition = throttle(this._updateShadowPosition, 100);

  public render() {
    return (
      <Container className={this.props.className}>
        <Shadow style={this.state.shadowStyles} ref={this.shadowRef} />
        {this.props.children}
      </Container>
    );
  }
}
