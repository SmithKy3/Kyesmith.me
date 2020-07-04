<template>
  <fragment>
    <pf-title text="Space-Thing" />

    <pf-demo-link href="https://space-thing.now.sh" />

    <pf-code-link href="https://github.com/smithky3" />

    <p>
      In a nutshell, this little number is a small space simulator of sorts
      using TypeScript, React, and my own "engine". I use the spherical
      coordinate system with 3D & 2D vectors to draw bodies onto a HTML5 canvas.
      I then update their position every frame based on the center of their
      orbit, the direction of their orbit and their velocity. The aim is to keep
      working on it until it becomes somewhat of a universe sandbox, with the
      ability to add, remove and manipulate bodies or even entire solar systems.
      It's allowed me to delve into some physics, which I enjoy more than I
      should, as well hone my numeracy skills. It's also nice to do something
      that strays a little more towards game development than the usual endless
      CSS of pure web development. I've written a little more about my
      inspiration and planned updates on the demo page so take a gander and have
      a play.
    </p>

    <pf-line-break />
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'portfolio-entry',
});
</script>
