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
│   │   ├── components/   # UI components specific to Hero (e.g., GravityButton.svelte)
│   │   ├── data.ts       # Static data specific to Hero
│   │   └── index.svelte  # Main container for this feature
│   │
│   ├── showcase/         # Project/Work Showcase Feature
│   │   ├── components/   # (e.g., ProjectCard.svelte, Filter.svelte)
│   │   ├── data.ts       # Projects data list (Strictly Typed)
│   │   └── index.svelte
│   │
│   └── about/            # About Me Feature
│
├── shared/               # SHARED RESOURCES (Reusable across features)
│   ├── ui/               # Atomic/Dumb Components (Buttons, Inputs, Typo)
│   ├── assets/           # Global static assets (Logos, OG Images)
│   ├── lib/              # Utilities, hooks, constants
│   ├── stores/           # Global state (Theme, Active Viewport)
│   └── types.ts          # SHARED TYPESCRIPT INTERFACES (The Contract)
```

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

## 6. Git Workflow

Commit Convention: Conventional Commits (e.g., feat: add project showcase, fix: hero responsiveness).

Branching: Direct push to main is allowed for solo dev, but code must build locally (bun run build) before pushing.

## END OF AGENTS.md