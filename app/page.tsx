import { Metadata } from 'next';
import Link from './Link';
import { Section, Chip } from './Section';
import { PostList } from './PostList';
import { getPosts } from './posts';
import { sans } from './fonts';
import { site, socials, experience, projects } from './data';
import {
    socialIcons,
    DownloadIcon,
    ArrowRightIcon,
    ExternalIcon,
} from './icons';

const description = `${site.author} — ${site.role} working with React, Next.js, Angular, TypeScript and Node.js / NestJS. Writing about frontend engineering, architecture and performance.`;

export const metadata: Metadata = {
    title: `${site.author} — ${site.role}`,
    description,
    keywords: [
        'Shuhrat Kobulov',
        'Frontend Developer',
        'Full-Stack Developer',
        'Frontend Developer Uzbekistan',
        'React Developer',
        'Angular Developer',
        'TypeScript',
        'Next.js',
        'NestJS',
        'Web Performance',
    ],
    authors: [{ name: site.author, url: site.url }],
    creator: site.author,
    publisher: site.author,
    openGraph: {
        type: 'profile',
        locale: 'en_US',
        url: site.url,
        siteName: site.name,
        title: `${site.author} — ${site.role}`,
        description,
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: `${site.author} — ${site.role}`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${site.author} — ${site.role}`,
        description,
        images: ['/opengraph-image'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: site.url,
        types: {
            'application/rss+xml': `${site.url}/rss.xml`,
            'application/atom+xml': `${site.url}/atom.xml`,
        },
    },
    category: 'Technology',
    other: {
        'google-site-verification':
            'id5xjzE56P-10nCumUy2HOi0jIxl1L6QOwdW5MUqvsc',
    },
};

/** Years of professional experience, counted from the first engineering role. */
function yearsSince(isoMonth: string) {
    const start = new Date(isoMonth + '-01');
    const months =
        (Date.now() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.44);
    return Math.floor(months / 12);
}

export default async function Home() {
    const posts = await getPosts();
    const latest = posts.slice(0, 3);
    const years = yearsSince('2021-01');

    return (
        <>
            <Hero years={years} />

            <Section
                title="Latest writing"
                action={
                    posts.length > 0 ? (
                        <Link
                            href="/posts/"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-link transition-colors hover:text-link-hover"
                        >
                            All posts
                            <ArrowRightIcon size={15} />
                        </Link>
                    ) : undefined
                }
            >
                <PostList posts={latest} />
            </Section>

            <Section title="Where I've worked">
                <ol className="flex flex-col gap-8">
                    {experience.map((job) => (
                        <li key={job.company}>
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                <h3 className="text-lg font-bold text-title">
                                    {job.company}
                                    <span className="font-medium text-muted">
                                        {' '}
                                        · {job.role}
                                    </span>
                                </h3>
                                <p className="shrink-0 font-mono text-xs text-muted">
                                    {job.period}
                                </p>
                            </div>
                            <p className="mt-2 max-w-prose text-body">
                                {job.summary}
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {job.stack.map((tech) => (
                                    <li key={tech}>
                                        <Chip>{tech}</Chip>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </Section>

            <Section title="Side projects">
                <ul
                    className={`grid gap-4 ${
                        projects.length > 1 ? 'sm:grid-cols-2' : ''
                    }`}
                >
                    {projects.map((project) => (
                        <li key={project.name}>
                            <Link
                                href={project.href}
                                className="group flex h-full flex-col rounded-xl border border-line bg-elevated p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift"
                            >
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-lg font-bold text-title">
                                        {project.name}
                                    </h3>
                                    <ExternalIcon
                                        size={14}
                                        className="text-muted transition-colors group-hover:text-link"
                                    />
                                </div>
                                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted">
                                    {project.tagline}
                                </p>
                                <p className="mt-3 flex-1 text-sm text-body">
                                    {project.description}
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <li key={tech}>
                                            <Chip>{tech}</Chip>
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="Get in touch">
                <p className="max-w-prose text-body">
                    I&rsquo;m always happy to talk about frontend architecture,
                    performance work, or an interesting problem you&rsquo;re
                    stuck on. The fastest way to reach me is email.
                </p>
                <Link
                    href={`mailto:${site.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-link transition-colors hover:text-link-hover"
                >
                    {site.email}
                    <ArrowRightIcon size={18} />
                </Link>
            </Section>
        </>
    );
}

function Hero({ years }: { years: number }) {
    return (
        <section>
            <h1
                className={[
                    sans.className,
                    'text-5xl font-black text-title',
                ].join(' ')}
            >
                Hello.
            </h1>
            <p className="my-5 text-2xl font-bold text-title">
                My name is Shuhrat Kobulov.
            </p>

            <p className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold uppercase tracking-wider text-muted">
                <span className="text-accent">{site.role}</span>
                <span aria-hidden="true">·</span>
                <span>{years}+ years</span>
                <span aria-hidden="true">·</span>
                <span>{site.location}</span>
            </p>

            <p className="mb-5 max-w-prose text-lg leading-relaxed">
                I&rsquo;m a frontend developer with strong full-stack
                experience, working at the intersection of{' '}
                <strong className="font-bold text-title">React</strong>,{' '}
                <strong className="font-bold text-title">Angular</strong>,{' '}
                <strong className="font-bold text-title">NestJS</strong> and
                real-world scale. Over the last {years} years I&rsquo;ve gone
                from building intricate dashboards for delivery systems to
                architecting national-scale platforms that digitize entire
                community administrations.
            </p>

            <p className="mb-5 max-w-prose">
                I care about performance, clean architecture, and code
                that&rsquo;s actually tested — React Testing Library and
                Cypress, not just good intentions.
            </p>

            <p className="mb-8 max-w-prose">
                I write here about the things I learn along the way. Most of my
                work is open source on{' '}
                <Link
                    href="https://github.com/shuhrat-kobulov"
                    className="border-b border-link text-link transition-colors hover:text-link-hover"
                >
                    GitHub
                </Link>
                . Away from the keyboard I read, hike, and try to stay in shape.
            </p>

            <div className="flex flex-wrap items-center gap-3">
                <Link
                    href={site.cv}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-on-accent shadow-card transition-transform hover:-translate-y-0.5"
                >
                    <DownloadIcon size={17} />
                    Download CV
                </Link>

                <ul className="flex items-center gap-1">
                    {socials.map((social) => {
                        const Icon =
                            socialIcons[
                                social.name as keyof typeof socialIcons
                            ];
                        return (
                            <li key={social.name}>
                                <Link
                                    href={social.href}
                                    aria-label={`${social.name} — ${social.handle}`}
                                    title={social.name}
                                    className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-title"
                                >
                                    <Icon size={21} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
