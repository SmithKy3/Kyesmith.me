import React, { createRef, useEffect, useRef } from 'react';
import { getWarpSpeedController, WarpSpeedController } from 'warpspeed';

import styles from './WarpSpeedCanvas.module.scss';

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
    <div className={styles.container} ref={canvasContainerRef}>
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};
