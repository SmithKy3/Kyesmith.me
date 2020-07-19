<template>
  <fragment>
    <h1>Kye Smith</h1>

    <div id="aboutMe">
      <p>
        Professional developer with a thirst to adapt, learn and succeed.
        A self-driven, charismatic team player with a genuine interest in
        software and technology. Happiest when learning or being challenged
        on current knowledge. Also a keen photographer, guitarist and rubiks cube solver.
      </p>

      <h2>Skills:</h2>

      <div id="skillsBox">
        <fa :icon="['fab', 'js']" />
        <fa :icon="['fab', 'html5']" />
        <fa :icon="['fab', 'css3-alt']" />
        <fa :icon="['fab', 'react']" />
        <fa :icon="['fab', 'vuejs']" />
      </div>
    </div>

    <h2 class="link">
      <a href="./CV.pdf">See my CV</a>
    </h2>

    <nuxt-link to="/portfolio">
      <h2 id="workButton">Personal Work</h2>
    </nuxt-link>
  </fragment>
</template>

<style lang="less" scoped>
h1 {
  font-size: 3rem;
}

#aboutMe {
  p {
    position: relative;
    left: 5%;
    margin: 10% auto;
    font-size: 2rem;
    font-weight: 400;

    ul {
      margin: 5% 0;
    }
  }

  h2 {
    position: relative;
    left: 5%;
    margin: 5% 0;
    font-size: 2rem;
  }

  a {
    text-decoration: underline;
  }

  #skillsBox {
    float: right;
    width: 95%;
    height: max-content;
    margin: 0 0 10%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    > svg {
      color: var(--backgroundAlt);
      font-size: 4rem;
    }
  }
}

.link {
  position: relative;
  left: 5%;
  font-size: 2rem;
  text-decoration: underline;
}

#workButton {
  position: relative;
  z-index: initial;
  width: max-content;
  margin: 15% auto;
  padding: 0 20px;
  background: var(--background);
  text-decoration: none;
  font-family: "Caveat", "cursive";
  font-size: 5rem;

  // Rounded dquare border on square element
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    background: var(--backgroundAlt);
    border-radius: 5px;
  }

  // Change colour of text and borde on hover
  &:hover {
    color: var(--accent);

    &::after {
      background: var(--accent);
    }
  }
}
</style>
