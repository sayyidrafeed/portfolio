import type { Profile } from '../../shared/types';

export const heroData: Profile = {
    name: 'Rafee',
    tagline: 'Shaping the future through code, while learning every step.',
    bio: `Hi hi, I'm Rafee. A CS Student. `,
    socialLinks: [
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
    ],
    availabilityStatus: 'available',
} as const;
