import Script from 'next/script';

/** GA4 measurement ID for byshuhrat.com. */
const GA_ID = 'G-F6T58JMZ27';

/**
 * Google Analytics 4, loaded after hydration so the tag never competes with
 * first paint. GA4's enhanced measurement listens for History API events, so
 * client-side route changes are counted without a manual page_view call.
 *
 * Skipped outside production, matching Plausible, which ignores localhost.
 */
export function GoogleAnalytics() {
    if (process.env.NODE_ENV !== 'production') return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
        </>
    );
}
