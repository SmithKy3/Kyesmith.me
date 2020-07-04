<template>
  <div class="portfolioCard" @click="goToPage">
    <h3>{{ title }}</h3>
    <img :src="imgSrc" />
    <p>
      <span>{{ date }}</span>
      <br />
      <br />
      {{ description }}
    </p>
  </div>
</template>

<style lang="less">
.portfolioCard {
  position: relative;
  z-index: initial;
  display: inline-block;
  vertical-align: middle;
  width: 40%;
  box-sizing: border-box;
  margin: 1% 2.5%;
  padding: 1% 0;
  background: var(--backgroundAlt);

  @media screen and (max-width: 1024px) {
    width: 90%;
    left: 5%;
    margin: 5% 0;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    background: var(--accent);
    border-radius: 5px;
  }

  &:hover {
    cursor: pointer;
  }

  > img {
    width: 100%;
    margin: 5% 0 1%;
  }

  > h3,
  p {
    font-size: 1.5rem;
    color: var(--background);
  }

  > h3 {
    margin: 5% 10%;
    color: var(--accentAlt);
  }

  > p {
    margin: 1% 10% 5%;
    text-align: left;

    > span {
      font-size: 1rem;
      color: var(--accent);
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      test: `<div id="poop" />`,
    };
  },
  props: {
    href: String,
    title: String,
    imgSrc: String,
    date: String,
    description: String,
  },
  methods: {
    goToPage: function() {
      window.location.href += this.href;
    },
  },
});
</script>
