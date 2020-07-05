<template>
  <table>
    <tbody>
      <tr>
        <td>
          <a href="https://github.com/SmithKy3" target="_blank">
            <fa :icon="['fab', 'github']" />
          </a>
        </td>
      </tr>

      <tr>
        <td>
          <a href="https://uk.linkedin.com/in/kye-smith-121429165" target="_blank">
            <fa :icon="['fab', 'linkedin']" />
          </a>
        </td>
      </tr>

      <tr>
        <td>
          <a href="mailto:kye@kyesmith.me">
            Mail me
            <fa :icon="['fas', 'envelope']" />
          </a>
        </td>
      </tr>

      <tr>
        <td>
          <a href="/cv.pdf" target="_blank">
            See my CV
            <fa :icon="['fas', 'file']" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="less" scoped>
table {
  position: absolute;
  bottom: 30%;
  left: 0;
  width: 100%;
  height: 40%;
  text-align: center;
  font-size: 1.5rem;
  color: var(--backgroundAlt);

  svg {
    font-size: 2.5rem;
  }
}
</style>

<script lang="ts">
// Just to fix veture error
import Vue from "vue";
export default Vue.extend({});
</script>
