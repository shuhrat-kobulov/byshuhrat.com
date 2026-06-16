import { readFile } from 'node:fs/promises';
import { readdir } from 'fs/promises';
import matter from 'gray-matter';
import { size, contentType, generatePostImage } from '../../og/generateImage';

export const alt = "Shuhrat's Blog";
export { size, contentType };

export default async function Image({ params }) {
    const { slug } = await params;
    const filename = './public/' + slug + '/index.md';
    const file = await readFile(filename, 'utf8');
    const { data } = matter(file);
    return generatePostImage({ title: data.title });
}

export async function generateStaticParams() {
    const entries = await readdir('./public/', { withFileTypes: true });
    const dirs = entries
        .filter((entry) => entry.isDirectory())
        .filter((entry) => !entry.name.startsWith('_'))
        .map((entry) => entry.name);
    return dirs.map((dir) => ({ slug: dir }));
}
