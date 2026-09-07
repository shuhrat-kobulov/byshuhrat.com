import type { MetadataRoute } from 'next';
import { site } from './data';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${site.author} — ${site.role}`,
        short_name: site.name,
        description: site.headline,
        start_url: '/',
        display: 'minimal-ui',
        background_color: '#14151a',
        theme_color: '#14151a',
        icons: [
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    };
}
