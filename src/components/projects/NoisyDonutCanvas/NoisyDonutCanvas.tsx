import React, { useMemo, useRef, useState } from 'react';

import { useMantineTheme } from '@mantine/core';
import {
  BufferAttribute,
  LineSegments,
  Mesh,
  TorusGeometry,
  Vector3,
} from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import Simplex from 'simplex-noise';

import styles from './NoisyDonutCanvas.module.css';

interface SceneProps {
  amplitude: number;
  isPlaying: boolean;
  speed: number;
}

export interface NoisyDonutCanvasProps extends Partial<SceneProps> {}

const Scene: React.FC<SceneProps> = ({ amplitude, isPlaying, speed }) => {
  const theme = useMantineTheme();

  const torusGeometry = useMemo<TorusGeometry>(
    () => new TorusGeometry(10, 5, 50, 100, Math.PI * 2),
    [],
  );
  const originalTorusVertices = useRef<BufferAttribute>();
  const noiseGenerator = useMemo(() => new Simplex(), []);
  const vertexInstance = useMemo(() => new Vector3(), []);
  const normalInstance = useMemo(() => new Vector3(), []);
  const meshRef = useRef<Mesh>(null);
  const wireframeRef = useRef<LineSegments>(null);

  const [hasRunAtLeastOnce, setHasRunAtLeastOnce] = useState(false);
  useFrame(({ clock }) => {
    if (!isPlaying && hasRunAtLeastOnce) {
      return;
    }

    if (!originalTorusVertices.current) {
      originalTorusVertices.current = torusGeometry
        .clone()
        .getAttribute('position') as BufferAttribute;
    }

    const torusNormals = torusGeometry.getAttribute(
      'normal',
    ) as BufferAttribute;
    const newVertexCoordinates = new Array<number>();

    for (
      let vertexIndex = 0;
      vertexIndex < originalTorusVertices.current.count;
      vertexIndex += 1
    ) {
      vertexInstance.fromBufferAttribute(
        originalTorusVertices.current,
        vertexIndex,
      );
      normalInstance.fromBufferAttribute(torusNormals, vertexIndex);

      const timeDisplacement = clock.elapsedTime * speed;
      const noise = noiseGenerator.noise3D(
        vertexInstance.x,
        vertexInstance.y + timeDisplacement,
        vertexInstance.z,
      );
      const normalisedNoise = normalInstance.multiplyScalar(noise * amplitude);

      vertexInstance.add(normalisedNoise);
      vertexInstance.toArray(newVertexCoordinates, newVertexCoordinates.length);
    }

    const currentTorusVertices = torusGeometry.getAttribute(
      'position',
    ) as BufferAttribute;
    currentTorusVertices.set(newVertexCoordinates);
    currentTorusVertices.needsUpdate = true;

    if (meshRef.current && wireframeRef.current) {
      const rotationDiff = speed * 0.01;
      meshRef.current.rotation.x += rotationDiff;
      wireframeRef.current.rotation.x += rotationDiff;
      meshRef.current.rotation.y += rotationDiff;
      wireframeRef.current.rotation.y += rotationDiff;
    }

    if (!hasRunAtLeastOnce) {
      setHasRunAtLeastOnce(true);
    }
  });

  return (
    <React.Fragment>
      <mesh ref={meshRef} geometry={torusGeometry}>
        <meshBasicMaterial
          color={theme.colors[theme.primaryColor][theme.primaryShade as number]}
          polygonOffset
          polygonOffsetFactor={1}
          polygonOffsetUnits={1}
        />
      </mesh>
      <lineSegments ref={wireframeRef} geometry={torusGeometry}>
        <lineBasicMaterial color={theme.white} />
      </lineSegments>
    </React.Fragment>
  );
};

const CAMERA_PROPS = { position: new Vector3(0, 0, 25) };

export const NoisyDonutCanvas: React.FC<NoisyDonutCanvasProps> = ({
  amplitude = 0.25,
  isPlaying = true,
  speed = 0.25,
}) => (
  <div className={styles.wrapper}>
    <Canvas dpr={2} camera={CAMERA_PROPS}>
      <Scene amplitude={amplitude} isPlaying={isPlaying} speed={speed} />
    </Canvas>
  </div>
);
