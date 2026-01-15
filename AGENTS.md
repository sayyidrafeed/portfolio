# AGENTS.md (Engineering Guidelines)

This document outlines the engineering standards, code style, and architectural patterns for the Anti-Gravity Portfolio.
All contributors (and the future self) must adhere to these rules.

## 1. Directory Structure (Feature-Sliced Modular Monolith)

We adopt a Domain-Driven directory structure. Code is organized by Feature (business domain), not by technical type.

```bash
src/
├── app/                  # Application entry & global configurations
│   ├── main.ts           # Entry point
│   ├── app.css           # Global Tailwind directives & resets
│   └── App.svelte        # Main layout & Viewport Controller
│
├── features/             # THE MODULAR MONOLITH (Feature Domains)
│   ├── hero/             # Hero Section Feature
│   │   ├── data.ts       # Re-exports from shared/data/profile.ts
│   │   └── index.svelte  # Main container for this feature
│   │
│   ├── showcase/         # Project/Work Showcase Feature
│   │   ├── components/   # (e.g., ProjectCard.svelte)
│   │   ├── data.ts       # Projects data list (Strictly Typed)
│   │   └── index.svelte
│   │
│   ├── about/            # About Me Feature
│   │   ├── data.ts       # About content (intro, focus items)
│   │   └── index.svelte
│   │
│   └── contact/          # Contact Feature
│       ├── components/   # (e.g., CopyEmailButton.svelte)
│       └── index.svelte
│
├── shared/               # SHARED RESOURCES (Reusable across features)
│   ├── data/             # Shared data (Single Source of Truth)
│   │   └── profile.ts    # Profile name, bio, socialLinks
│   ├── ui/               # Atomic/Dumb Components (Buttons, Inputs, Typo)
│   │   ├── GravityButton.svelte   # Primary/Secondary action button
│   │   ├── BackButton.svelte      # Navigation back button
│   │   ├── SectionHeader.svelte   # Typewriter heading with back button
│   │   ├── SocialIcon.svelte      # Social media icons
│   │   ├── Typewriter.svelte      # Typewriter text effect
│   │   └── layout/
│   │       └── Footer.svelte      # Global footer component
│   ├── assets/           # Global static assets (Logos, OG Images)
│   ├── lib/              # Utilities, hooks, constants
│   │   └── navigation.ts # Navigation links config (NavLink[])
│   ├── stores/           # Global state (Theme, Active Viewport)
│   │   └── activeView.ts # Viewport state management
│   └── types.ts          # SHARED TYPESCRIPT INTERFACES (The Contract)
```

### Important Architecture Rules

1. **Shared NEVER imports from Features**: The `shared/` directory must remain independent. Features can import from shared, but never the reverse.

2. **Profile Data Flow**: `shared/data/profile.ts` is the single source of truth. Features like Hero re-export it via their own `data.ts` for convenience.

3. **Reusable UI in shared/ui**: Components like `GravityButton`, `BackButton`, `SectionHeader` belong in `shared/ui/` since they're used across multiple features.

## 2. TypeScript & Data Standards

This project enforces Strict Type Safety.

Strict Mode: strict: true is mandatory in tsconfig.json.

No any: The usage of any is strictly prohibited. Use unknown with type narrowing or Generics if necessary.

Explicit Interfaces:

All data entities must define their shape in src/shared/types.ts.

Example: Project, Profile, SocialLink.

Prop Typing: All Svelte components must explicitly type their export let props using interfaces.

## 3. The "Anti-Gravity" Navigation Strategy

We DO NOT use standard URL routing (no svelte-routing or svelte-navigator).

Pattern: Viewport State Pattern.

Mechanism:

The app is a single container.

Navigation is handled by a global Svelte Store (e.g., activeView).

Features (Hero, Showcase) are mounted/unmounted dynamically based on this state.

Transitions:

Changes in activeView must trigger fluid transitions (fade, fly, blur) to simulate the "Anti-Gravity" feel.

Avoid hard cuts between sections.

## 4. Asset & Performance Budget

To maintain a Lighthouse score of 100:

Image Format: All raster images MUST be .webp.

Size Constraints:

Hero Banner: Max 150KB.

Project Thumbnails: Max 50KB each.

Loading Strategy:

Assets strictly inside the viewport = eager.

Assets outside the viewport = lazy.

Icons: Prefer inline SVG or unplugin-icons over strict .svg file imports to reduce HTTP requests.

## 5. Component Design Rules

Co-location: Styles and logic specific to a feature stay inside that feature's folder.

Atomic Design: Reusable UI elements (Buttons, Cards) go to src/shared/ui and must not contain business logic.

Logic Separation: If a component exceeds 150 lines, extract logic into a generic .ts file (hook pattern).

## 6. Animation Strategy
    
   - **Mount/Unmount**: Use **Svelte Transitions** (`transition:`, `in:`, `out:`).
     - Example: `in:fly={{ y: 20 }}` for entering views.
   - **Continuous/Ambient**: Use **CSS Keyframes** defined in `tailwind.config.js`.
     - *Why?* Runs off the main thread, cheaper for infinite loops.
     - Example: `animate-float`, `animate-glow`.
   - **Micro-interactions**: Use CSS transitions via Tailwind classes (`transition-all duration-300 hover:scale-105`).

## 7. Styling Hierarchy

   - **Level 1 (Primary)**: Tailwind Utility Classes (e.g., `flex`, `p-4`, `text-white`).
   - **Level 2 (Complex/Reusable)**: Abstract into Custom CSS Classes in `app.css` (Components Layer).
     - Use for complex visual effects like Glassmorphism that require multiple properties.
     - Example: `.glass`, `.glass-card`.
   - **Level 3 (Scoped)**: `<style>` blocks in Svelte components (Avoid if possible, prefer Level 1 or 2).

## 8. Git Workflow

Commit Convention: Conventional Commits (e.g., feat: add project showcase, fix: hero responsiveness).

Branching: Direct push to main is allowed for solo dev, but code must build locally (bun run build) before pushing.

## END OF AGENTS.md