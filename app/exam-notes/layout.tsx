import { sans } from '../fonts';
import '../global.css';

// This is a custom layout for the exam-notes page.
// It intentionally bypasses the Header component to keep this route hidden.
// No navigation links, no tracking, completely isolated.

export const metadata = {
    title: 'Exam Notes',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
};

export default function ExamNotesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sans.className}>
            <head>
                <meta name="robots" content="noindex, nofollow, nocache" />
                <meta name="googlebot" content="noindex, nofollow" />
            </head>
            <body className="mx-auto max-w-5xl bg-[--bg] px-5 py-8 text-[--text]">
                <main>{children}</main>
            </body>
        </html>
    );
}
