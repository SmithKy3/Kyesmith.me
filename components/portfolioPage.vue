<template>
  <fragment>
    <h1>{{ title }}</h1>

    <a :href="demoUrl" target="_blank">
      <h2 v-show="!!demoUrl">
        Demo
        <fa :icon="['fas', 'external-link-alt']" />
      </h2>
    </a>

    <a :href="gitUrl" target="_blank">
      <h2 v-show="!!gitUrl">
        Code
        <fa :icon="['fas', 'code']" />
      </h2>
    </a>

    <p v-html="body" />
  </fragment>
</template>

<style lang="less" scoped>
h1 {
  margin: 5% auto 10%;
  font-size: 3.5rem;
}

h2 {
  position: relative;
  width: max-content;
  margin: 5% 0;
  font-size: 2rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: var(--backgroundAlt);
  }
}

p {
  font-size: 1.25rem;
  margin-top: 10%;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    imgUrl: String,
    title: String,
    demoUrl: String || null,
    gitUrl: String || null,
    body: String
  }
});
</script>
