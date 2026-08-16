/**
 * Single source of truth for the professional content shown across the site.
 *
 * Kept deliberately in sync with the LinkedIn profile
 * (linkedin.com/in/shuhrat-kobulov) — job titles, dates and stack should match
 * it exactly, so update both together.
 */

export const site = {
    name: "Shuhrat's Blog",
    url: 'https://byshuhrat.com',
    author: 'Shuhrat Kobulov',
    role: 'Frontend & Full-Stack Developer',
    /** Longer LinkedIn-style headline, used where there is room for it. */
    headline:
        'Frontend & Full-Stack Developer — React, Next.js, Angular, TypeScript, Node.js / NestJS',
    location: 'Tashkent, Uzbekistan',
    email: 'shukhratbekqobulov@gmail.com',
    cv: '/Shuhrat_Kobulov_CV.pdf',
} as const;

export const socials = [
    {
        name: 'GitHub',
        href: 'https://github.com/shuhrat-kobulov',
        handle: 'shuhrat-kobulov',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/shuhrat-kobulov',
        handle: 'shuhrat-kobulov',
    },
    {
        name: 'Telegram',
        href: 'https://t.me/shuhrats_blog',
        handle: 'shuhrats_blog',
    },
    {
        name: 'Email',
        href: `mailto:${site.email}`,
        handle: site.email,
    },
] as const;

export interface Job {
    company: string;
    role: string;
    period: string;
    /** Machine-readable start date, used for ordering and structured data. */
    start: string;
    summary: string;
    stack: string[];
}

export const experience: Job[] = [
    {
        company: 'Unicon Soft',
        role: 'Frontend Developer',
        period: 'Feb 2025 — Present',
        start: '2025-02',
        summary: 'Contributing to mahalla.ijro.uz, a national-scale platform digitizing local community administration across Uzbekistan — replacing paper-based workflows with a centralized system used daily by administrative staff. Played a key role in building the Social Contracts and Collegial Decisions modules, and improved frontend stability by resolving recurring UI and logic issues, making the system more reliable for non-technical daily users.',
        stack: ['Angular', 'TypeScript', 'RxJS'],
    },
    {
        company: 'Assystem',
        role: 'Full Stack Developer',
        period: 'May 2022 — Feb 2025',
        start: '2022-05',
        summary: 'Built the frontend of a document recognition and classification platform in React.js, designed to help grid engineers work efficiently with technical documents. Cut the ERP system’s initial load time by 5–10 seconds by restructuring API requests to load only critical data at startup. Wrote Python automation for DIgSILENT PowerFactory that reads line data from Excel, runs load flow analysis and generates annotated PDF reports — reducing a manual 4–5 day engineering task to a 10–30 minute process.',
        stack: ['React', 'TypeScript', 'Node.js', 'Python'],
    },
    {
        company: 'optochka inc.',
        role: 'Frontend Developer',
        period: 'Feb 2024 — Jun 2024',
        start: '2024-02',
        summary: 'Designed the frontend architecture using Feature-Sliced Design (FSD) principles to improve scalability, maintainability and code reusability. Contributed to the Telegram Mini App, building customer-facing interfaces for product browsing and delivery order placement, and rebuilt the order placement flow to simplify user interaction and improve conversion reliability.',
        stack: ['React', 'TypeScript', 'FSD'],
    },
    {
        company: 'Abutech',
        role: 'Frontend Developer',
        period: 'Jan 2021 — May 2022',
        start: '2021-01',
        summary: 'Developed and maintained responsive web applications, including a delivery system dashboard, a CRM and an online course platform. Reached 60–70% test coverage with React Testing Library and Cypress, improved video upload performance on a legacy Vue 2 dashboard using tus-js-client for resumable uploads, and documented a reusable component library in Storybook.',
        stack: ['React', 'Vue 2', 'Cypress', 'Storybook'],
    },
];

export interface Project {
    name: string;
    tagline: string;
    description: string;
    href: string;
    stack: string[];
}

export const projects: Project[] = [
    {
        name: 'Pomodo',
        tagline: 'Productivity & task management',
        description: 'A focus timer and task manager built around the Pomodoro technique — my own product, designed, built and shipped end to end.',
        href: 'https://getpomodo.com',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
];

