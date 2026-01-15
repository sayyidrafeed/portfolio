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
        <p class="text-lg text-gray-300 leading-relaxed mb-8">
          {@html aboutData.intro}
        </p>

        <div class="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 class="font-display text-xl font-semibold text-white mb-6">
              {aboutData.focusTitle}
            </h3>
            <ul class="space-y-4">
              {#each aboutData.focusItems as item}
                <li class="flex items-center gap-3 text-gray-400 group">
                  <span
                    class="h-2 w-2 rounded-full bg-gravity-400 transition-all duration-300 group-hover:scale-150 group-hover:bg-gravity-300"
                  ></span>
                  <span class="group-hover:text-white transition-colors"
                    >{item.title}</span
                  >
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- Tech Stack Section -->
        <div class="space-y-12">
          {#each aboutData.techStacks as stack}
            <div class="space-y-4">
              <h4
                class="font-display text-lg font-medium text-white/80
                       {stack.alignment === 'right'
                  ? 'text-right'
                  : stack.alignment === 'center'
                    ? 'text-center'
                    : 'text-left'}"
              >
                {stack.title}
              </h4>

              <div
                class="flex flex-wrap gap-4 items-center
                       {stack.alignment === 'right'
                  ? 'justify-end'
                  : stack.alignment === 'center'
                    ? 'justify-center'
                    : 'justify-start'}"
              >
                {#each stack.items as tech}
                  <div
                    class="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/5 p-3 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-gravity-500/20"
                    title={tech.label}
                  >
                    <img
                      src={tech.iconUrl}
                      alt={tech.label}
                      class="h-10 w-10 object-contain drop-shadow transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                      loading="lazy"
                    />

                    <!-- Tooltip on hover -->
                    <div
                      class="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-white/70 bg-black/80 px-2 py-1 rounded pointer-events-none transform translate-y-1 group-hover:translate-y-0"
                    >
                      {tech.label}
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
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
