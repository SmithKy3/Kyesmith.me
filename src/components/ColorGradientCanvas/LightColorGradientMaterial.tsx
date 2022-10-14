import { Color } from 'three';
import { shaderMaterial } from '@react-three/drei';

import fragmentShader from './shaders/fragment.glsl?raw';
import vertexShader from './shaders/vertex.glsl?raw';
import styles from './ColorGradientCanvas.module.scss';

export const LightColorGradientMaterial = shaderMaterial(
  {
    u_time: 0,
    u_colorA: new Color(styles.lightColorA),
    u_colorB: new Color(styles.lightColorB),
  },
  vertexShader,
  fragmentShader
);
