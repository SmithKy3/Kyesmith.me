<template>
  <portfolio-page :title="title" :body="body" />
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";

const initialLogo = require("@/assets/eee-logo.png");
const finalLogo = require("@/assets/eee-logo-final.png");

const title = "UoS EEE Society Logo";
const body = `In my final year of University, my course's society (Electronic and Electrical Engineering) decided
to host a competition to have a student redesign their logo. So, I loaded up photoshop and spent a day on my design
(great way to procrastinate), and then I won!
<br/>
<br/>

My original design:
<img src="${initialLogo}" style="width:100%">
<br/>
<br/>

The final design after working with the University design team:
<img src="${finalLogo}" style="width:100%"/>`;

export default Vue.extend({
  layout: "portfolio",
  data() {
    return {
      title,
      body
    };
  }
});
</script>
