<template>
  <h1>{{ text }}</h1>
</template>

<style lang="less" scoped>
h1 {
  margin: 5% auto 10%;
  font-size: 3.5rem;
  color: var(--accent);
}
</style>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    text: String,
  },
});
</script>
