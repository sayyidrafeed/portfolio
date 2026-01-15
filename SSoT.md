# SSoT.md (Single Source of Truth)

This file defines the Conceptual Truth of the project. It outlines "What" we are building and "Why".
For engineering rules and directory structures ("How"), refer to AGENTS.md.

## Product Vision

"The Anti-Gravity Portfolio"
A high-performance, strictly typed personal portfolio that defies standard static website behavior. It features fluid, state-driven transitions and a modular architecture, presenting content interactively rather than through traditional page loads.

## Core Constraints

Zero Backend: The application must run without a runtime server.

GitHub Pages Compatible: Output must be a pure static asset bundle (/dist).

Performance First:

Lighthouse: Target score of 100 on Performance and Accessibility.

Bundle Size: Initial JS load under 200KB (gzipped).

Type Safety: The codebase must compile with zero TypeScript errors in strict mode.

## Tech Stack

Runtime/Package Manager: Bun

Framework: Svelte (Latest Stable)

Build Tool: Vite

Styling: TailwindCSS

Language: TypeScript

## Data Schema (Conceptual)

Actual interfaces are defined in code (`src/shared/types.ts`), but this implies the data requirements:

### 1. Profile (Single Source of Truth: `src/shared/data/profile.ts`)

- **Name, Tagline, Bio** (Markdown support).
- **Social Links** (Label, URL, Icon identifier).
- **Availability Status**.

> **Data Flow**: `shared/data/profile.ts` → re-exported by `features/hero/data.ts` → consumed by Hero, Footer, Contact.

### 2. Projects (Source: `src/features/showcase/data.ts`)

- **ID**: Unique slug.
- **Media**: Thumbnail (webp), Gallery (array of webp).
- **Details**: Title, Description, Tags (Enum of technologies/methodologies).
- **Category**: UI/UX Design, Frontend, Backend, Fullstack, Other.
- **Links**: Live Demo, Repository.
- **Flags**: `featured`, `archived`.

### 3. About (Source: `src/features/about/data.ts`)

- **Intro**: Bio paragraph.
- **Focus Items**: List of focus areas (title).

### 4. Navigation (Source: `src/shared/lib/navigation.ts`)

- **NavLinks**: Array of { label, view } for consistent navigation across Footer.

### 5. Experience (Future)

- Company, Role, Date Range, Description points.

## Navigation & Interaction Model

SPA Type: State-Driven (Viewport Pattern).

Routing: None (Single URL).

Deep Linking: Optional handling of URL Hash (#projects) only to initialize the specific Viewport state on load.

## END OF SSoT.md