<template>
  <Fragment>
    <img src="@/assets/me2.png" />
    <h2>
      Hey. I'm Kye and I'm an Electronic Engineering graduate turned developer. I'm currently working as
      a Junior JavaScript dev at Wren Kitchens. I've a passion for fast code and learning whenever and wherever I can.
      I also quite like space, photography and guitars.
    </h2>
    <nuxt-link to="/work">
      <h1>My Work</h1>
    </nuxt-link>
  </Fragment>
</template>

<style lang="less" scoped>
img {
  width: 50%;
  display: block;
  margin: 5vh auto;
}

h2 {
  position: relative;
  left: 5%;
  margin: 10% auto;
  font-weight: 600;
}

h1 {
  position: relative;
  z-index: initial;
  width: max-content;
  margin: 15% auto;
  padding: 0 20px;
  background: var(--background);
  text-decoration: none;
  font-family: "Caveat", "cursive";
  font-size: 5rem;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    background: var(--backgroundAlt);
    border-radius: 5px;
  }

  &:hover {
    color: var(--accent);

    &::after {
      background: var(--accent);
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
