type Callback = (...args: any[]) => void;
type ThrottledCallback<F extends Callback> = (this: ThisParameterType<F>, ...args: Parameters<F>) => void;

/**
 * @function throttle - Standard throttle function. Fires on the leading edge and trailing edge.
 * 
 * @param fn - The callback / function to be throttled.
 * @param waitTime - Wait time, in milliseconds. Calls to the returned function will execute once immediately
 * 						and once again after the specified wait time. Subsequent calls within this wait time will
 *						be ignored.
 */
export function throttle<F extends Callback>(fn: F, waitTime: number): ThrottledCallback<F> {
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