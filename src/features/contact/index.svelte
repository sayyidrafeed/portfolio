<script lang="ts">
  import { heroData } from '../hero/data';
  import { navigateTo } from '../../shared/stores/activeView';
  import CopyEmailButton from './components/CopyEmailButton.svelte';
  import Footer from '../../shared/ui/layout/Footer.svelte';
  import SocialIcon from '../../shared/ui/SocialIcon.svelte';
</script>

<section class="flex min-h-screen w-full items-center justify-center px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <!-- Back Button -->
    <button
      onclick={() => navigateTo('HERO')}
      class="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
    >
      ← Back to Home
    </button>

    <!-- Main Heading -->
    <h1 class="mb-6 font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
      Let's <span class="text-gradient">Collaborate</span>
    </h1>

    <p class="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
    </p>

    <!-- Email Copy Button -->
    <div class="mb-16">
      <CopyEmailButton />
    </div>

    <!-- Social Grid -->
    <div class="mb-16">
      <h3 class="mb-6 font-display text-lg font-medium text-gray-400">Find me on</h3>
      <div class="flex flex-wrap items-center justify-center gap-4">
        {#each heroData.socialLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="glass flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-105"
          >
            <SocialIcon icon={link.icon} class="h-5 w-5" />
            {link.label}
          </a>
        {/each}
      </div>
    </div>

    <!-- Back to Work CTA -->
    <button
      onclick={() => navigateTo('SHOWCASE')}
      class="text-sm text-gray-500 transition-colors hover:text-gray-300"
    >
      ← Or check out my work
    </button>
  </div>
</section>

<Footer />
