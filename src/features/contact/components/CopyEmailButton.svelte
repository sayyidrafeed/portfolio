<script lang="ts">
  let copied = $state(false);
  
  const email = 'hello@rafee.dev';
  
  async function copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }
</script>

<button
  onclick={copyEmail}
  class="group relative glass rounded-xl px-8 py-4 font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
>
  <span class="flex items-center gap-3">
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    <span>{email}</span>
    <svg class="h-4 w-4 text-gray-500 group-hover:text-gravity-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  </span>

  <!-- Toast -->
  {#if copied}
    <span 
      class="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-gravity-500 px-3 py-1.5 text-sm font-medium text-white shadow-lg"
    >
      Email copied!
    </span>
  {/if}
</button>
