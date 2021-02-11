import './src/assets/styles/index.scss';
import * as DarkMode from '@helpers/dark-mode';

const isSSR = () => typeof window === 'undefined';
export const onClientEntry = () => !isSSR() && DarkMode.init();