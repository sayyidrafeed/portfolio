<script lang="ts">
  import { heroData } from "../../../features/hero/data";
  import { navigateTo } from "../../stores/activeView";

  const currentYear = new Date().getFullYear();
</script>

<footer class="w-full border-t border-white/10 py-12 px-6">
  <div class="mx-auto max-w-6xl">
    <div
      class="flex flex-col items-center gap-8 md:flex-row md:justify-between"
    >
      <!-- Copyright & Built With -->
      <div class="text-center md:text-left">
        <p class="text-sm text-gray-500">
          © {currentYear}
          {heroData.name}. All rights reserved.
        </p>
        <p class="mt-1 text-xs text-gray-600">Built with a lots of prompts</p>
      </div>

      <!-- Navigation Links -->
      <div class="flex items-center gap-6">
        <button
          onclick={() => navigateTo("HERO")}
          class="text-sm text-gray-500 transition-colors hover:text-gray-300"
        >
          Home
        </button>
        <button
          onclick={() => navigateTo("SHOWCASE")}
          class="text-sm text-gray-500 transition-colors hover:text-gray-300"
        >
          Work
        </button>
        <button
          onclick={() => navigateTo("ABOUT")}
          class="text-sm text-gray-500 transition-colors hover:text-gray-300"
        >
          About
        </button>
        <button
          onclick={() => navigateTo("CONTACT")}
          class="text-sm text-gray-500 transition-colors hover:text-gray-300"
        >
          Contact
        </button>
      </div>

      <!-- Social Links -->
      <div class="flex items-center gap-4">
        {#each heroData.socialLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 transition-colors hover:text-gravity-400"
            aria-label={link.label}
          >
            <span class="text-xs font-medium">{link.label}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>
