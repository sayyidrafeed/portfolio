<script lang="ts">
  import { heroData } from "./data";
  import { navigateTo } from "../../shared/stores/activeView";
  import GravityButton from "./components/GravityButton.svelte";
  import Typewriter from "../../shared/ui/Typewriter.svelte";
</script>

<section
  class="flex min-h-screen w-full items-center justify-center px-6 py-20"
>
  <div class="mx-auto max-w-4xl text-center">
    <!-- Availability Badge -->
    <div
      class="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2"
    >
      <span class="relative flex h-2 w-2">
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
        ></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"
        ></span>
      </span>
      <span class="text-sm text-gray-300">Available for opportunities</span>
    </div>

    <!-- Name & Tagline -->
    <h1
      class="mb-6 font-display text-5xl font-bold tracking-tight text-white md:text-7xl"
    >
      <Typewriter text="Hi, I'm " speed={60} hideCursorOnComplete={true} /><span
        class="text-gradient"
        ><Typewriter text={heroData.name} speed={100} delay={500} /></span
      >
    </h1>

    <p class="mb-8 text-xl text-gray-400 md:text-2xl">
      {heroData.tagline}
    </p>

    <!-- Bio -->
    <p class="mx-auto mb-12 max-w-2xl text-lg text-gray-500">
      {heroData.bio}
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-wrap items-center justify-center gap-4">
      <GravityButton onclick={() => navigateTo("SHOWCASE")} variant="primary">
        View My Work
      </GravityButton>
      <GravityButton onclick={() => navigateTo("ABOUT")} variant="secondary">
        About Me
      </GravityButton>
      <GravityButton onclick={() => navigateTo("CONTACT")} variant="secondary">
        Contact Me
      </GravityButton>
    </div>

    <!-- Social Links -->
    <div class="mt-16 flex items-center justify-center gap-6">
      {#each heroData.socialLinks as link}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 transition-colors duration-200 hover:text-gravity-400"
          aria-label={link.label}
        >
          <span class="text-sm font-medium">{link.label}</span>
        </a>
      {/each}
    </div>
  </div>
</section>
