<template>
  <portfolio-page
    :title="title"
    :demoUrl="demoUrl"
    :gitUrl="gitUrl"
    :body="body"
  />
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";

const title = ""; // Edit me
const demoUrl = ""; // And me
const gitUrl = ""; // And me
const body = ""; // And me

// And don't foret to add some info to constants/portfolioCards so there's
// a link on the work page.

export default Vue.extend({
  layout: "portfolio",
  data() {
    return {
      title,
      demoUrl,
      gitUrl,
      body
    };
  }
});
</script>
