export const combineClassNames = (
  ...classNames: Array<string | boolean | null | undefined>
) => classNames.filter(Boolean).join(' ');
