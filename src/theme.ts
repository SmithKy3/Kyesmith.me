import { createTheme, DEFAULT_THEME } from '@mantine/core';

export const theme = createTheme({
  headings: {
    fontFamily: `'Quantico', ${DEFAULT_THEME.headings.fontFamily}`,
  },
  fontFamily: `'Poppins', ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: `'Roboto Mono', ${DEFAULT_THEME.fontFamilyMonospace}`,
  primaryColor: 'violet',
});
