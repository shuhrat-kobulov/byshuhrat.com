import { Metadata } from 'next';
import { getPosts } from '../posts';
import { PostList } from '../PostList';
import { sans } from '../fonts';
import { site } from '../data';

const description =
    'Articles and notes on frontend engineering — React, Angular, TypeScript, architecture and web performance.';

export const metadata: Metadata = {
    title: `Writing — ${site.author}`,
    description,
    keywords: [
        'Frontend Engineering Blog',
        'React',
        'Angular',
        'TypeScript',
        'Next.js',
        'Web Performance',
        'Shuhrat Kobulov',
    ],
    authors: [{ name: site.author, url: site.url }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${site.url}/posts/`,
        siteName: site.name,
        title: `Writing — ${site.author}`,
        description,
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: `${site.name} — articles on frontend engineering`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Writing — ${site.author}`,
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
        canonical: `${site.url}/posts/`,
        types: {
            'application/rss+xml': `${site.url}/rss.xml`,
            'application/atom+xml': `${site.url}/atom.xml`,
        },
    },
    category: 'Technology',
};

export default async function Posts() {
    const posts = await getPosts();

    return (
        <div>
            <header className="mb-10">
                <h1
                    className={[
                        sans.className,
                        'text-4xl font-black text-title',
                    ].join(' ')}
                >
                    Writing
                </h1>
                <p className="mt-3 max-w-prose text-muted">{description}</p>
            </header>

            <PostList posts={posts} />
        </div>
    );
}
