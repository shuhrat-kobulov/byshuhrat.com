import { readdir } from 'fs/promises';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="max-w-2xl mx-auto">{children}</div>;
}

export async function generateStaticParams() {
    const entries = await readdir('./public/', { withFileTypes: true });
    const dirs = entries
        .filter((entry) => entry.isDirectory())
        .filter((entry) => !entry.name.startsWith('_'))
        .map((entry) => entry.name);
    return dirs.map((dir) => ({ slug: dir }));
}
