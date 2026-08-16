import { readdir, readFile, stat } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { Feed, FeedOptions } from 'feed';
import { site } from './data';

const CONTENT_DIR = './public/';

export interface Post {
    slug: string;
    title: string;
    date: string;
    spoiler: string;
    youtube?: string;
    bluesky?: string;
}

/**
 * Every directory under /public that actually holds a post.
 *
 * The check matters: /public also carries plain asset folders, and a
 * directory without an index.md used to crash the whole static export.
 */
export async function getPostSlugs(): Promise<string[]> {
    const entries = await readdir(CONTENT_DIR, { withFileTypes: true });
    const candidates = entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .filter((name) => !name.startsWith('_') && !name.startsWith('.'));

    const checked = await Promise.all(
        candidates.map(async (slug) => {
            try {
                await stat(join(CONTENT_DIR, slug, 'index.md'));
                return slug;
            } catch {
                return null;
            }
        })
    );

    return checked.filter((slug): slug is string => slug !== null);
}

export async function getPost(slug: string): Promise<{
    data: Post;
    content: string;
} | null> {
    try {
        const file = await readFile(
            join(CONTENT_DIR, slug, 'index.md'),
            'utf8'
        );
        const { data, content } = matter(file);
        return { data: { slug, ...data } as Post, content };
    } catch {
        return null;
    }
}

export async function getPosts(): Promise<Post[]> {
    const slugs = await getPostSlugs();
    const posts = await Promise.all(slugs.map((slug) => getPost(slug)));

    return posts
        .filter((post): post is NonNullable<typeof post> => post !== null)
        .map((post) => post.data)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function generateFeed() {
    const posts = await getPosts();
    const site_url = `${site.url}/`;

    const feedOptions: FeedOptions = {
        author: {
            name: site.author,
            email: site.email,
            link: site_url,
        },
        copyright: `© ${new Date().getFullYear()} ${site.author}`,
        description: `Writing on frontend engineering by ${site.author}, ${site.role}.`,
        favicon: `${site_url}icon.png`,
        feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
        generator: 'Feed for Node.js',
        id: site_url,
        image: 'https://github.com/shuhrat-kobulov.png',
        language: 'en',
        link: site_url,
        title: site.name,
    };

    const feed = new Feed(feedOptions);

    for (const post of posts) {
        feed.addItem({
            date: new Date(post.date),
            description: post.spoiler,
            id: `${site_url}${post.slug}/`,
            link: `${site_url}${post.slug}/`,
            title: post.title,
        });
    }

    return feed;
}
