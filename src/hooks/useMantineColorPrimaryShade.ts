import {
  DefaultMantineColor,
  useComputedColorScheme,
  useMantineTheme,
} from '@mantine/core';

const useMantineColorPrimaryShade = (color: DefaultMantineColor) => {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme();

  const colorShades = theme.colors[color];
  const primaryShadeIndex =
    typeof theme.primaryShade === 'number'
      ? theme.primaryShade
      : theme.primaryShade[computedColorScheme];
  return colorShades[primaryShadeIndex];
};

export default useMantineColorPrimaryShade;
