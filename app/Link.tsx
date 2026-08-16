'use client';

import { useTransition, MouseEvent } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return (
        (target && target !== '_self') ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        (event.nativeEvent && event.nativeEvent.which === 2)
    );
}

/**
 * True only for hrefs the App Router can actually navigate to.
 *
 * Static assets living in /public (the CV PDF, images, the feeds) are not
 * routes: pushing them through the router leaves the visitor on a blank page
 * instead of opening the file, so those must fall through to the browser.
 */
function isInternalRoute(href: string) {
    if (!href.startsWith('/')) return false;
    const path = href.split(/[?#]/)[0];
    return !/\.[a-z0-9]+$/i.test(path);
}

export default function Link({
    className,
    children,
    style,
    href,
    target,
    rel,
    ...rest
}: {
    className?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    href: string;
    target?: string;
} & React.ComponentProps<typeof NextLink>) {
    const router = useRouter();
    const [isNavigating, trackNavigation] = useTransition();

    const isHash = href.startsWith('#');
    const isExternal = !href.startsWith('/') && !isHash;
    // mailto:/tel: must stay in the current tab or the handoff is swallowed.
    const isProtocolLink = /^(mailto|tel|sms):/i.test(href);

    if (!target && isExternal && !isProtocolLink) {
        target = '_blank';
    }
    if (target === '_blank' && !rel) {
        rel = 'noopener noreferrer';
    }

    const shouldIntercept = isInternalRoute(href);

    return (
        <NextLink
            {...rest}
            target={target}
            rel={rel}
            href={href}
            onClick={(e) => {
                if (shouldIntercept && !isModifiedEvent(e)) {
                    e.preventDefault();
                    const url = e.currentTarget.href;
                    trackNavigation(() => {
                        router.push(url);
                    });
                }
            }}
            className={[className, 'scale-100 active:scale-100']
                .filter(Boolean)
                .join(' ')}
            style={{
                ...style,
                transform: isNavigating ? 'scale(1)' : '',
                opacity: isNavigating ? 0.85 : 1,
                transition: 'transform 0.2s ease-in-out, opacity 0.2s 0.4s linear',
            }}
        >
            {children}
        </NextLink>
    );
}
