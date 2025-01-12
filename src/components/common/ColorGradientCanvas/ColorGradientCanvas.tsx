import React, { useMemo, useRef } from 'react';

import { Mesh, ShaderMaterial } from 'three';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useComputedColorScheme } from '@mantine/core';

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
  const widthSegments = useMemo(() => Math.floor(width * 0.1), [width]);
  const heightSegments = useMemo(() => Math.floor(height * 0.1), [height]);
  const planeArgs = useMemo<[number, number, number, number]>(
    () => [width, height, widthSegments, heightSegments],
    [width, height, widthSegments, heightSegments],
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
  const computedColorScheme = useComputedColorScheme();

  return (
    <div className={className}>
      <Canvas orthographic>
        <Scene isDarkMode={computedColorScheme === 'dark'} />
      </Canvas>
    </div>
  );
};
