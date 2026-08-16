'use client';

import { SunIcon, MoonIcon } from './icons';

/**
 * Runs before first paint (see layout.tsx) so the page never flashes the
 * wrong palette. Duplicated as a string there because it must be inline.
 */
export const THEME_STORAGE_KEY = 'theme';

export default function ThemeToggle() {
    function toggle() {
        const root = document.documentElement;
        const current =
            root.getAttribute('data-theme') ??
            (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light');
        const next = current === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', next);
        try {
            localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
            // Private mode / storage disabled — the toggle still works for
            // this page view, it just will not be remembered.
        }

        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute('content', next === 'dark' ? '#14151a' : '#faf5ee');
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Switch between light and dark theme"
            title="Switch theme"
            className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-title sm:h-9 sm:w-9"
        >
            <SunIcon size={18} className="theme-icon-light" />
            <MoonIcon size={18} className="theme-icon-dark" />
        </button>
    );
}
