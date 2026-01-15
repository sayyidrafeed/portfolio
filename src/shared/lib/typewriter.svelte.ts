export interface TypewriterOptions {
    speed?: number;
    delay?: number;
    cursor?: boolean;
    cursorBlinkRate?: number;
    hideCursorOnComplete?: boolean;
}

export interface TypewriterControls {
    displayedLength: number;
    displayedText: string;
    isComplete: boolean;
    showCursor: boolean;
    start: () => void;
    stop: () => void;
    reset: () => void;
}

export function createTypewriter(
    text: string,
    options: TypewriterOptions = {}
): TypewriterControls {
    const speed = options.speed ?? 80;
    const delay = options.delay ?? 0;
    const cursor = options.cursor ?? true;
    const cursorBlinkRate = options.cursorBlinkRate ?? 530;
    const hideCursorOnComplete = options.hideCursorOnComplete ?? false;

    let displayedLength = $state(0);
    let showCursor = $state(true);
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let cursorIntervalId: ReturnType<typeof setInterval> | null = null;
    let started = false;

    let displayedText = $derived(text.slice(0, displayedLength));
    let isComplete = $derived(displayedLength >= text.length);

    function start(): void {
        if (started) return;
        started = true;

        setTimeout(() => {
            intervalId = setInterval(() => {
                if (displayedLength < text.length) {
                    displayedLength++;
                } else {
                    if (intervalId) clearInterval(intervalId);
                }
            }, speed);
        }, delay);

        if (cursor) {
            cursorIntervalId = setInterval(() => {
                showCursor = !showCursor;
            }, cursorBlinkRate);
        }
    }

    function stop(): void {
        if (intervalId) clearInterval(intervalId);
        if (cursorIntervalId) clearInterval(cursorIntervalId);
    }

    function reset(): void {
        stop();
        displayedLength = 0;
        showCursor = true;
        started = false;
    }

    return {
        get displayedLength() { return displayedLength; },
        get displayedText() { return displayedText; },
        get isComplete() { return isComplete; },
        get showCursor() {
            if (hideCursorOnComplete && isComplete) return false;
            return showCursor;
        },
        start,
        stop,
        reset,
    };
}
