<template>
  <fragment>
    <pf-title text="UoS EEE Society Logo" />

    <p>
      In my final year of University, my course's society (Electronic and
      Electrical Engineering) decided to host a competition to have a student
      redesign their logo. So, I loaded up photoshop and spent a day on my
      design (great way to procrastinate), and then I won!
    </p>

    <h2>My original design:</h2>
    <img src="@/assets/eee-logo.png" />

    <h2>The final design after working with the University design team:</h2>
    <img src="@/assets/eee-logo-final.png" />

    <pf-line-break />
  </fragment>
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'portfolio-entry',
});
</script>
