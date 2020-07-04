<template>
  <div id="home-content">
    <title-card />

    <nuxt />

    <right-menu />
  </div>
</template>

<style lang="less">
#home-content {
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
import Vue from 'vue';
import {
  getLightModeState,
  setLightMode,
  lightModeClass,
} from '@/constants/lightMode';

export default Vue.extend({
  mounted() {
    getLightModeState() && document.body.classList.add(lightModeClass);
  },
  created() {
    // Prevents issue with window undefined error during development (caused by SSR)
    if (!process.client) {
      return;
    }

    const state = getLightModeState();
    setLightMode(state);
  },
});
</script>
