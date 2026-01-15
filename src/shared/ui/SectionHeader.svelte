<script lang="ts">
    import type { ViewportState } from "../types";
    import BackButton from "./BackButton.svelte";
    import Typewriter from "./Typewriter.svelte";

    interface Props {
        backTo?: ViewportState;
        backLabel?: string;
        preText: string;
        gradientText: string;
        showBackButton?: boolean;
    }

    let {
        backTo = "HERO",
        backLabel = "← Back to Home",
        preText,
        gradientText,
        showBackButton = true,
    }: Props = $props();
</script>

<div class="mb-12 text-center">
    {#if showBackButton}
        <div class="mb-6">
            <BackButton to={backTo} label={backLabel} />
        </div>
    {/if}

    <h2 class="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
        <Typewriter
            text={preText}
            speed={80}
            hideCursorOnComplete={true}
        /><span class="text-gradient"
            ><Typewriter text={gradientText} speed={100} delay={400} /></span
        >
    </h2>
</div>
