const DEFAULT_SWIPE_THRESHOLD = 20;

export class Swipe {
    touchStartX?: number;
    threshold: number;
    swipeLeftListeners = new Array<Function>();
    swipeRightListeners = new Array<Function>();

    constructor(el: HTMLElement, swipeThreshold?: number) {
        this.threshold = swipeThreshold !== undefined ? swipeThreshold : DEFAULT_SWIPE_THRESHOLD;
        el.addEventListener('touchstart', (event) => this.handleTouchStart(event));
        el.addEventListener('touchend', (event) => this.handleTouchEnd(event));
    }

    private handleTouchStart(event: TouchEvent) {
        if (this.touchStartX !== undefined) return;
        this.touchStartX = event.touches[0]?.clientX;
    }
    
    private handleTouchEnd(event: TouchEvent) {
        if (this.touchStartX === undefined) return;
        let xDiff = (event.changedTouches[0]?.clientX || this.touchStartX) - this.touchStartX;
        xDiff = Math.round(xDiff);

        if (Math.abs(xDiff) >= this.threshold) {
            const xDiffSign = Math.sign(xDiff);

            if (xDiffSign === -1 && this.swipeLeftListeners.length) {
                this.swipeLeftListeners.forEach(listener => listener());
            }

            if (xDiffSign === 1 && this.swipeRightListeners.length) {
                this.swipeRightListeners.forEach(listner => listner());
            }
        }

        delete this.touchStartX;
    }

    public onSwipeLeft(callback: Function): void {
        this.swipeLeftListeners.push(callback);
    }

    public onSwipeRight(callback: Function): void {
        this.swipeRightListeners.push(callback);
    }
}