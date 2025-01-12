import { DEFAULT_THEME } from '@mantine/core';
import { Color } from 'three';
import { shaderMaterial } from '@react-three/drei';

import fragmentShader from './shaders/fragment.glsl?raw';
import vertexShader from './shaders/vertex.glsl?raw';

export const DarkColorGradientMaterial = shaderMaterial(
  {
    u_time: 0,
    u_colorA: new Color(DEFAULT_THEME.colors.violet[6]),
    u_colorB: new Color(DEFAULT_THEME.colors.teal[8]),
  },
  vertexShader,
  fragmentShader,
);
