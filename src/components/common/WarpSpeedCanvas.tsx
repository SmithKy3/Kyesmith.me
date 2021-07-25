import React, { createRef, useEffect, useRef } from 'react';
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
    z-index: 1;
  }
`;

const ChildrenLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const WarpSpeedCanvas: React.FC<{}> = ({ children }) => {
  const canvasContainerRef = createRef<HTMLDivElement>();
  const warpspeedController = useRef<WarpSpeedController>();

  useEffect(() => {
    if (canvasContainerRef.current && typeof window != 'undefined') {
      warpspeedController.current = getWarpSpeedController();
      warpspeedController.current.mountCanvasTo(canvasContainerRef.current);
      warpspeedController.current.render();

      return () => warpspeedController.current?.dismountCanvas();
    }
  }, [warpspeedController, canvasContainerRef]);

  return (
    <CanvasContainer ref={canvasContainerRef}>
      <ChildrenLayer>{children}</ChildrenLayer>
    </CanvasContainer>
  );
};
