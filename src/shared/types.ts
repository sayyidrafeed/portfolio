/**
 * Shared TypeScript Interfaces - The Contract
 * All data entities are defined here for type safety.
 */

/**
 * Viewport states for the Anti-Gravity navigation
 */
export type ViewportState = 'HERO' | 'SHOWCASE' | 'ABOUT';

/**
 * Social link definition
 */
export interface SocialLink {
    readonly label: string;
    readonly url: string;
    readonly icon: string; // Icon identifier (e.g., 'github', 'linkedin')
}

/**
 * Profile data for the hero section
 */
export interface Profile {
    readonly name: string;
    readonly tagline: string;
    readonly bio: string; // Markdown support
    readonly socialLinks: readonly SocialLink[];
    readonly availabilityStatus: 'available' | 'busy' | 'unavailable';
}

/**
 * Tech stack enumeration
 */
export type TechStack =
    | 'TypeScript'
    | 'Svelte'
    | 'React'
    | 'Vue'
    | 'Node'
    | 'Go'
    | 'Rust'
    | 'Python'
    | 'TailwindCSS'
    | 'PostgreSQL'
    | 'Redis'
    | 'Docker'
    | 'AWS'
    | 'GCP'
    | 'Vite'
    | 'Bun';

/**
 * Project/Work showcase item
 */
export interface Project {
    readonly id: string; // Unique slug
    readonly title: string;
    readonly description: string;
    readonly thumbnail: string; // webp path
    readonly gallery: readonly string[]; // Array of webp paths
    readonly techStack: readonly TechStack[];
    readonly liveUrl?: string;
    readonly repoUrl?: string;
    readonly featured: boolean;
    readonly archived: boolean;
}

/**
 * Work experience entry
 */
export interface Experience {
    readonly company: string;
    readonly role: string;
    readonly startDate: string; // ISO date string
    readonly endDate?: string; // ISO date string, undefined = present
    readonly description: readonly string[]; // Bullet points
}
