<template>
  <portfolio-page :title="title" :gitUrl="gitUrl" :body="body" />
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";

const title = "KyeSmith.me";
const gitUrl = "https://www.github.com/smithky3/Kyesmith.me-src";
const body = `So, a little background for context. I first got into coding in my first year at University. We had a module on C.
While it was very basic (I believe the most complex it got was a command line calculator), it taught me some basics and ignited
my passion for it. I then went on to look into web development the next year and learnt HTML/CSS to build a simple static site
that I hosted on github pages (I used to use it pretty much for posting bits of photoshop work I had done and each time I wanted to add
a new entry to my "blog", I had to write and style a whole new page). The entire thing was hard coded and verbose and I would now coil up if I looked at the code, BUT
I had made a website and it was on the internet and I was proud. Then University happened, I learnt little else in the way of programming
but I decided I wanted to chase it as a career option. So I took to CodeAcademy and applied like hell, and landed a position with Wren Kitchens
in their first ever intake of graduate devlopers in August 2019. This involved 3 months of training and all being well, you "graduated" and was promoted
to a Junior Developer. Fast forward a little more and furlough rolls round with COVID. "A great time to re-build a new portfolio website"
said Kye, and here we are.
<br />
<br />

While at work, I only use React, I decided to branch out a little with this new found time, and went for Vue, using NuxtJS as my dev platform
and for building for easy static hosting on github pages. So far, I like vue alot. They make data-binding super easy and applying some
fancy animations is a piece of cake straight out of the box, which I always find a little cumbersome with React. Do I prefer it over React? Unsure.
I'm certainly more comfortable with React but I put that down to experience more than anything. I definitely prefer the layout of Vue with their
Single File Components, with everything relating to a component being all neatly together, but that's acheivable in React with styled-components.
I'm hoping spending more time working on this will allow me to learn Vue some more and make a solid decision. But anyway, thanks for reading, there's
a link to the source code at the top of the page, feedback always welcome!`;

export default Vue.extend({
  layout: "portfolio",
  data() {
    return {
      title,
      gitUrl,
      body
    };
  }
});
</script>
