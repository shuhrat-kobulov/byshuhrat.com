import { Fragment } from 'react';
import { readFile } from 'fs/promises';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import Link from '../Link';
import { sans } from '../fonts';
import remarkSmartpants from 'remark-smartypants';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkMdxEvalCodeBlock } from './mdx';
import overnight from 'overnight/themes/Overnight-Slumber.json';
import './markdown.css';
import remarkGfm from 'remark-gfm';
import { getPost, getPostSlugs } from '../posts';
import { formatDate } from '../PostList';
import { site } from '../data';
import { ArrowRightIcon } from '../icons';

overnight.colors['editor.background'] = 'var(--code-bg)';

/** Rough reading time, at the usual 200 words-per-minute yardstick. */
function readingTime(content: string) {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const { content, data } = post;
    const filename = './public/' + slug + '/index.md';

    let postComponents: any = {};
    try {
        postComponents = await import('../../public/' + slug + '/components.js');
    } catch (e: any) {
        if (!e || e.code !== 'MODULE_NOT_FOUND') {
            throw e;
        }
    }
    const Wrapper = postComponents.Wrapper ?? Fragment;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.title,
        description: data.spoiler,
        datePublished: data.date,
        dateModified: data.date,
        author: {
            '@type': 'Person',
            name: site.author,
            url: site.url,
        },
        publisher: {
            '@type': 'Person',
            name: site.author,
            url: site.url,
        },
        mainEntityOfPage: `${site.url}/${slug}/`,
        url: `${site.url}/${slug}/`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Link
                href="/posts/"
                className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-title"
            >
                <ArrowRightIcon size={15} className="rotate-180" />
                All writing
            </Link>

            <article>
                <h1
                    className={[
                        sans.className,
                        'text-[40px] font-black leading-[44px] text-title',
                    ].join(' ')}
                >
                    {data.title}
                </h1>
                <p className="mt-3 text-[13px] text-muted">
                    <time dateTime={data.date}>{formatDate(data.date)}</time>
                    <span aria-hidden="true"> · </span>
                    {readingTime(content)} min read
                </p>

                <div className="markdown mt-8">
                    <Wrapper>
                        <MDXRemote
                            source={content}
                            components={{
                                a: Link,
                                img: async ({ src, ...rest }) => {
                                    if (
                                        src &&
                                        !/^https?:\/\//.test(src) &&
                                        src.endsWith('.svg')
                                    ) {
                                        const svgPath = `./public/${slug}/${src}`;
                                        const svgContent = await readFile(
                                            svgPath,
                                            'utf8'
                                        );
                                        const maxWidth = src.endsWith(
                                            '-full.svg'
                                        )
                                            ? '100%'
                                            : '450px';
                                        const colorReplacedSvg = svgContent
                                            .replace(
                                                /#ffffff/gi,
                                                'var(--bg-rotated)'
                                            )
                                            .replace(
                                                /<metadata>[\s\S]*?<\/metadata>/,
                                                ''
                                            )
                                            .replace(
                                                '<svg',
                                                `<svg style="max-width: ${maxWidth}; width: 100%; height: auto;"`
                                            );

                                        return (
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: colorReplacedSvg,
                                                }}
                                                style={{
                                                    filter: 'var(--svg-filter)',
                                                    display: 'inline-block',
                                                    ...rest.style,
                                                }}
                                                {...rest}
                                            />
                                        );
                                    }

                                    let finalSrc = src;
                                    if (src && !/^https?:\/\//.test(src)) {
                                        finalSrc = `/${slug}/${src}`;
                                    }

                                    // Empty alt first so images written
                                    // without one are announced as decorative
                                    // rather than read out as a filename.
                                    return <img alt="" src={finalSrc} {...rest} />;
                                },
                                Video: ({ src, ...rest }) => {
                                    let finalSrc = src;
                                    if (src && !/^https?:\/\//.test(src)) {
                                        finalSrc = `/${slug}/${src}`;
                                    }
                                    return <video src={finalSrc} {...rest} />;
                                },
                                ...postComponents,
                            }}
                            options={{
                                mdxOptions: {
                                    useDynamicImport: true,
                                    remarkPlugins: [
                                        remarkSmartpants,
                                        remarkGfm,
                                        [remarkMdxEvalCodeBlock, filename],
                                    ] as any,
                                    rehypePlugins: [
                                        [
                                            rehypePrettyCode,
                                            {
                                                theme: overnight,
                                            },
                                        ],
                                        [rehypeSlug],
                                        [
                                            rehypeAutolinkHeadings,
                                            {
                                                behavior: 'wrap',
                                                properties: {
                                                    className: 'linked-heading',
                                                    target: '_self',
                                                },
                                            },
                                        ],
                                    ] as any,
                                } as any,
                            }}
                        />
                    </Wrapper>
                </div>
            </article>

            <footer className="mt-12 border-t border-line pt-8">
                <p className="text-sm text-muted">
                    Written by{' '}
                    <Link
                        href="/"
                        className="font-semibold text-link transition-colors hover:text-link-hover"
                    >
                        {site.author}
                    </Link>
                    , {site.role}. Questions or corrections are welcome at{' '}
                    <Link
                        href={`mailto:${site.email}`}
                        className="text-link transition-colors hover:text-link-hover"
                    >
                        {site.email}
                    </Link>
                    .
                </p>
            </footer>
        </>
    );
}

export async function generateStaticParams() {
    const slugs = await getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return { title: `Not found — ${site.name}` };
    }

    const { data } = post;

    return {
        title: `${data.title} — ${site.name}`,
        description: data.spoiler,
        authors: [{ name: site.author, url: site.url }],
        openGraph: {
            title: data.title,
            description: data.spoiler,
            type: 'article',
            publishedTime: data.date,
            authors: [site.author],
            url: `${site.url}/${slug}/`,
            images: [
                {
                    url: `/${slug}/opengraph-image`,
                    width: 1200,
                    height: 630,
                    alt: data.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: data.title,
            description: data.spoiler,
            images: [`/${slug}/opengraph-image`],
        },
        alternates: {
            canonical: `${site.url}/${slug}/`,
        },
    };
}
