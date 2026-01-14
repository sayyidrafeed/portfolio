import type { Profile } from '../../shared/types';

export const heroData: Profile = {
    name: 'Rafee',
    tagline: 'Building the future, one line of code at a time',
    bio: `I'm a passionate software engineer who specializes in crafting **high-performance** web applications. I believe in clean code, thoughtful architecture, and pixel-perfect experiences.`,
    socialLinks: [
        {
            label: 'GitHub',
            url: 'https://github.com/rafee',
            icon: 'github',
        },
        {
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/rafee',
            icon: 'linkedin',
        },
        {
            label: 'Twitter',
            url: 'https://twitter.com/rafee',
            icon: 'twitter',
        },
    ],
    availabilityStatus: 'available',
} as const;
