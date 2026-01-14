<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    interface Props {
        text: string;
        speed?: number;
        delay?: number;
        cursor?: boolean;
        hideCursorOnComplete?: boolean;
    }

    let {
        text,
        speed = 80,
        delay = 0,
        cursor = true,
        hideCursorOnComplete = false,
    }: Props = $props();

    let displayedLength = $state(0);
    let showCursor = $state(true);
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let cursorIntervalId: ReturnType<typeof setInterval> | null = null;

    onMount(() => {
        // Start typing after delay
        setTimeout(() => {
            intervalId = setInterval(() => {
                if (displayedLength < text.length) {
                    displayedLength++;
                } else {
                    if (intervalId) clearInterval(intervalId);
                }
            }, speed);
        }, delay);

        // Blinking cursor
        if (cursor) {
            cursorIntervalId = setInterval(() => {
                showCursor = !showCursor;
            }, 530);
        }
    });

    onDestroy(() => {
        if (intervalId) clearInterval(intervalId);
        if (cursorIntervalId) clearInterval(cursorIntervalId);
    });

    let displayedText = $derived(text.slice(0, displayedLength));
    let isComplete = $derived(displayedLength >= text.length);
</script>

<span aria-label={text}>
    <span aria-hidden="true">{displayedText}</span
    >{#if cursor && (!hideCursorOnComplete || !isComplete)}<span
            class="ml-0.5 inline-block w-[2px] bg-white align-baseline"
            style:opacity={showCursor ? 1 : 0}
            aria-hidden="true">&nbsp;</span
        >{/if}
</span>
