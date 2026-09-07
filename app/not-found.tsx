import { sans } from './fonts';
import Link from './Link';
import { ArrowRightIcon } from './icons';

export const metadata = {
    title: 'Page not found',
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="max-w-2xl py-10">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent">
                404
            </p>
            <h1
                className={[
                    sans.className,
                    'mt-3 text-[40px] font-black leading-[44px] text-title',
                ].join(' ')}
            >
                This page doesn&rsquo;t exist
            </h1>
            <p className="mt-4 text-muted">
                The link may be outdated, or the page has moved.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-on-accent transition-transform hover:-translate-y-0.5"
                >
                    Go home
                    <ArrowRightIcon size={16} />
                </Link>
                <Link
                    href="/posts/"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-bold text-title transition-colors hover:border-line-strong hover:bg-subtle"
                >
                    Browse writing
                </Link>
            </div>
        </div>
    );
}
