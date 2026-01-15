/**
 * About section data - Static content for the About feature
 */

/**
 * About section data - Static content for the About feature
 */

export interface FocusItem {
    readonly title: string;
}

export interface TechItem {
    readonly label: string;
    readonly iconUrl: string;
}

export interface TechCategory {
    readonly title: string;
    readonly items: readonly TechItem[];
    readonly alignment: 'left' | 'center' | 'right';
}

export const aboutData = {
    intro: `I'm a second-year Computer Science student with a deep passion for software engineering. 
    While my core focus lies in <strong class="text-white">Backend Development</strong>—architecting robust, scalable systems—I am continuously exploring the full spectrum of the stack, including Frontend and UI/UX design.
    
    My goal is not just to write code, but to build efficiently, keeping performance and user experience at the forefront.`,

    focusTitle: 'My Principles',
    focusItems: [
        { title: 'System Scalability' },
        { title: 'Clean Architecture' },
        { title: 'Performance Optimization' },
        { title: 'Continuous Learning' },
    ] as readonly FocusItem[],

    techStacks: [
        {
            title: 'Frontends',
            alignment: 'left',
            items: [
                { label: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { label: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { label: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { label: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                { label: 'TailwindCSS', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
                { label: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { label: 'Vite', iconUrl: 'https://skillicons.dev/icons?i=vite' },
            ]
        },
        {
            title: 'Backends',
            alignment: 'right', // Creative alignment as per user request style
            items: [
                { label: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                { label: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
                { label: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
                { label: 'Bun', iconUrl: 'https://i.imgur.com/x6VrALh.png' },
                { label: 'Express', iconUrl: 'https://skillicons.dev/icons?i=express' },
                { label: 'Hono', iconUrl: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/hono-6ge6rolcrcsqnvk7r685s.png/hono-lni310gpnzm7h0sumu9xrk.png?_a=DATAg1AAZAA0' },
                { label: 'Prisma', iconUrl: 'https://skillicons.dev/icons?i=prisma' },
                { label: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
                { label: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg' },
                { label: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
                { label: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
            ]
        },
        {
            title: 'Currently Learning',
            alignment: 'left',
            items: [
                { label: 'Go', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg' },
                { label: 'NestJS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
                { label: 'k6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k6/k6-original.svg' },
                { label: 'Elasticsearch', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg' },
            ]
        },
        {
            title: 'Tools',
            alignment: 'center',
            items: [
                { label: 'WebStorm', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg' },
                { label: 'DataGrip', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datagrip/datagrip-original.svg' },
                { label: 'Docker', iconUrl: 'https://cdn.simpleicons.org/docker/2496ED' },
                { label: 'Postman', iconUrl: 'https://skillicons.dev/icons?i=postman' },
                { label: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            ]
        }
    ] as readonly TechCategory[],
} as const;
