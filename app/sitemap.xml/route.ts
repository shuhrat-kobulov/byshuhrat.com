import { getPosts } from '../posts';
import { site } from '../data';

export const dynamic = 'force-static';

export async function GET() {
    const posts = await getPosts();
    const today = new Date().toISOString().split('T')[0];

    const urls = [
        { loc: `${site.url}/`, lastmod: today, priority: '1.0' },
        { loc: `${site.url}/posts/`, lastmod: today, priority: '0.8' },
        ...posts.map((post) => ({
            loc: `${site.url}/${post.slug}/`,
            lastmod: new Date(post.date).toISOString().split('T')[0],
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
