import React, { useMemo, useRef } from 'react';
import type { Mesh, ShaderMaterial } from 'three';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';

import { combineClassNames } from '@/utils/components';
import { useDarkModeContext } from '@/contexts/DarkModeContext';
import {
  DarkColorGradientMaterial,
  DarkColorGradientMaterialProps,
} from './DarkColorGradientMaterial';
import {
  LightColorGradientMaterial,
  LightColorGradientMaterialProps,
} from './LightColorGradientMaterial';

import styles from './ColorGradientCanvas.module.scss';

export interface ColorGradientCanvasProps {
  className?: string;
}

type MaterialProps =
  | DarkColorGradientMaterialProps
  | LightColorGradientMaterialProps;

extend({ DarkColorGradientMaterial, LightColorGradientMaterial });

const CanvasInner: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const {
    size: { width, height },
  } = useThree();
  const xSegmentCount = useMemo(() => Math.floor(width * 0.2), [width]);
  const ySegmentCount = useMemo(() => Math.floor(height * 0.2), [height]);
  const uvNorm = useMemo(() => {
    const temp = new Array<number>();
    for (let e = 0; e <= ySegmentCount; e++) {
      for (let t = 0; t <= xSegmentCount; t++) {
        const i = e * (xSegmentCount + 1) + t;
        temp[2 * i] = (t / xSegmentCount) * 2 - 1;
        temp[2 * i + 1] = 1 - (e / ySegmentCount) * 2;
      }
    }

    return Float32Array.from(temp);
  }, [xSegmentCount, ySegmentCount]);

  const planeArgs = useMemo<[number, number, number, number]>(
    () => [width, height, xSegmentCount, ySegmentCount],
    [width, height, xSegmentCount, ySegmentCount]
  );
  const uvNormBufferAttributeArgs = useMemo<[Float32Array, number]>(
    () => [uvNorm, 2],
    [uvNorm]
  );
  const materialProps = useMemo<MaterialProps>(
    () => ({
      resolution: [width, height],
    }),
    [width, height]
  );

  const meshRef = useRef<Mesh>();
  useFrame((_, delta) => {
    if (!meshRef.current) return;

    const material = meshRef.current.material as ShaderMaterial;
    material.uniforms.time.value += Math.min(1000 * delta, 1e3 / 15);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={planeArgs}>
        <bufferAttribute
          attachObject={['attributes', 'uvNorm']}
          args={uvNormBufferAttributeArgs}
        />
      </planeGeometry>
      {isDarkMode ? (
        <darkColorGradientMaterial {...materialProps} />
      ) : (
        <lightColorGradientMaterial {...materialProps} />
      )}
    </mesh>
  );
};

export const ColorGradientCanvas: React.FC<ColorGradientCanvasProps> = ({
  className,
}) => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <div className={combineClassNames(styles.wrapper, className)}>
      <Canvas orthographic dpr={2}>
        <CanvasInner isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
};
