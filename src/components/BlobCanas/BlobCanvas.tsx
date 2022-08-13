import React, { useCallback, useMemo, useRef, useState } from 'react';
import type { Mesh, ShaderMaterial } from 'three';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';

import { useDarkModeContext } from '@/contexts/DarkModeContext';
import {
  BlobCanvasMaterial,
  BlobCanvasMaterialProps,
} from './BlobCanvasMaterial';

interface SceneProps {
  isDarkMode: boolean;
  onContextLoss: () => void;
}

export interface BlobCanvasProps {
  className?: string;
}

extend({ BlobCanvasMaterial });

const Scene: React.FC<SceneProps> = ({ isDarkMode, onContextLoss }) => {
  const {
    size: { width, height },
  } = useThree();

  const materialProps = useMemo<BlobCanvasMaterialProps>(
    () => ({
      resolution: [width, height],
    }),
    [width, height]
  );

  const meshRef = useRef<Mesh>();
  useFrame((state, delta) => {
    const currentCanvasContext = state.gl.getContext();
    if (!currentCanvasContext || currentCanvasContext.isContextLost()) {
      onContextLoss();
      return;
    }

    if (!meshRef.current) return;

    const material = meshRef.current.material as ShaderMaterial;
    material.uniforms.time.value += Math.min(1000 * delta, 1e3 / 15);
  });

  return (
    <mesh ref={meshRef}>
      <blobCanvasMaterial {...materialProps} />
    </mesh>
  );
};

export const BlobCanvas: React.FC<BlobCanvasProps> = ({ className }) => {
  const [hasWebglContext, setHasWebglContext] = useState(true);
  const onWebglContextLoss = useCallback(() => {
    setHasWebglContext(false);
  }, []);

  const { isDarkMode } = useDarkModeContext();

  return (
    <div className={className}>
      {hasWebglContext && (
        <Canvas orthographic dpr={2}>
          <Scene isDarkMode={isDarkMode} onContextLoss={onWebglContextLoss} />
        </Canvas>
      )}
    </div>
  );
};
