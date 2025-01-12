import React, { useEffect, useMemo, useRef } from 'react';

import { getWarpSpeedController } from 'warpspeed';

import styles from './404.module.css';

export const NotFoundRoute: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wrapspeedController = useMemo(() => getWarpSpeedController(), []);

  useEffect(() => {
    if (ref.current) {
      wrapspeedController.mountCanvasTo(ref.current);
      wrapspeedController.render();
    }

    return () => {
      wrapspeedController.dismountCanvas();
    };
  }, [wrapspeedController]);

  return <div className={styles.canvasWrapper} ref={ref} />;
};
