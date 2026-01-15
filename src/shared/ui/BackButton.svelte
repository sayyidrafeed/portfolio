<script lang="ts">
    import type { ViewportState } from "../types";
    import { navigateTo } from "../stores/activeView";

    interface Props {
        to?: ViewportState;
        label?: string;
        class?: string;
    }

    let {
        to = "HERO",
        label = "← Back to Home",
        class: className = "",
    }: Props = $props();
</script>

<button
    onclick={() => navigateTo(to)}
    class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors {className}"
>
    {label}
</button>
