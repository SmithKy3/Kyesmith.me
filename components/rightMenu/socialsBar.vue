<template>
  <div id="socialsBar">
    <a href="https://github.com/SmithKy3" target="_blank" id="git">
      <fa :icon="['fab', 'github']" />
    </a>

    <a href="https://uk.linkedin.com/in/kye-smith-121429165" target="_blank" id="linkedin">
      <fa :icon="['fab', 'linkedin']" />
    </a>

    <a href="mailto:kye@kyesmith.me" id="mailMe">
      <fa :icon="['fas', 'envelope']" />
    </a>
  </div>
</template>

<style lang="less">
#socialsBar {
  position: absolute;
  bottom: 30%;
  left: 40%;
  width: 20%;
  height: 40%;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(5, 20%);
  text-align: center;
  font-size: 3rem;
  color: var(--backgroundAlt);

  > a {
    width: 100%;
    margin: auto;

    > svg {
      width: 100%;
    }
  }
}
#git {
  grid-area: 1 / 1 / auto / auto;
}
#linkedin {
  grid-area: 3 / 1 / auto / auto;
}
#mailMe {
  grid-area: 5 / 1 / auto / auto;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
