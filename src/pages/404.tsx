import * as React from 'react';
import { DefaultLayout } from '@layouts/default';
import * as ThorOhThorSections from '@/src/components/page-sections/ThorOhThor';
import { getWarpSpeedController, WarpSpeedController } from 'warpspeed';

class ThorOhThor extends React.Component<{}, {}> {
    private canvasContainerRef = React.createRef<HTMLDivElement>();
    private warpSpeedController: WarpSpeedController | undefined;
 
    public constructor(props: React.PropsWithChildren<{}>) {
        super(props);

        const isSSR = typeof window === 'undefined';
        if (!isSSR) {
            this.warpSpeedController = getWarpSpeedController();
        }
    }

    public componentDidMount() {
        if (!this.canvasContainerRef?.current || !this.warpSpeedController) return;

        this.warpSpeedController.mountCanvasTo(this.canvasContainerRef.current);
        this.warpSpeedController.render();
    }

    public componentWillUnmount() {
        if (!this.warpSpeedController) return;

        this.warpSpeedController.dismountCanvas();
    }

    public render() {
        return (
            <DefaultLayout pageName="404">
                <ThorOhThorSections.CanvasContainer
                    ref={this.canvasContainerRef}
                    onClick={() => window.location.href = '/'}
                >
                    <ThorOhThorSections.Text>Looks like you're lost... click this to go back</ThorOhThorSections.Text>
                </ThorOhThorSections.CanvasContainer>
            </DefaultLayout>
        );
    }
}

export default ThorOhThor;