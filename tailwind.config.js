/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./{app,public}/**/*.{js,ts,jsx,tsx,md,mdx}'],
    // Theming runs on CSS custom properties (see app/global.css). This keeps
    // the `dark:` variant working for any leftover call sites.
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)',
                elevated: 'var(--bg-elevated)',
                subtle: 'var(--bg-subtle)',
                line: 'var(--border)',
                'line-strong': 'var(--border-strong)',
                body: 'var(--text)',
                muted: 'var(--text-muted)',
                title: 'var(--title)',
                link: 'var(--link)',
                'link-hover': 'var(--link-hover)',
                accent: 'var(--accent)',
                'accent-soft': 'var(--accent-soft)',
                'on-accent': 'var(--on-accent)',
                pomodo: 'var(--pomodo)',
                'pomodo-hover': 'var(--pomodo-hover)',
            },
            boxShadow: {
                card: 'var(--shadow-sm)',
                lift: 'var(--shadow-md)',
            },
            fontFamily: {
                mono: 'var(--font-mono)',
            },
            maxWidth: {
                prose: '42rem',
            },
        },
    },
    plugins: [],
};
