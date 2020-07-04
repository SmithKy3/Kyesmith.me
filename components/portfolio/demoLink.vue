<template>
  <a :href="href" target="_blank">
    <h2>
      Demo
      <fa :icon="['fas', 'external-link-alt']" />
    </h2>
  </a>
</template>

<style lang="less" scoped>
h2 {
  position: relative;
  width: max-content;
  margin: 5% 0;
  font-size: 2rem;
  color: var(--accentAlt);

  // I don't like css underline so here's this then
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: var(--accentAlt);
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    href: String,
  },
});
</script>
