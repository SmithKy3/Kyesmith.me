import React, { createRef, useEffect, useRef } from "react";
import { NextLayoutPage } from "next";
import Head from "next/head";
import { getWarpSpeedController, WarpSpeedController } from "warpspeed";

import { DefaultLayout } from "components/layouts/Default";
import * as ThorOhThorSections from "components/page-sections/ThorOhThor";

const FourOFour: NextLayoutPage = () => {
  const canvasContainerRef = createRef<HTMLDivElement>();
  const warpspeedController = useRef<WarpSpeedController>();

  useEffect(() => {
    if (canvasContainerRef.current && typeof window != "undefined") {
      warpspeedController.current = getWarpSpeedController();
      warpspeedController.current.mountCanvasTo(canvasContainerRef.current);
      warpspeedController.current.render();

      return () => warpspeedController.current?.dismountCanvas();
    }
  }, [warpspeedController, canvasContainerRef]);

  return (
    <>
      <Head>
        <title>This is not the page you're looking for...</title>
        <meta name="keywords" content={"kye,smith,404"} />
      </Head>
      <ThorOhThorSections.CanvasContainer
        ref={canvasContainerRef}
        onClick={() => (window.location.href = "/")}
      >
        <ThorOhThorSections.Text>
          Looks like you're lost... click this to go back
        </ThorOhThorSections.Text>
      </ThorOhThorSections.CanvasContainer>
    </>
  );
};

FourOFour.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
export default FourOFour;
