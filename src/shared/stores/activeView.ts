import { writable } from 'svelte/store';
import type { ViewportState } from '../types';

/**
 * Active Viewport Store
 * Controls which feature section is currently displayed
 */
export const activeView = writable<ViewportState>('HERO');

/**
 * Navigate to a specific viewport with optional history push
 */
export function navigateTo(view: ViewportState, pushHistory = true): void {
    activeView.set(view);

    if (pushHistory && typeof window !== 'undefined') {
        const hash = view.toLowerCase();
        window.history.pushState({ view }, '', `#${hash}`);
    }
}

/**
 * Initialize viewport from URL hash on page load
 */
export function initViewportFromHash(): void {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash.slice(1).toUpperCase();
    const validViews: ViewportState[] = ['HERO', 'SHOWCASE', 'ABOUT'];

    if (validViews.includes(hash as ViewportState)) {
        activeView.set(hash as ViewportState);
    }

    // Handle browser back/forward
    window.addEventListener('popstate', (event: PopStateEvent) => {
        const state = event.state as { view?: ViewportState } | null;
        if (state?.view) {
            activeView.set(state.view);
        } else {
            // Fallback: read from hash
            const fallbackHash = window.location.hash.slice(1).toUpperCase();
            if (validViews.includes(fallbackHash as ViewportState)) {
                activeView.set(fallbackHash as ViewportState);
            } else {
                activeView.set('HERO');
            }
        }
    });
}
