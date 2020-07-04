<template>
  <fragment>
    <img src="@/assets/me2.png" alt="Kye Smith" />
    <p id="bio">
      Hey. I'm Kye and I'm an Electronic Engineering graduate turned developer.
      I'm currently working as a Junior JavaScript dev at Wren Kitchens. I've a
      passion for fast code and learning whenever and wherever I can. I also
      quite like space, photography and guitars.
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
  font-size: 1.5rem;
  font-weight: 600;
}

#workButton {
  position: relative;
  z-index: initial;
  width: max-content;
  margin: 15% auto;
  padding: 0 20px;
  background: var(--background);
  text-decoration: none;
  font-family: 'Caveat', 'cursive';
  font-size: 5rem;

  // Rounded dquare border on square element
  &::after {
    content: '';
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
