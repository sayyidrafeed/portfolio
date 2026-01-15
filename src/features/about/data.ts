/**
 * About section data - Static content for the About feature
 */

export interface FocusItem {
    readonly title: string;
}

export const aboutData = {
    intro: `I'm a passionate software developer with a high curiosity for learning
        and a deep love for building elegant, high-performance web
        applications. My journey in tech has taken me through various domains,
        from front-end development to backend systems, always with a focus on
        clean architecture and exceptional user experiences.`,
    focusTitle: 'What I Focus on',
    focusItems: [
        { title: 'Interaction Design' },
        { title: 'System Architecture' },
        { title: 'App Performance' },
        { title: 'Developer Experience' },
    ] as readonly FocusItem[],
} as const;
