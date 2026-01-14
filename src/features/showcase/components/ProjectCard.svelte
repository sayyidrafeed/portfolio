<script lang="ts">
  import type { Project, ProjectCategory } from "../../../shared/types";

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();

  function getCategoryStyles(category: ProjectCategory): string {
    const styles: Record<ProjectCategory, string> = {
      "UI/UX Design": "bg-rose-500/20 text-rose-300",
      Frontend: "bg-cyan-500/20 text-cyan-300",
      Backend: "bg-emerald-500/20 text-emerald-300",
      Fullstack: "bg-violet-500/20 text-violet-300",
      Other: "bg-slate-500/20 text-slate-300",
    };
    return styles[category];
  }
</script>

<article
  class="group relative overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gravity-500/20"
>
  <!-- Thumbnail -->
  <div class="aspect-video overflow-hidden bg-gray-800">
    <div class="flex h-full items-center justify-center text-gray-600">
      <svg
        class="h-16 w-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  </div>

  <!-- Content -->
  <div class="p-6">
    <!-- Category Badge -->
    <span
      class="mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium {getCategoryStyles(
        project.category,
      )}"
    >
      {project.category}
    </span>

    <h3
      class="mb-2 text-xl font-semibold text-white group-hover:text-gravity-300 transition-colors"
    >
      {project.title}
    </h3>

    <p class="mb-4 text-sm text-gray-400 line-clamp-2">
      {project.description}
    </p>

    <!-- Tech Stack -->
    <div class="mb-4 flex flex-wrap gap-2">
      {#each project.techStack.slice(0, 4) as tech}
        <span class="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-500">
          {tech}
        </span>
      {/each}
    </div>

    <!-- Links -->
    <div class="flex gap-4">
      {#if project.liveUrl}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-gravity-400 hover:text-gravity-300 transition-colors"
        >
          Live Demo →
        </a>
      {/if}
      {#if project.repoUrl}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors"
        >
          Source
        </a>
      {/if}
    </div>
  </div>
</article>
