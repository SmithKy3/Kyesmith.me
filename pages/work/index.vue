<template>
  <fragment>
    <nuxt-link to="/">
      <fa :icon="['fas', 'chevron-left']" id="back" />
    </nuxt-link>

    <template v-for="card in cards">
      <portfolio-card
        :key="card.title"
        :href="card.href"
        :title="card.title"
        :imgSrc="card.imgSrc"
        :date="card.date"
        :description="card.description"
      />
    </template>
  </fragment>
</template>

<style lang="less">
#workContent {
  width: 100%;
  margin: 15% 0 0;

  > a {
    max-width: 40%;
  }
}

#back {
  position: fixed;
  top: 2vh;
  left: 2vh;
  font-size: 3rem;
  color: var(--jet);

  @media screen and (max-width: 1024px) {
    top: calc(6vh + 3rem);
    left: auto;
    right: 2vh;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import { cards } from "@/constants/portfolioCardsData";

export default Vue.extend({
  data() {
    return {
      cards
    };
  }
});
</script>
