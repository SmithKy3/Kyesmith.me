type Callback = (...args: any[]) => void;
type ThrottledCallback<F extends Callback> = (
  this: ThisParameterType<F>,
  ...args: Parameters<F>
) => void;

/**
 * Standard throttle function. Fires on the leading edge and trailing edge.
 * Takes a callback function and a waitTime.
 * Calls to the throttled function will execute once immediately
 * and once again after the specified waitTime. Subsequent calls within this
 * waitTime will be ignored.
 */
export function throttle<F extends Callback>(
  fn: F,
  waitTime: number
): ThrottledCallback<F> {
  let isThrottled = false;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (isThrottled) return;
    const context = this;

    fn.apply(context, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, waitTime);
  };
}
