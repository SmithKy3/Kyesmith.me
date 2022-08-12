export const combineClassNames = (
  ...classNames: Array<string | boolean | undefined>
) => classNames.filter(Boolean).join(' ');
