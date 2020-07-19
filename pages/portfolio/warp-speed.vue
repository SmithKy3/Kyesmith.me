<template>
  <fragment>
    <pf-title text="WarpSpeed" />

    <div id="canvasWrapper" />

    <pf-code-link href="https://www.github.com/smithky3/warp-speed" />

    <p>
      So, this was more an experiment to get to grips with publishing to NPM
      than anything else. But, basically, the idea came to me while working on
      my
      <a
        href="/portfolio/space-thing"
      >"space simulator"</a>. It's a simple
      package which returns you a ready-to-go HTML5 canvas playing a continous
      star warsy animation, and allows some control over said animation. While
      it poses no great use, I'm fairly happy with the result, plus it helped take my brain
      off the space sim for a day. I've rewritten it since it's initial release and I'm
      now very pleased with the result. I think next I'd like to tinker with adding more animation
      options. You can find the package
      <a
        href="https://www.npmjs.com/package/warpspeed"
      >here.</a>
    </p>

    <pf-line-break />

    <p>In terms of the code, it's a pretty simple algorithm:</p>

    <ul>
      <li>
        Generate a random 3D point:
        <ul>
          <li>Maximum value for X should be half of the canvas' width (assuming you are using the center as the origin)</li>
          <li>Do the same for Y but use height</li>
          <li>Z can be completely random I suppose but I used page width again for consistency</li>
        </ul>
      </li>
      <br />
      <li>Decrease Z with every frame</li>
      <br />
      <li>
        Each frame, re-draw the circle using X and Y, both multiplied by maximum Z / current Z.
        <ul>
          <li>As Z moves closer to zero, the coefficent (max Z / Z) increases, meaning our X and Y points move outwards</li>
        </ul>
      </li>
      <br />
      <li>Repeat for the number of stars you want</li>
      <br />
      <li>Profit</li>
    </ul>

    <pf-line-break />

    <p>
      Seeing as this little project was already a bit of a guinea pig, I decided
      to take it further and used Douglas Crockford's "thisless classless"
      programming style for the first time. It aims to remove the problems that come with the
      'new' and 'this' keywords in JS/TS, and I must say I'm quite the fan. My only gripe
      is how verbose it can make your code compared to standard classes. You can have a
      good read about it
      <a
        href="https://gist.github.com/mpj/17d8d73275bca303e8d2"
        target="_blank"
      >here.</a>
    </p>

    <pf-line-break />
  </fragment>
</template>

<style lang="less">
#canvasWrapper {
  display: block;
  margin: 5vh 0;
  width: 100%;
  height: 30%;
}
</style>

<script lang="ts">
import Vue from "vue";
import { getWarpSpeedController } from "warpspeed";

export default Vue.extend({
  layout: "portfolio-entry",
  mounted() {
    const warpSpeedController = getWarpSpeedController(750, "rainbow", 1.5, 2);
    const wrapper = document.querySelector("#canvasWrapper") as HTMLElement;

    if (!wrapper) {
      console.log(
        `Kye, ya dun goofed. Now there's no demo of your lil warp speed thing. God damnit.`
      );
      return;
    }

    warpSpeedController.mountCanvasTo(wrapper);
    warpSpeedController.render();
  }
});
</script>
