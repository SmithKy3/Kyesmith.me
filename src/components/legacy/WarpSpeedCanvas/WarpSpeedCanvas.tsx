import React, { createRef, useEffect, useRef } from 'react';

import { getWarpSpeedController, WarpSpeedController } from 'warpspeed';

import { combineClassNames } from '@/utils/components';

import styles from './WarpSpeedCanvas.module.css';

export interface WarpSpeedCanvasProps {
  children?: React.ReactNode;
  className?: string;
}

export const WarpSpeedCanvas: React.FC<WarpSpeedCanvasProps> = ({
  children,
  className,
}) => {
  const canvasContainerRef = createRef<HTMLDivElement>();
  const warpspeedController = useRef<WarpSpeedController>();

  useEffect(() => {
    if (canvasContainerRef.current && typeof window !== 'undefined') {
      warpspeedController.current = getWarpSpeedController();
      warpspeedController.current.mountCanvasTo(canvasContainerRef.current);
      warpspeedController.current.render();
    }

    return () => warpspeedController.current?.dismountCanvas();
  }, [warpspeedController, canvasContainerRef]);

  return (
    <div
      className={combineClassNames(className, styles.canvas)}
      ref={canvasContainerRef}
    >
      <div className={styles.overlay}>{children}</div>
    </div>
  );
};
