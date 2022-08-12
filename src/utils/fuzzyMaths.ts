const DEFAULT_EPSILON = 1e-1;

export function areEqual(
  a: number,
  b: number,
  epsilon = DEFAULT_EPSILON
): boolean {
  return Math.abs(a - b) <= (epsilon || DEFAULT_EPSILON);
}
