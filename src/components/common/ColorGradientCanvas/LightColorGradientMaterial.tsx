import { Color } from 'three';
import { shaderMaterial } from '@react-three/drei';

import fragmentShader from './shaders/fragment.glsl?raw';
import vertexShader from './shaders/vertex.glsl?raw';

export const LightColorGradientMaterial = shaderMaterial(
  {
    u_time: 0,
    u_colorA: new Color('#ffffff'),
    u_colorB: new Color('#ffffff'),
  },
  vertexShader,
  fragmentShader,
);
