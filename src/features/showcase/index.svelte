<script lang="ts">
  import { projects } from './data';
  import { navigateTo } from '../../shared/stores/activeView';
  import ProjectCard from './components/ProjectCard.svelte';
</script>

<section class="min-h-screen w-full px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <!-- Header -->
    <div class="mb-12 text-center">
      <button
        onclick={() => navigateTo('HERO')}
        class="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
      >
        ← Back to Home
      </button>
      
      <h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
        My <span class="text-gradient">Work</span>
      </h2>
      
      <p class="mx-auto max-w-2xl text-lg text-gray-400">
        A collection of projects I've built, from web applications to APIs and everything in between.
      </p>
    </div>
    
    <!-- Projects Grid -->
    <div class="grid gap-8 md:grid-cols-2">
      {#each projects as project (project.id)}
        <ProjectCard {project} />
      {/each}
    </div>
    
    <!-- CTA -->
    <div class="mt-16 text-center">
      <button
        onclick={() => navigateTo('ABOUT')}
        class="glass rounded-xl px-8 py-3 font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
      >
        Learn more about me →
      </button>
    </div>
  </div>
</section>
