import Link from '../Link';
import { metadata, getPosts, Post } from '../posts';
import { sans } from '../fonts';

export { metadata };

export default async function Home() {
    const posts = await getPosts();
    return (
        <div className="relative -top-[10px] flex flex-col gap-8">
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    className="block py-4 hover:scale-[1.005] will-change-transform"
                    href={'/' + post.slug + '/'}
                >
                    <article>
                        <PostTitle post={post} />
                        <PostMeta post={post} />
                        <PostSubtitle post={post} />
                    </article>
                </Link>
            ))}
        </div>
    );
}

function PostTitle({ post }: { post: Post }) {
    return (
        <h2
            className={[
                sans.className,
                'text-[28px] font-black leading-none mb-2',
                'text-[--lightLink] dark:text-[--darkLink]',
            ].join(' ')}
        >
            {post.title}
        </h2>
    );
}

function PostMeta({ post }: { post: Post }) {
    return (
        <p className="text-[13px]">
            {new Date(post.date).toLocaleDateString('en', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}
        </p>
    );
}

function PostSubtitle({ post }: { post: Post }) {
    return <p className="mt-1">{post.spoiler}</p>;
}
