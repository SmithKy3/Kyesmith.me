<template>
  <div id="content">
    <nuxt-link to="/work">
      <fa :icon="['fas', 'chevron-left']" id="back" />
    </nuxt-link>
    <right-menu />
    <nuxt />
  </div>
</template>

<style scoped>
a {
  color: var(--backgroundAlt);
}
</style>

<style lang="less" scoped>
#content {
  position: absolute;
  top: 0;
  left: 20vw;
  width: 50vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    left: 0;
    width: 85vw;
    padding-left: 3rem;
  }

  > h2 {
    color: var(--mint) !important;
  }
}

#back {
  position: fixed;
  top: 2vh;
  left: 2vh;
  font-size: 3rem;
  color: var(--jet);

  @media screen and (max-width: 1024px) {
    top: calc(6vh + 3rem);
    left: auto;
    right: 2vh;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import { getDarkModeState } from "../constants/darkMode";

export default Vue.extend({
  mounted() {
    getDarkModeState() && document.body.classList.add("dark-mode");
  }
});
</script>
