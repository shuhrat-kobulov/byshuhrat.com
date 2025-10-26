import PlausibleProvider from 'next-plausible';
import { sans } from './fonts';
import './global.css';
import { Header } from './Header';

export const metadata = {
    metadataBase: new URL('https://byshuhrat.com'),
};

const Activity: any = Symbol.for('react.activity');

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sans.className}>
            <body className="mx-auto max-w-4xl bg-[--bg] bg-[url(/bg-img.png)] px-5 py-12 text-[--text]">
                <PlausibleProvider domain="byshuhrat.com">
                    <Header />
                    <main>
                        <Activity mode="visible">{children}</Activity>
                    </main>
                </PlausibleProvider>
            </body>
        </html>
    );
}
