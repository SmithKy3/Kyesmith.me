<template>
  <div />
</template>

<style lang="less" scoped>
div {
  display: block;
  margin-bottom: 5%;
  width: 100%;
  height: 1rem;
  transform: skew(-45deg, 0);
  border-radius: 5px;
  background: var(--accent);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 45%;
    width: 10%;
    height: 100%;
    transform: skew(-45deg, 0);
    background: var(--background);
  }
}
</style>

<script lang="ts">
// Prevents Vetur error
import Vue from 'vue';
export default Vue.extend({});
</script>
