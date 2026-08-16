export function Section({
    id,
    title,
    action,
    children,
}: {
    id?: string;
    title: string;
    action?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="mt-16 scroll-mt-24">
            <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-line pb-2">
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                    {title}
                </h2>
                {action}
            </div>
            {children}
        </section>
    );
}

export function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-line bg-subtle px-2.5 py-1 text-xs font-medium text-muted">
            {children}
        </span>
    );
}
