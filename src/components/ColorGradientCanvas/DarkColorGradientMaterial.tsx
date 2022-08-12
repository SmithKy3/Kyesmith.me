import { Color, Vector2, Vector4 } from 'three';
import { shaderMaterial } from '@react-three/drei';

import fragmentShaderSource from './shaders/fragment.glsl?raw';
import vertexShaderSource from './shaders/vertex.glsl?raw';
import noiseShaderSource from './shaders/noise.glsl?raw';
import blendShaderSource from './shaders/blend.glsl?raw';
import styles from './ColorGradientCanvas.module.scss';

export interface DarkColorGradientMaterialProps {
  resolution: [number, number];
}

const sectionColors = [
  new Color(styles.darkColorZero).toArray(),
  new Color(styles.darkColorOne).toArray(),
  new Color(styles.darkColorTwo).toArray(),
  new Color(styles.darkColorThree).toArray(),
  new Color(styles.darkColorFour).toArray(),
];

const vertexShader = `${noiseShaderSource}\n${blendShaderSource}\n${vertexShaderSource}`;
const fragmentShader = `${fragmentShaderSource}`;
export const DarkColorGradientMaterial = shaderMaterial(
  {
    activeColors: new Vector4(1, 1, 1, 1),
    baseColor: sectionColors[0],
    globals_noiseFreq: new Vector2(14e-5, 29e-5),
    globals_noiseSpeed: 5e-6,
    resolution: new Vector2(),
    time: 0,
    vertex_incline: 0,
    vertex_noiseAmp: 320,
    vertex_noiseFlow: 3,
    vertex_noiseFreq: new Vector2(3, 4),
    vertex_noiseSeed: 5,
    vertex_noiseSpeed: 12.5,
    vertex_offsetBottom: -0.5,
    vertex_offsetTop: -0.5,
    waveLayers: Array.from({ length: sectionColors.length - 1 }, (_, i) => ({
      color: sectionColors[i + 1],
      noiseCeil: 0.63 + (i + 1) * 0.07,
      noiseFloor: 0.1,
      noiseFlow: 6.5 + (i + 1) * 0.3,
      noiseFreq: new Vector2(
        2 + (i + 1) / sectionColors.length,
        3 + (i + 1) / sectionColors.length
      ),
      noiseSeed: 5 + (i + 1) * 10,
      noiseSpeed: 11 + (i + 1) * 0.3,
    })),
  },
  vertexShader,
  fragmentShader
);
