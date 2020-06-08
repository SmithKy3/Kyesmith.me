<template>
  <div>
    <nuxt-link to="/">
      <h1>KYE SMITH</h1>
      <h2>{{ tagLineText }} {{ cursor }}</h2>
    </nuxt-link>
  </div>
</template>

<style lang="less" scoped>
div {
  position: relative;
  top: 5%;
  left: 30%;
  width: 40%;
  margin-bottom: 10%;

  @media screen and (max-width: 91024px) {
    left: 0;
    width: 100%;
  }
}

h1 {
  position: relative;
  font-weight: 600;
  font-style: italic;
  font-family: "DM Mono", "monospace";
  color: var(--accent);
}

h2 {
  position: relative;
  left: 50%;
  width: max-content;
  height: 2rem;
  font-family: "Caveat", "cursive";
  font-weight: 400;
  font-style: italic;
  color: var(--accent) !important;
}
</style>

<script lang="ts">
import Vue from "vue";

function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface TagLineTypingData {
  waitTime: number;
  nextValue: string;
}

const tagLineOptions = [
  "Devoleper",
  "Developear",
  "Doveloper",
  "Keyboard Basher"
];

function* tagLineDataGen(): Generator<TagLineTypingData> {
  const getRandomWord = () =>
    tagLineOptions[Math.floor(Math.random() * (tagLineOptions.length - 1))];

  const TYPING_MIN_WAIT = 250;
  const TYPING_MAX_WAIT = 500;
  const TYTPING_FINISHED_EXTRA_WAIT = 750;

  let word = getRandomWord();
  let step = 1;

  for (let i = 1; true; i += step) {
    if (i > 0 && i < word.length - 1) {
      const waitTime = getRandomNumber(TYPING_MIN_WAIT, TYPING_MAX_WAIT);
      const nextValue = word.substring(0, i);
      yield {
        waitTime,
        nextValue
      };
    } else if (i === 0) {
      word = getRandomWord();
      step = 1;
      const waitTime = getRandomNumber(TYPING_MIN_WAIT, TYPING_MAX_WAIT);
      const nextValue = "";
      yield {
        waitTime,
        nextValue
      };
    } else {
      step = -1;
      const waitTime =
        getRandomNumber(TYPING_MIN_WAIT, TYPING_MAX_WAIT) +
        TYTPING_FINISHED_EXTRA_WAIT;
      const nextValue = word;
      yield {
        waitTime,
        nextValue
      };
    }
  }
}

export default Vue.extend({
  data() {
    return {
      tagLineText: "",
      cursor: ""
    };
  },
  mounted() {
    const self = this;
    const dataGenerator = tagLineDataGen();
    let data = dataGenerator.next().value;

    function typeTagLine(): void {
      self.tagLineText = data.nextValue;

      setTimeout(() => {
        data = dataGenerator.next().value;
        typeTagLine();
      }, data.waitTime);
    }

    typeTagLine();
    setInterval(() => {
      self.cursor = self.cursor === "" ? "|" : "";
    }, 300);
  }
});
</script>
