import { getPosts } from '../posts';
import { site } from '../data';

export const dynamic = 'force-static';

const day = (date: string | number | Date) =>
    new Date(date).toISOString().split('T')[0];

export async function GET() {
    const posts = await getPosts();

    /**
     * Both listing pages are driven by the newest post, so that is their real
     * last-modified date. Stamping them with the build date instead moved them
     * on every deploy, and Google stops trusting a `lastmod` that always
     * changes.
     */
    const newest = posts.length > 0 ? day(posts[0].date) : day(Date.now());

    const urls = [
        { loc: `${site.url}/`, lastmod: newest, priority: '1.0' },
        { loc: `${site.url}/posts/`, lastmod: newest, priority: '0.8' },
        ...posts.map((post) => ({
            loc: `${site.url}/${post.slug}/`,
            lastmod: day(post.date),
            priority: '0.7',
        })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        ({ loc, lastmod, priority }) =>
            `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
    )
    .join('\n')}
</urlset>
`;

    return new Response(xml, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
}
