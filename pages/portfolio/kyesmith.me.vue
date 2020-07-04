<template>
  <fragment>
    <pf-title text="KyeSmith.me" />

    <pf-code-link href="https://www.github.com/smithky3/Kyesmith.me" />

    <p>
      So, a little background for context. I first got into coding in my first
      year at University. We had a module on C. While it was very basic (I
      believe the most complex it got was a command line calculator), it taught
      me some basics and ignited my passion for it. The following year, I went
      on to look into web development and learnt HTML/CSS to build a simple
      static site that I hosted on github pages (I used to use it pretty much
      for posting bits of photoshop work I had done and each time I wanted to
      add a new entry to my "blog", I had to write and style a whole new page).
      The entire thing was hard coded and verbose and I would now coil up if I
      looked at the code, BUT I had made a website and it was on the internet
      and I was proud. Then University happened, I learnt little else in the way
      of programming but I decided I wanted to chase it as a career option. So I
      took to CodeAcademy and applied like hell, and landed a position with Wren
      Kitchens in their first ever intake of graduate devlopers in August 2019.
      This involved 3 months of training and, all being well, you "graduated"
      and were promoted to a Junior Developer. Fast forward a little more and
      furlough rolls round with COVID-19; "A great time to re-build a new
      portfolio website" said Kye, and here we are.
    </p>

    <pf-line-break />

    <p>
      While at work I only use React, I decided to branch out a little with this
      new found time, and went for Vue, using NuxtJS as my dev platform and for
      building for easy static hosting on github pages. So far, I like vue alot.
      They make data-binding super easy and applying some fancy animations is a
      piece of cake straight out of the box, which I always find a little
      cumbersome with React. Do I prefer it over React? Unsure. I'm certainly
      more comfortable with React but I put that down to experience more than
      anything. I definitely prefer the layout of Vue. Their single file
      components allow you to keep everything relating to a component all in one
      place which I tend towards for development. I already acheive this when
      using React, with the styled-components library but I like that it comes
      native with Vue. I'm looking forward to spending more time working on this
      and getting to grips with some more of Vue's features. But anyway, thanks
      for reading, there's a link to the source code at the top of the page,
      feedback always welcome!
    </p>

    <pf-line-break />
  </fragment>
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'portfolio-entry',
});
</script>
