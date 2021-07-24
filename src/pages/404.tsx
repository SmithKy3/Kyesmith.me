import React, { createRef, useEffect, useMemo } from 'react';
import { NextLayoutPage } from 'next';
import Head from 'next/head';
import { getWarpSpeedController } from 'warpspeed';

import { DefaultLayout } from 'components/layouts/Default';
import * as ThorOhThorSections from 'components/page-sections/ThorOhThor';

const FourOFour: NextLayoutPage = () => {
    const canvasContainerRef = createRef<HTMLDivElement>();
    const warpspeedController = useMemo(() => getWarpSpeedController(), []);

    useEffect(() => {
        if (canvasContainerRef.current) {
            warpspeedController.mountCanvasTo(canvasContainerRef.current);
            warpspeedController.render();

            return () => warpspeedController.dismountCanvas();
        }
    }, [warpspeedController, canvasContainerRef]);

    return (
        <>
            <Head>
                <title>This is not the page you're looking for...</title>
                <meta name="keywords" content={'kye,smith,404'}/>
            </Head>
            <ThorOhThorSections.CanvasContainer
                ref={canvasContainerRef}
                onClick={() => window.location.href = '/'}
            >
                <ThorOhThorSections.Text>Looks like you're lost... click this to go back</ThorOhThorSections.Text>
            </ThorOhThorSections.CanvasContainer>
        </>
    );
}

FourOFour.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>
export default FourOFour;