import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            black: string;
            blue: string;
            red: string;
            marigold: string;
            meadow: string;
        };
        fonts: {
            openSans: string;
            prompt: string;
            playfairDisplay: string;
        };
        screenSizes: {
            small: string;
            medium: string;
            large: string;
        };
    }
}