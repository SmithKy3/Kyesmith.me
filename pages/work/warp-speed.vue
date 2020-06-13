<template>
  <fragment>
    <portfolio-page :gitUrl="gitUrl" :title="title" :body="body" />
    <div id="canvasWrapper" />
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
import { WarpSpeed } from "warpspeed";

const title = "WarpSpeed";
const gitUrl = "https://www.github.com/smithky3/warp-speed";
const body = `So, this was more an experiment to get to grips with publishing to NPM more than anything. But, basically, the idea
came to me while working on my <a href="/work/space-thing">"space simulator"</a>. It's a simple pacakge that returns you an object
that can be used to mount a canvas to the DOM, play a continous star warsy animation on said canvas and control said animation. If you please. While it
poses no great use, I'm fairly happy with the result; although I want to make it a bit more performant at some point (things get a little
laggy with large numbers of stars). Plus it helped take my brain off the space-thing for a day. If you want to skip the ins and
outs, scroll straight to the bottom for a little demo.
<br />
<br/>

In terms of the code, it's a pretty simple algorithm:
<br/>
<br/>
<ul>
  <li>Generate a random point in 3D space. For X and Y, use page width and height as maximums, respectively. Z can be random I suppose but I chose to use page width again</li>
  <br/>
  <li>Decrease Z with every frame</li>
  <br/>
  <li>Re-draw the point on the canvas with every frame but use maxZ/Z as a coefficent to make them move closer to the page borders as Z approaches 1</li>
  <br/>
  <li>Repeat for the number of stars you want</li>
  <br/>
  <li>Profit</li>
</ul>
<br />

Seeing as this little project was already a bit of a guinea pig, I decided to take it further and used Douglas Crockford's
"thisless classless" programmings style. It aims to remove the problems that come with the 'new' and 'this' keywords in JS/TS,
and I quite like it. You can have a good read about it <a href="https://gist.github.com/mpj/17d8d73275bca303e8d2" target="_blank">here</a>.`;

export default Vue.extend({
  layout: "portfolio",
  data() {
    return {
      title,
      gitUrl,
      body
    };
  },
  mounted() {
    const warpSpeed = WarpSpeed();
    const wrapper = document.querySelector("#canvasWrapper") as HTMLElement;

    if (!wrapper) {
      console.log(
        `Kye, ya dun goofed. Now there's no demo of your lil warp speed thing. God damnit.`
      );
      return;
    }

    warpSpeed.mountCanvasTo(wrapper);
    warpSpeed.setNumberOfStars(500);
    warpSpeed.setStarColor("skyBlue");
    warpSpeed.render();
  }
});
</script>
