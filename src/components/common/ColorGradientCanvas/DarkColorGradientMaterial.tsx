import { Color } from 'three';
import { shaderMaterial } from '@react-three/drei';

import fragmentShader from './shaders/fragment.glsl?raw';
import vertexShader from './shaders/vertex.glsl?raw';
import './ColorGradientCanvas.module.css';

export const DarkColorGradientMaterial = shaderMaterial(
  {
    u_time: 0,
    u_colorA: new Color('#000000'),
    u_colorB: new Color('#000000'),
  },
  vertexShader,
  fragmentShader,
);
