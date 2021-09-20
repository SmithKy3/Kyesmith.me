import { css } from 'styled-components';

export const containerStyles = css`
  display: block;
  position: relative;
  width: 100%;
  height: 25vh;
  clip-path: url('#mobileHeaderBackgroundPath');
  background: ${(props) =>
    `linear-gradient(
        170deg,
        ${props.theme.colors.red} 15%,
        ${props.theme.colors.orange} 30%,
        var(--color--background) 60%)`};

  @media (min-width: ${(props) => props.theme.screenSizes.medium}) {
    clip-path: url('#desktopHeaderBackgroundPath');
    background: ${(props) =>
      `linear-gradient(
        90deg,
        ${props.theme.colors.red} 0%,
        ${props.theme.colors.orange} 50%,
        var(--color--background) 100%)`};
  }
`;

export const h1Styles = css`
  display: block;
  position: absolute;
  top: 2vh;
  left: 2vh;
  width: max-content;
  font-size: 32px;
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.screenSizes.small}) {
    margin: auto;
  }

  span {
    display: block;
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;
    color: var(--color--background);
    border-width: 2px 0 0 2px;
    border-style: solid;
    border-color: transparent;
    box-shadow: none;
    transform: translate(0, 0);
    transition: 0.3s border-color, 0.3s box-shadow, 0.3s transform;

    > svg {
      fill: var(--color--background);
      transition: color 0.3s;
    }

    &:hover {
      border-color: var(--color--background);
      box-shadow: 4px 4px 4px 1px var(--color--main);
      transform: translate(2px, 2px);
    }
  }
`;

export const lightningIconStyles = css`
  display: inline-block;
  width: 32px;
  height: 32px;
`;

const darkModeToggleIconStyles = css<{ isHidden: boolean }>`
  position: absolute;
  width: 30px;
  height: 30px;
  transform: ${(props) => (props.isHidden ? 'none' : 'translateY(-50%)')};
  fill: var(--color--main);
  cursor: pointer;
`;

export const sunIconStyles = css`
  ${darkModeToggleIconStyles}
  top: ${(props) => (props.isHidden ? '2vh' : '-50vh')};
  right: 2vh;
  transition: top 0.5s cubic-bezier(0, 0.75, 1, 1), fill 0.5s;

  &:hover,
  &:active {
    fill: ${(props) => props.theme.colors.marigold};
  }
`;

export const moonIconStyles = css`
  ${darkModeToggleIconStyles}
  top: 2vh;
  right: ${(props) => (props.isHidden ? '2vh' : '-50vh')};
  transition: right 0.5s cubic-bezier(0, 0.75, 1, 1), fill 0.5s;

  &:hover,
  &:active {
    fill: ${(props) => props.theme.colors.blue};
  }
`;
