<template>
  <div>
    <nuxt-link to="/">
      <h1>KYE SMITH</h1>
      <h2>{{ tagLineText }}</h2>
    </nuxt-link>
  </div>
</template>

<style lang="less" scoped>
div {
  position: relative;
  top: 15%;
  left: 20%;
  width: 60%;
  margin-bottom: 10%;

  @media screen and (max-width: 1024px) {
    top: 20%;
    left: 0;
    width: 100%;
  }
}

h1 {
  position: relative;
  font-size: 3.5rem;
  font-weight: 600;
  font-style: italic;
  font-family: "DM Mono", "monospace";
  color: var(--accent);

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }
}

@keyframes blink {
  0% {
    border-color: transparent;
  }
  50% {
    border-color: var(--accent);
  }
}

h2 {
  position: relative;
  left: 50%;
  width: max-content;
  height: 2.5rem;
  font-size: 2rem;
  font-family: "Caveat", "cursive";
  font-weight: 400;
  font-style: italic;
  color: var(--accent) !important;

  padding-right: 1rem;
  border-width: 0 0.25rem 0 0;
  border-style: solid;
  animation: blink 0.75s step-end infinite;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    left: 25%;
  }
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
    tagLineOptions[Math.round(Math.random() * (tagLineOptions.length - 1))];

  const TYPING_MIN_WAIT = 200;
  const TYPING_MAX_WAIT = 400;
  const DELETING_MIN_WAIT = 50;
  const DELETING_MAX_WAIT = 200;
  const TYPING_FINISHED_EXTRA_WAIT = 1000;

  let word = getRandomWord();
  let step = 1;

  for (let i = 1; true; i += step) {
    if (i > 0 && i < word.length - 1) {
      const waitTime =
        step === 1
          ? getRandomNumber(TYPING_MIN_WAIT, TYPING_MAX_WAIT)
          : getRandomNumber(DELETING_MIN_WAIT, DELETING_MAX_WAIT);
      const nextValue = word.substring(0, i);
      yield {
        waitTime,
        nextValue
      };
    } else if (i === 0) {
      word = getRandomWord();
      step = 1;
      const waitTime =
        getRandomNumber(TYPING_MIN_WAIT, TYPING_MAX_WAIT) +
        TYPING_FINISHED_EXTRA_WAIT;
      const nextValue = "";
      yield {
        waitTime,
        nextValue
      };
    } else {
      step = -1;
      const waitTime =
        getRandomNumber(TYPING_MIN_WAIT, TYPING_MAX_WAIT) +
        TYPING_FINISHED_EXTRA_WAIT;
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
      tagLineText: ""
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
  }
});
</script>
