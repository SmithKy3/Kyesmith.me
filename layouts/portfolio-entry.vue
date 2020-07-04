<template>
  <div id="pf-content">
    <nuxt-link to="/portfolio">
      <fa :icon="['fas', 'chevron-left']" id="back" />
    </nuxt-link>

    <right-menu />

    <nuxt />
  </div>
</template>

<style lang="less">
#pf-content {
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

  > p {
    font-size: 1.5rem;
    margin: 2% 0;
  }

  > h2 {
    margin: 5% 0 2%;
  }

  > img {
    width: 100%;
    margin: 5% 0;
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
import Vue from 'vue';
import {
  getLightModeState,
  setLightMode,
  lightModeClass,
} from '@/constants/lightMode';

export default Vue.extend({
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
