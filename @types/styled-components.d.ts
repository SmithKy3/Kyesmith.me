import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      blue: string;
      red: string;
      marigold: string;
      orange: string;
    };
    fonts: {
      poppins: string;
    };
    screenSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
