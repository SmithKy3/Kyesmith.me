import { css } from 'styled-components';

export const containerStyles = css`
  display: block;
  position: relative;
  width: 100%;
  height: max-content;
  padding: 2rem 0;
`;

export const h1Styles = css`
  display: block;
  width: max-content;
  margin: 0 auto 0 0.5rem;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: var(--color--main);

  @media (min-width: ${(props) => props.theme.screenSizes.small}) {
    margin: auto;
  }

  span {
    color: var(--color--accent);
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;

    svg {
      fill: var(--color--accent);
    }

    &:hover {
      color: var(--color--accentAlt);

      svg {
        fill: var(--color--accentAlt);
      }
    }
  }
`;

export const lightningIconStyles = css`
  display: inline-block;
  width: 32px;
  height: 32px;
`;

const themeToggleIconStyles = css<{ isHidden: boolean }>`
  position: absolute;
  width: 30px;
  height: 30px;
  transform: ${(props) => (props.isHidden ? 'none' : 'translateY(-50%)')};
  fill: var(--color--main);
  cursor: pointer;
`;

export const sunIconStyles = css`
  ${themeToggleIconStyles}
  top: ${(props) => (props.isHidden ? '50%' : '-50vh')};
  right: 5%;
  transition: top 0.5s cubic-bezier(0, 0.75, 1, 1), fill 0.5s;

  &:hover,
  &:active {
    fill: ${(props) => props.theme.colors.marigold};
  }
`;

export const moonIconStyles = css`
  ${themeToggleIconStyles}
  top: 50%;
  right: ${(props) => (props.isHidden ? '5%' : '-50vh')};
  transition: right 0.5s cubic-bezier(0, 0.75, 1, 1), fill 0.5s;

  &:hover,
  &:active {
    fill: ${(props) => props.theme.colors.blue};
  }
`;
