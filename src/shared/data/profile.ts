import type { SocialLink } from '../types';

/**
 * Shared profile data - Single Source of Truth
 * Used across Hero, Footer, and Contact sections
 */
export const profileData = {
    name: 'Rafee',
    tagline: 'Shaping the future through code, while learning every step.',
    bio: `Hi hi, I'm Sayyid Rafee. A CS Student. I'm a tech enthusiast, always learning and exploring new technologies.
        I'm currently learning web development and backend development.`,
    availabilityStatus: 'available' as const,
} as const;

export const socialLinks: readonly SocialLink[] = [
    {
        label: 'GitHub',
        url: 'https://github.com/sayyidrafeed',
        icon: 'github',
    },
    {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/m-sayyid-rafee-djamil/',
        icon: 'linkedin',
    },
    {
        label: 'Twitter',
        url: 'https://x.com/RFD77538690',
        icon: 'twitter',
    },
] as const;
