<template>
  <fragment>

    <img src="@/assets/me.png" alt="Kye Smith" />

    <p id="bio">
      Kye Smith is:
      <ul>

        <li>An electronic engineering graduate turned developer</li>

        <li>Self-driven and charismatic</li>

        <li>Constantly thinking about, reading about or working on how to be a better developer</li>

      </ul>
      
      You can view his <a href="/CV.pdf">CV here</a> or follow the link below to see some of his personal work.
    </p>

    <nuxt-link to="/portfolio">
      <h2 id="workButton">My Work</h2>
    </nuxt-link>
  </fragment>
</template>

<style lang="less" scoped>
img {
  width: 50%;
  display: block;
  margin: 5vh auto;
}

#bio {
  position: relative;
  left: 5%;
  margin: 10% auto;
  font-size: 2rem;
  font-weight: 400;

  ul {
    margin: 5% 0;
  }
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
