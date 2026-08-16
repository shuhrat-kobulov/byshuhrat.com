import type { Metadata, Viewport } from 'next';
import PlausibleProvider from 'next-plausible';
import { sans } from './fonts';
import './global.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { site, socials } from './data';

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#faf5ee' },
        { media: '(prefers-color-scheme: dark)', color: '#14151a' },
    ],
    colorScheme: 'light dark',
};

/**
 * Resolves the stored theme onto <html> before first paint, so a dark-mode
 * visitor never sees a flash of the light palette.
 */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();`;

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.author,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.headline,
    image: 'https://github.com/shuhrat-kobulov.png',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tashkent',
        addressCountry: 'UZ',
    },
    sameAs: socials
        .filter((s) => !s.href.startsWith('mailto:'))
        .map((s) => s.href),
    knowsAbout: [
        'Frontend Development',
        'Full-Stack Development',
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Angular',
        'Node.js',
        'NestJS',
        'Web Performance',
    ],
};

const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    inLanguage: 'en',
    author: { '@type': 'Person', name: site.author },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sans.className} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([personJsonLd, siteJsonLd]),
                    }}
                />
            </head>
            <body className="site-shell bg-bg text-body">
                <PlausibleProvider domain="byshuhrat.com">
                    <a href="#content" className="skip-link">
                        Skip to content
                    </a>
                    <Header />
                    {/* grow pushes the footer down on short pages. */}
                    <main
                        id="content"
                        className="mx-auto w-full max-w-4xl grow px-5 pb-12 pt-10"
                    >
                        {children}
                    </main>
                    <div className="mx-auto w-full max-w-4xl px-5 pb-12">
                        <Footer />
                    </div>
                </PlausibleProvider>
            </body>
        </html>
    );
}
