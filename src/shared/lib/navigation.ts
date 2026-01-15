import type { ViewportState } from '../types';

/**
 * Navigation configuration - Single Source of Truth
 * Defines all navigation links used in Footer and other navigation components
 */
export interface NavLink {
    readonly label: string;
    readonly view: ViewportState;
}

export const navLinks: readonly NavLink[] = [
    { label: 'Home', view: 'HERO' },
    { label: 'Work', view: 'SHOWCASE' },
    { label: 'About', view: 'ABOUT' },
    { label: 'Contact', view: 'CONTACT' },
] as const;
