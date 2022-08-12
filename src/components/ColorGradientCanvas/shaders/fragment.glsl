varying vec3 v_color; 

uniform vec2 resolution;

#define DARKEN_TOP 0.0
#define SHADOW_POWER 6.0

void main() {
  vec3 color = v_color;

  if (DARKEN_TOP == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution;
    color.g -= pow(st.y + sin(-12.0) * st.x, SHADOW_POWER) * 0.4;
  }

  gl_FragColor = vec4(color, 1.0);
}
