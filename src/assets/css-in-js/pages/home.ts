import { css } from 'styled-components';

export const bioContainerStyles = css`
  width: 100%;
  height: max-content;
  margin: 1rem auto 0;
  padding: 1.5rem 10%;
  border-radius: 5px;

  > p {
    width: max-content;
    max-width: 100%;
    height: max-content;
    margin: 0 auto 1rem;
    color: var(--color--main);
    font-size: 20px;
    font-family: ${(props) => props.theme.fonts.openSans};

    &:last-of-type {
      margin: 0 auto;
    }

    a {
      padding: 0 0.5rem;
      text-decoration: none;
      background-color: var(--color--main);
      color: var(--color--background);
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--color--accent);
      }
    }

    svg {
      width: 20px;
      height: 20px;
      margin-left: 2px;
      fill: var(--color--background);
    }
  }
`;

export const carouselContainerStyles = css`
  width: 100%;
  height: max-content;
  margin: 3rem auto;
  padding: 1.5rem 10% 3rem;
  border-radius: 5px;

  > h2 {
    width: 100%;
    margin: 0 auto 0.5rem;
    color: var(--color--main);
    text-align: center;
    font-size: 24px;
  }

  .carousel svg {
    fill: var(--color--main);
  }
`;

export const myWorkSectionTitleStyles = css`
  color: var(--color--main);
  text-align: center;
  font-size: 30px;
  margin: 0 auto 1.5rem;
`;

export const myWorkCardsContainerStyles = css`
  width: 100%;
  height: max-content;
  column-count: 1;

  @media (min-width: ${(props) => props.theme.screenSizes.small}) {
    column-count: 2;
    column-gap: 1rem;
  }
`;

export const workCardStyles = css`
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  background-color: transparent;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%);
    border: 2px solid var(--color--main);
    border-radius: 5px;
    transition: border-color 0.5s;
  }

  > a {
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 5% 2.5%;
    text-decoration: none;
    cursor: help;
  }

  h3 {
    display: block;
    width: max-content;
    margin: 0 auto 2rem;
    text-align: center;
    padding-bottom: 1px;
    border-bottom: solid 1px var(--color--accent);
    color: var(--color--main);
  }

  img {
    display: block;
    width: 75%;
    margin: 1rem auto;
    transition: transform 0.5s;
  }

  p {
    display: block;
    width: 75%;
    margin: 0 auto;
    color: var(--color--main);
  }

  &:hover {
    &::before {
      border-color: var(--color--accent);
    }

    img {
      transform: rotate(10deg) scale(0.9);
    }
  }
`;
