export default function Layout({ children }: { children: React.ReactNode }) {
    // Left-aligned rather than centred so the article shares the same left
    // edge as the header, the home page and the footer.
    return <div className="max-w-2xl">{children}</div>;
}
