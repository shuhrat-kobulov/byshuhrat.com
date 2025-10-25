import { Fragment } from 'react';
import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
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

overnight.colors['editor.background'] = 'var(--code-bg)';

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const filename = './public/' + slug + '/index.md';

    try {
        const file = await readFile(filename, 'utf8');
        let postComponents: any = {};
        try {
            postComponents = await import(
                '../../public/' + slug + '/components.js'
            );
        } catch (e: any) {
            if (!e || e.code !== 'MODULE_NOT_FOUND') {
                throw e;
            }
        }
        let Wrapper = postComponents.Wrapper ?? Fragment;
        const { content, data } = matter(file);

        return (
            <>
                <article>
                    <h1
                        className={[
                            sans.className,
                            'text-[40px] font-black leading-[44px] text-[--title]',
                        ].join(' ')}
                    >
                        {data.title}
                    </h1>
                    <p className="mt-2 text-[13px]">
                        {new Date(data.date).toLocaleDateString('en', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </p>
                    <div className="markdown mt-4">
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

                                        return <img src={finalSrc} {...rest} />;
                                    },
                                    Video: ({ src, ...rest }) => {
                                        let finalSrc = src;
                                        if (src && !/^https?:\/\//.test(src)) {
                                            finalSrc = `/${slug}/${src}`;
                                        }
                                        return (
                                            <video src={finalSrc} {...rest} />
                                        );
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
                                                        className:
                                                            'linked-heading',
                                                        target: '_self',
                                                    },
                                                },
                                            ],
                                        ] as any,
                                    } as any,
                                }}
                            />
                        </Wrapper>
                        <hr />
                    </div>
                </article>
            </>
        );
    } catch (error) {
        // If file doesn't exist, return not found
        return (
            <article className="markdown">
                <h1 className="text-[40px] font-black leading-[44px] text-[--title]">
                    Sahifa topilmadi
                </h1>
                <div className="markdown mt-10">
                    <p>Bu post mavjud emas.</p>
                </div>
            </article>
        );
    }
}

export async function generateStaticParams() {
    const entries = await readdir('./public/', { withFileTypes: true });
    const dirs = entries
        .filter((entry) => entry.isDirectory())
        .filter((entry) => !entry.name.startsWith('_')) // Exclude _headers, _redirects etc
        .map((entry) => entry.name);
    return dirs.map((dir) => ({ slug: dir }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const file = await readFile('./public/' + slug + '/index.md', 'utf8');
    let { data } = matter(file);

    return {
        title: data.title + " — Shuhrat's Blog",
        description: data.spoiler,
        openGraph: {
            title: data.title,
            description: data.spoiler,
            type: 'article',
            publishedTime: data.date,
            authors: ['Shuhrat Kobulov'],
            url: `https://byshuhrat.com/${slug}/`,
        },
        twitter: {
            card: 'summary_large_image',
            title: data.title,
            description: data.spoiler,
        },
        alternates: {
            canonical: `https://byshuhrat.com/${slug}/`,
        },
    };
}
