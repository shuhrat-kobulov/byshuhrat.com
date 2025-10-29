'use client';

import { sans } from './fonts';
import { usePathname } from 'next/navigation';
import Link from './Link';

export default function HomeLink() {
    const pathname = usePathname();
    const isActive = pathname === '/';
    return (
        <Link
            href="/"
            className={[
                sans.className,
                'inline-block text-xl md:text-2xl font-black',
                isActive ? '' : 'hover:scale-[1.02]',
            ].join(' ')}
        >
            Shuhrat's Blog
        </Link>
    );
}
