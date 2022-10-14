import React, { useMemo, useRef } from 'react';
import type { Mesh, ShaderMaterial } from 'three';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';

import { useDarkModeContext } from '@/contexts/DarkModeContext';
import { DarkColorGradientMaterial } from './DarkColorGradientMaterial';
import { LightColorGradientMaterial } from './LightColorGradientMaterial';

interface SceneProps {
  isDarkMode: boolean;
}

extend({ DarkColorGradientMaterial, LightColorGradientMaterial });

const Scene: React.FC<SceneProps> = ({ isDarkMode }) => {
  const {
    size: { width, height },
  } = useThree();
  const xSegmentCount = useMemo(() => Math.floor(width * 0.1), [width]);
  const ySegmentCount = useMemo(() => Math.floor(height * 0.1), [height]);
  const planeArgs = useMemo<[number, number, number, number]>(
    () => [width, height, xSegmentCount, ySegmentCount],
    [width, height, xSegmentCount, ySegmentCount]
  );

  const meshRef = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) {
      return;
    }

    const material = meshRef.current.material as ShaderMaterial;
    material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={planeArgs} />
      {isDarkMode ? (
        <darkColorGradientMaterial />
      ) : (
        <lightColorGradientMaterial />
      )}
    </mesh>
  );
};

export interface ColorGradientCanvasProps {
  className?: string;
}

export const ColorGradientCanvas: React.FC<ColorGradientCanvasProps> = ({
  className,
}) => {
  const { isDarkMode } = useDarkModeContext();

  return (
    <div className={className}>
      <Canvas orthographic>
        <Scene isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
};
