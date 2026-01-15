import type { Profile } from '../../shared/types';
import { profileData, socialLinks } from '../../shared/data/profile';

/**
 * Hero section data - Re-exports shared profile data for Hero feature consumption
 */
export const heroData: Profile = {
    ...profileData,
    socialLinks,
} as const;
