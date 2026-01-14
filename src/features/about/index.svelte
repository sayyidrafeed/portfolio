<script lang="ts">
  import { navigateTo } from "../../shared/stores/activeView";
  import Footer from "../../shared/ui/layout/Footer.svelte";
  import Typewriter from "../../shared/ui/Typewriter.svelte";
</script>

<section class="min-h-screen w-full px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <!-- Header -->
    <div class="mb-12 text-center">
      <button
        onclick={() => navigateTo("HERO")}
        class="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
      >
        ← Back to Home
      </button>

      <h2 class="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
        <Typewriter text="About " speed={80} hideCursorOnComplete={true} /><span
          class="text-gradient"
          ><Typewriter text="Me" speed={100} delay={400} /></span
        >
      </h2>
    </div>

    <!-- About Content -->
    <div class="glass-card rounded-2xl p-8 md:p-12">
      <div class="prose prose-invert max-w-none">
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
          I'm a passionate software developer with a high curiosity for learning
          and a deep love for building elegant, high-performance web
          applications. My journey in tech has taken me through various domains,
          from front-end development to backend systems, always with a focus on
          clean architecture and exceptional user experiences.
        </p>

        <h3 class="font-display text-xl font-semibold text-white mb-4">
          What I Focus on
        </h3>
        <ul class="space-y-3 text-gray-400">
          <li class="flex items-start gap-3">
            <span
              class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gravity-400"
            ></span>
            <span>Interaction Design</span>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gravity-400"
            ></span>
            <span>System Architecture</span>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gravity-400"
            ></span>
            <span>App Performance</span>
          </li>
          <li class="flex items-start gap-3">
            <span
              class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gravity-400"
            ></span>
            <span>Developer Experience</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-12 flex justify-center gap-4">
      <button
        onclick={() => navigateTo("SHOWCASE")}
        class="glass rounded-xl px-8 py-3 font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
      >
        View My Work
      </button>
    </div>
  </div>
</section>

<Footer />
