import React from 'react';

import { throttle } from '@/utils/throttle';
import { combineClassNames } from '@/utils/components';

import styles from './FancyContainer.module.scss';

interface FanycyContainerProps {
  className?: string;
}
interface FancyContainerState {
  shadowStyles: React.CSSProperties;
}

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
      <div
        className={combineClassNames(this.props.className, styles.container)}
      >
        <div
          className={styles.shadow}
          style={this.state.shadowStyles}
          ref={this.shadowRef}
        />
        {this.props.children}
      </div>
    );
  }
}
