import * as React from 'react';
import styled from 'styled-components';
import { getWarpSpeedController, WarpSpeedController } from 'warpspeed';

const CanvasContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    margin: 2rem auto;

    #warpSpeedCanvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export class WarpSpeedCanvas extends React.Component<{}, {}> {
    private canvasContainerRef = React.createRef<HTMLDivElement>();
    private warpSpeedController: WarpSpeedController | undefined;

    public constructor(props: React.PropsWithChildren<{}>) {
        super(props);

        const isSSR = typeof window === 'undefined';
        if (!isSSR) this.warpSpeedController = getWarpSpeedController();
    }

    public componentDidMount() {
        if (!this.warpSpeedController || !this.canvasContainerRef.current) return;

        this.warpSpeedController.mountCanvasTo(this.canvasContainerRef.current);
        this.warpSpeedController.render();
    }

    public componentWillUnmount() {
        this.warpSpeedController && this.warpSpeedController.dismountCanvas();
    }

    public render() {
        return (
            <CanvasContainer ref={this.canvasContainerRef} />
        );
    }
}