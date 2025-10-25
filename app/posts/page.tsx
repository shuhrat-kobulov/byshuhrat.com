import Link from '../Link';
import { getPosts, Post } from '../posts';
import { sans } from '../fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog Posts - Shuhrat's Blog",
    description: "Technical articles about software engineering, web development, React, TypeScript, and programming.",
    keywords: [
        "Blog Posts",
        "Technical Articles", 
        "Software Engineering",
        "Web Development",
        "React Tutorials",
        "TypeScript Guide",
        "Programming Blog",
        "Shuhrat Kobulov",
        "Frontend Development",
        "Next.js",
        "JavaScript",
        "Uzbek Programming"
    ],
    authors: [{ name: "Shuhrat Kobulov", url: "https://byshuhrat.com" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://byshuhrat.com/posts",
        siteName: "Shuhrat's Blog",
        title: "Blog Posts - Shuhrat's Blog",
        description: "Technical articles about software engineering, web development, React, TypeScript, and programming.",
        images: [
            {
                url: "https://byshuhrat.com/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Shuhrat's Blog - Technical Articles and Programming Tutorials",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog Posts - Shuhrat's Blog",
        description: "Technical articles about software engineering, web development, React, TypeScript, and programming.",
        images: ["https://byshuhrat.com/opengraph-image"],
        creator: "@shuhrat_kobulov",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://byshuhrat.com/posts",
        types: {
            "application/rss+xml": "https://byshuhrat.com/rss.xml",
            "application/atom+xml": "https://byshuhrat.com/atom.xml",
        },
    },
    category: "Technology",
};

export default async function Home() {
    const posts = await getPosts();
    return (
        <div className="relative -top-[10px] flex flex-col gap-8">
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    className="block py-4 hover:scale-[1.005] will-change-transform"
                    href={'/' + post.slug + '/'}
                >
                    <article>
                        <PostTitle post={post} />
                        <PostMeta post={post} />
                        <PostSubtitle post={post} />
                    </article>
                </Link>
            ))}
        </div>
    );
}

function PostTitle({ post }: { post: Post }) {
    return (
        <h2
            className={[
                sans.className,
                'text-[28px] font-black leading-none mb-2',
                'text-[--lightLink] dark:text-[--darkLink]',
            ].join(' ')}
        >
            {post.title}
        </h2>
    );
}

function PostMeta({ post }: { post: Post }) {
    return (
        <p className="text-[13px]">
            {new Date(post.date).toLocaleDateString('en', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}
        </p>
    );
}

function PostSubtitle({ post }: { post: Post }) {
    return <p className="mt-1">{post.spoiler}</p>;
}
