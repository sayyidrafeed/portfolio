<script lang="ts">
  import { fly, blur } from 'svelte/transition';
  import { activeView, initViewportFromHash } from '../shared/stores/activeView';
  import Hero from '../features/hero/index.svelte';
  import Showcase from '../features/showcase/index.svelte';
  import About from '../features/about/index.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    initViewportFromHash();
  });
</script>

<main class="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f]">
  <!-- Background gradient orbs for visual appeal -->
  <div class="pointer-events-none fixed inset-0 overflow-hidden">
    <div class="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gravity-600/20 blur-[100px] animate-float"></div>
    <div class="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-gravity-400/15 blur-[120px] animate-float" style="animation-delay: -2s"></div>
    <div class="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-gravity-500/10 blur-[80px] animate-float" style="animation-delay: -4s"></div>
  </div>

  <!-- Viewport Container -->
  <div class="relative z-10">
    {#if $activeView === 'HERO'}
      <div in:fly={{ y: -50, duration: 600 }} out:blur={{ duration: 300 }}>
        <Hero />
      </div>
    {:else if $activeView === 'SHOWCASE'}
      <div in:fly={{ y: 50, duration: 600 }} out:blur={{ duration: 300 }}>
        <Showcase />
      </div>
    {:else if $activeView === 'ABOUT'}
      <div in:fly={{ y: 50, duration: 600 }} out:blur={{ duration: 300 }}>
        <About />
      </div>
    {/if}
  </div>
</main>
