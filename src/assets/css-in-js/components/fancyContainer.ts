import { css } from 'styled-components';

export const containerStyles = css`
  position: relative;
  width: 0;
  height: 0;
  margin: 0;
  background-color: var(--color--background);
  border: 2px solid var(--color--main);
`;

export const shadowStyles = css`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: var(--color--main);
  opacity: 0.25;
  will-change: transform;
  transition: transform 0.3s;
`;
