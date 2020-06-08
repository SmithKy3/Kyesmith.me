<template>
  <fragment>
    <transition name="fadeIn">
      <fa :icon="['fas', 'outdent']" v-show="true" @click="isOpen = true" id="showMenuIcon" />
    </transition>

    <transition name="slideIn">
      <div v-show="isOpen" id="rightMenuContainer">
        <label id="darkModeContainer">
          <fa :icon="['fas', 'adjust']" />
          <input type="checkbox" @change="toggleDarkMode" v-model="isDarkModeActive" />
          <span id="slider"></span>
        </label>

        <fa :icon="['fas', 'times']" @click="isOpen = false" id="hideMenuIcon" />

        <socialsBar />
      </div>
    </transition>
  </fragment>
</template>

<style lang="less">
#showMenuIcon {
  position: fixed;
  top: 2vh;
  right: 2vh;
  z-index: 100;
  font-size: 3rem;
  color: var(--backgroundAlt);
}

@keyframes slideIn {
  0% {
    right: -50vw;
  }
  100% {
    right: 0;
  }
}
.slideIn-enter-active {
  animation: 1s slideIn;
}
.slideIn-leave-active {
  animation: 0.5s slideIn reverse;
}

#rightMenuContainer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 30vw;
  height: 100vh;
  max-height: 100vh;
  background: var(--background);
  border-style: solid;
  border-width: 0 0 5px 5px;
  border-radius: 0 0 0 calc(50vw / 2);
  border-color: var(--backgroundAlt);

  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
}

#hideMenuIcon {
  position: absolute;
  top: 2vh;
  right: 1vh;
  font-size: 3rem;
  color: var(--backgroundAlt);
}

#darkModeContainer {
  position: absolute;
  top: 2vh;
  left: 1vh;
  height: 3rem;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    top: calc(2vh + 4rem);
    right: 1vh;
    left: auto;
  }

  > svg {
    display: inline-block;
    vertical-align: middle;
    font-size: 3rem;
    color: var(--backgroundAlt);
    margin-right: 0.5rem;
  }

  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  > input:checked + #slider:before {
    left: 3.5rem;
  }
}

#slider {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 6rem;
  height: 3rem;
  background-color: var(--backgroundAlt);

  &:before {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    content: "";
    width: 2rem;
    height: 2rem;
    background: var(--background);
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import socialsBar from "./socialsBar.vue";
import { toggleDarkMode, getDarkModeState } from "@/constants/darkMode";

export default Vue.extend({
  components: {
    socialsBar
  },
  data() {
    return {
      isOpen: false,
      isDarkModeActive: false
    };
  },
  methods: {
    toggleDarkMode
  },
  mounted() {
    this.isDarkModeActive = getDarkModeState();
  }
});
</script>
