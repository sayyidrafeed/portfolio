<script lang="ts">
  import { projects } from "./data";
  import { navigateTo } from "../../shared/stores/activeView";
  import ProjectCard from "./components/ProjectCard.svelte";
  import Footer from "../../shared/ui/layout/Footer.svelte";
  import SectionHeader from "../../shared/ui/SectionHeader.svelte";
  import GravityButton from "../../shared/ui/GravityButton.svelte";
</script>

<section class="min-h-screen w-full px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <!-- Header -->
    <SectionHeader backTo="HERO" preText="My " gradientText="Work" />

    <p class="mx-auto max-w-2xl text-lg text-gray-400 text-center -mt-8 mb-12">
      A collection of projects I've built, from web applications, UI and
      everything in between.
    </p>

    <!-- Projects Grid -->
    <div class="grid gap-8 md:grid-cols-2">
      {#each projects as project (project.id)}
        <ProjectCard {project} />
      {/each}
    </div>

    <!-- CTA -->
    <div class="mt-16 text-center">
      <GravityButton onclick={() => navigateTo("ABOUT")} variant="secondary">
        Learn more about me →
      </GravityButton>
    </div>
  </div>
</section>

<Footer />
