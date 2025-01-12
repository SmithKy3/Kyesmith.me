import React, { useMemo, useState } from 'react';

import { useMantineTheme } from '@mantine/core';
import { BufferAttribute, PlaneGeometry, Vector3 } from 'three';
import {
  Canvas,
  PlaneGeometryProps,
  useFrame,
  useThree,
} from '@react-three/fiber';
import Simplex from 'simplex-noise';

import styles from './NoisyTerrainCanvas.module.css';

interface SceneProps {
  amplitude: number;
  isPlaying: boolean;
  resolution: number;
  speed: number;
}

export interface NoisyTerrainCanvasProps extends Partial<SceneProps> {}

const Scene: React.FC<SceneProps> = ({
  amplitude,
  isPlaying,
  resolution,
  speed,
}) => {
  const theme = useMantineTheme();

  const {
    size: { width: canvasWidth, height: canvasHeight },
  } = useThree();
  const planeGeomteryArgs = useMemo<
    Required<PlaneGeometryProps>['args']
  >(() => {
    const width = Math.ceil(canvasWidth / 100);
    const height = Math.ceil(canvasHeight / 100);
    const xSegCount = width * resolution;
    const ySegCount = height * resolution;

    return [width, height, xSegCount, ySegCount];
  }, [canvasWidth, canvasHeight, resolution]);
  const planeGeometry = useMemo<PlaneGeometry>(
    () => new PlaneGeometry(...planeGeomteryArgs),
    [planeGeomteryArgs],
  );

  const noiseGenerator = useMemo(() => new Simplex(), []);
  const vector3 = useMemo(() => new Vector3(), []);
  const [hasRunAtLeastOnce, setHasRunAtLeastOnce] = useState(false);
  useFrame(({ clock }) => {
    if (!isPlaying && hasRunAtLeastOnce) {
      return;
    }

    const planeVertices = planeGeometry.getAttribute(
      'position',
    ) as BufferAttribute;
    const xPhaseShift = clock.elapsedTime * speed;
    const zPhaseShift = clock.elapsedTime * speed * 4;
    const newRawVertices = new Array<number>();

    for (
      let vertexIndex = 0;
      vertexIndex < planeVertices.count;
      vertexIndex += 1
    ) {
      vector3.fromBufferAttribute(planeVertices, vertexIndex);
      const z1 =
        0.75 *
        amplitude *
        noiseGenerator.noise2D(vector3.x - xPhaseShift, vector3.y);
      const z2 =
        0.25 *
        amplitude *
        noiseGenerator.noise2D(vector3.x, vector3.z - zPhaseShift);
      vector3.setZ(z1 + z2);
      vector3.toArray(newRawVertices, newRawVertices.length);
    }

    planeVertices.set(newRawVertices);
    planeVertices.needsUpdate = true;
    planeGeometry.computeVertexNormals();

    if (!hasRunAtLeastOnce) {
      setHasRunAtLeastOnce(true);
    }
  });

  return (
    <React.Fragment>
      <mesh geometry={planeGeometry}>
        <meshBasicMaterial
          color={theme.primaryColor[theme.primaryShade as number]}
          polygonOffset
          polygonOffsetFactor={1}
          polygonOffsetUnits={1}
        />
      </mesh>
      <lineSegments geometry={planeGeometry}>
        <lineBasicMaterial color={theme.white} />
      </lineSegments>
    </React.Fragment>
  );
};

const ORTH_CAMERA_PROPS = { zoom: 100, position: new Vector3(0, 10, 5) };

export const NoisyTerrainCanvas: React.FC<NoisyTerrainCanvasProps> = ({
  amplitude = 0.25,
  isPlaying = true,
  resolution = 25,
  speed = 0.1,
}) => (
  <div className={styles.wrapper}>
    <Canvas orthographic dpr={2} camera={ORTH_CAMERA_PROPS}>
      <Scene
        amplitude={amplitude}
        isPlaying={isPlaying}
        speed={speed}
        resolution={resolution}
      />
    </Canvas>
  </div>
);
