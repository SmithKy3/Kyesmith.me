<template>
  <div id="errorContentContainer">
    <div class="errorContent">{{ error.statusCode }}</div>
    <div class="errorContent">Not sure what you're looking for but here's a spinny cube you can have</div>
    <div id="spinnyCube" />
  </div>
</template>

<style scoped>
#errorContentContainer {
  position: fixed;
  top: 30vh;
  left: 15vw;
  width: 70vw;
}

.errorContent {
  display: inline-block;
  width: 100%;
  height: max-content;
  font-family: "DM Mono", "monospace";
  font-size: 3rem;
  text-align: center;
}

@keyframes spinny {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
#spinnyCube {
  width: 10rem;
  height: 10rem;
  margin: 5vh auto;
  background: var(--accent);
  animation: spinny 5s linear infinite;
}
</style>

<script lang="ts">
import Vue from "vue";
import {
  getLightModeState,
  setLightMode,
  lightModeClass
} from "@/constants/lightMode";

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  created() {
    // Prevents issue with window undefined error during development (caused by SSR)
    if (!process.client) {
      return;
    }

    const state = getLightModeState();
    setLightMode(state);
  }
});
</script>
