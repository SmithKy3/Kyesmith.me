<template>
  <fragment>
    <pf-title text="Space-Thing" />

    <pf-demo-link href="https://space-thing.now.sh" />

    <pf-code-link href="https://github.com/smithky3" />

    <p>
      First off, I know; the name is rather uninventive. But let's move past
      that. In a nutshell, I would say this is currently my main project.
      I've written a bit more about my inspiration and planned updates on the demo,
      but to get into the details a little bit. The engine behind it all utilises
      both cartesian 2D / 3D vectors, as well as the spherical coordinate system,
      because it's very handy for orbits. I'm yet to implement gravity because I need
      to consider future performance issues before I go ahead and write even more
      maths into it. Ultimately, my aim is that I can use it to keep improving my
      numeracy and my understanding of how to be efficient when writing code;
      maybe even improve my understanding of the low-level effects of the code you write
      and how to be conservative down to the last bit. Then, hopefully, by the end of it
      I might have a full-blown universe sandbox. Feel free to look at the demo and source code,
      comments always welcome.
    </p>

    <pf-line-break />
  </fragment>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "portfolio-entry"
});
</script>
