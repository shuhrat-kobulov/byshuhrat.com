import Link from './Link';
import { Post } from './posts';
import { sans } from './fonts';

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export function PostList({ posts }: { posts: Post[] }) {
    if (posts.length === 0) {
        return (
            <p className="rounded-xl border border-dashed border-line bg-subtle px-5 py-8 text-center text-muted">
                No posts published yet — the first one is on its way.
            </p>
        );
    }

    return (
        <ul className="flex flex-col gap-2">
            {posts.map((post) => (
                <li key={post.slug}>
                    <Link
                        className="group -mx-3 block rounded-xl px-3 py-4 transition-colors hover:bg-subtle"
                        href={'/' + post.slug + '/'}
                    >
                        <article>
                            <h3
                                className={[
                                    sans.className,
                                    'mb-1 text-2xl font-black leading-tight text-link transition-colors group-hover:text-link-hover',
                                ].join(' ')}
                            >
                                {post.title}
                            </h3>
                            <p className="text-[13px] text-muted">
                                <time dateTime={post.date}>
                                    {formatDate(post.date)}
                                </time>
                            </p>
                            {post.spoiler ? (
                                <p className="mt-1 text-body">{post.spoiler}</p>
                            ) : null}
                        </article>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
