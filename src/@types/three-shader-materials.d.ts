import type { ReactThreeFiber } from '@react-three/fiber';
import type { Material } from 'three';

import type { BlobCanvasMaterialProps } from '@/components/BlobCanas/BlobCanvasMaterial';
import type { DarkColorGradientMaterialProps } from '@/components/ColorGradientCanvas/DarkColorGradientMaterial';
import type { LightColorGradientMaterialProps } from '@/components/ColorGradientCanvas/LightColorGradientMaterial';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      blobCanvasMaterial: BlobCanvasMaterialProps;
      lightColorGradientMaterial: LightColorGradientMaterialProps;
      darkColorGradientMaterial: DarkColorGradientMaterialProps;
    }
  }
}
