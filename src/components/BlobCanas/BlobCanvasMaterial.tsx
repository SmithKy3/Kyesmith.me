import { Color, Vector2, Vector4 } from 'three';
import { shaderMaterial } from '@react-three/drei';

import fragmentShader from './shaders/fragment.glsl?raw';
import vertexShader from './shaders/vertex.glsl?raw';

export interface BlobCanvasMaterialProps {
  resolution: [number, number];
}

export const BlobCanvasMaterial = shaderMaterial(
  {
    resolution: new Vector2(),
    shouldInvert: 0,
    time: 0,
  },
  vertexShader,
  fragmentShader
);
