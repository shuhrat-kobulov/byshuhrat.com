import { size, contentType, generatePostImage } from '../../og/generateImage';
import { getPost, getPostSlugs } from '../posts';

export const dynamic = 'force-static';
export const alt = "Shuhrat's Blog";
export { size, contentType };

export default async function Image({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);
    return generatePostImage({ title: post?.data.title ?? "Shuhrat's Blog" });
}

export async function generateStaticParams() {
    const slugs = await getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}
