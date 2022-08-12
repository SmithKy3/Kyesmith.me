struct WaveLayer
    {
      vec3 color;
      float noiseCeil;
      float noiseFloor;
      float noiseFlow;
      vec2 noiseFreq;
      float noiseSeed;
      float noiseSpeed;
    };

varying vec3 v_color;

uniform vec4 activeColors;
uniform vec3 baseColor;
uniform vec2 globals_noiseFreq;
uniform float globals_noiseSpeed;
uniform vec2 resolution;
uniform float time;
uniform float vertex_incline;
uniform float vertex_noiseAmp;
uniform float vertex_noiseFlow;
uniform vec2 vertex_noiseFreq;
uniform float vertex_noiseSeed;
uniform float vertex_noiseSpeed;
uniform float vertex_offsetBottom;
uniform float vertex_offsetTop;
uniform WaveLayer waveLayers[4];

attribute vec2 uvNorm;

void main() {
  float noisyTime = time * globals_noiseSpeed;
  vec2 noiseCoord = resolution * uvNorm * globals_noiseFreq;
  vec2 st = 1. - uvNorm.xy;
  
  // Tilting the plane
  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;
  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * vertex_incline;
  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * vertex_incline * mix(vertex_offsetBottom, vertex_offsetTop, uv.y);

  // Vertex noise
  float noise = snoise(vec3(
    noiseCoord.x * vertex_noiseFreq.x + noisyTime * vertex_noiseFlow,
    noiseCoord.y * vertex_noiseFreq.y,
    noisyTime * vertex_noiseSpeed + vertex_noiseSeed
  )) * vertex_noiseAmp;
  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);
  // Clamp to 0
  noise = max(0.0, noise);
  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  // Vertex color, to be passed to fragment shader
  if (activeColors[0] == 1.) {
    v_color = baseColor;
  }
  for (int i = 0; i < 5; i++) {
    if (activeColors[i + 1] == 1.) {
      WaveLayer layer = waveLayers[i];
      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + noisyTime * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          noisyTime * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );
      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  // Finish
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
