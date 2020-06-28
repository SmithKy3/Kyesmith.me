<template>
  <div id="content">
    <title-card />

    <nuxt />

    <right-menu />
  </div>
</template>

<style lang="less">
#content {
  position: absolute;
  top: 0;
  left: 20vw;
  width: 50vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    width: 85vw;
    left: 0;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import { getDarkModeState, setDarkMode } from "@/constants/darkMode";

export default Vue.extend({
  mounted() {
    getDarkModeState() && document.body.classList.add("dark-mode");
  },
  created() {
    // Prevents issue with window undefined error during development (caused by SSR)
    if (!process.client) {
      return;
    }

    const state = getDarkModeState();
    setDarkMode(state);
  }
});
</script>
