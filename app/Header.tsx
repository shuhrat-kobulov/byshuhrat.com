'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from './Link';
import ThemeToggle from './ThemeToggle';
import { sans } from './fonts';
import { site } from './data';

const nav = [
    { label: 'Blog', href: '/posts/', title: 'Articles and notes' },
    {
        label: 'CV',
        href: site.cv,
        title: `Curriculum vitae — ${site.author}`,
        external: true,
    },
];

export const Header = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    // The header only frosts over once the page has moved; at the top it stays
    // transparent so it doesn't cut a visible band across the paper texture.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={[
                'site-header sticky top-0 z-40',
                scrolled ? 'is-scrolled' : '',
            ].join(' ')}
        >
            {/* Wraps rather than overflows on very narrow phones (≤360px). */}
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-5 py-4 sm:gap-x-4">
                <Link
                    href="/"
                    aria-current={pathname === '/' ? 'page' : undefined}
                    className={[
                        sans.className,
                        'inline-block whitespace-nowrap text-base font-black text-title transition-transform sm:text-xl md:text-2xl',
                        pathname === '/' ? '' : 'hover:scale-[1.02]',
                    ].join(' ')}
                >
                    Shuhrat&rsquo;s Blog
                </Link>

                <nav aria-label="Main">
                    <ul className="flex flex-row items-center gap-3 sm:gap-5 md:gap-6">
                        {nav.map((item) => {
                            const isActive =
                                !item.external &&
                                pathname.startsWith(
                                    item.href.replace(/\/$/, '')
                                );
                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        title={item.title}
                                        target={
                                            item.external ? '_blank' : undefined
                                        }
                                        aria-current={
                                            isActive ? 'page' : undefined
                                        }
                                        className={[
                                            'whitespace-nowrap text-xs font-bold transition-colors sm:text-sm md:text-base',
                                            isActive
                                                ? 'text-title'
                                                : 'text-muted hover:text-title',
                                        ].join(' ')}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="flex items-center">
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
