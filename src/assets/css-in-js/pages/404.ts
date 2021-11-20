import { css } from 'styled-components';

export const canvasContainerStyles = css`
  position: relative;
  width: 90%;
  padding-bottom: 90%;
  margin: 0 auto;
  cursor: pointer;

  #warpSpeedCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: url('#blob');
  }
`;

export const canvasTextStyles = css`
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  z-index: 1;
  width: 70%;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 40px;
`;
