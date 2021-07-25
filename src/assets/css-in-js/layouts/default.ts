import { css } from 'styled-components';

export const mainStyles = css`
  width: 100%;
  height: max-content;
  padding: 2rem 5% 5rem;

  @media (min-width: ${(props) => props.theme.screenSizes.medium}) {
    padding: 2rem 15% 5rem;
  }

  @media (min-width: ${(props) => props.theme.screenSizes.large}) {
    padding: 2rem 30% 5rem;
  }
`;
