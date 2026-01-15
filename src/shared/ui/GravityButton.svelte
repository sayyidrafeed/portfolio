<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        variant?: "primary" | "secondary";
        onclick?: () => void;
        children: Snippet;
        class?: string;
    }

    let {
        variant = "primary",
        onclick,
        children,
        class: className = "",
    }: Props = $props();
</script>

<button
    {onclick}
    class="relative overflow-hidden rounded-xl px-8 py-3 font-medium transition-all duration-300
    {variant === 'primary'
        ? 'bg-gradient-to-r from-gravity-500 to-gravity-600 text-white shadow-lg shadow-gravity-500/25 hover:shadow-xl hover:shadow-gravity-500/40 hover:scale-105'
        : 'glass text-gray-300 hover:bg-white/10 hover:text-white hover:scale-105'} {className}"
>
    {@render children()}
</button>
