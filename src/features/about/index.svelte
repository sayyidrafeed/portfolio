<script lang="ts">
  import { navigateTo } from "../../shared/stores/activeView";
  import Footer from "../../shared/ui/layout/Footer.svelte";
  import SectionHeader from "../../shared/ui/SectionHeader.svelte";
  import GravityButton from "../../shared/ui/GravityButton.svelte";
  import { aboutData } from "./data";
</script>

<section class="min-h-screen w-full px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <!-- Header -->
    <SectionHeader backTo="HERO" preText="About " gradientText="Me" />

    <!-- About Content -->
    <div class="glass-card rounded-2xl p-8 md:p-12">
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
          {aboutData.intro}
        </p>

        <h3 class="font-display text-xl font-semibold text-white mb-4">
          {aboutData.focusTitle}
        </h3>
        <ul class="space-y-3 text-gray-400">
          {#each aboutData.focusItems as item}
            <li class="flex items-start gap-3">
              <span
                class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gravity-400"
              ></span>
              <span>{item.title}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-12 flex justify-center gap-4">
      <GravityButton onclick={() => navigateTo("SHOWCASE")} variant="secondary">
        View My Work
      </GravityButton>
    </div>
  </div>
</section>

<Footer />
