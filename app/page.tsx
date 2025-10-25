import Link from './Link';

export default async function Home() {
    return (
        <section className="">
            <div className="">
                <h1 className="text-5xl font-bold">Hello.</h1>
                <h2 className="font-bold text-2xl my-5">
                    My name is Shuhrat Kobulov.
                </h2>
                <p className="mb-6 max-w-xl">
                    I'm a Software Engineer. I love writing and teaching code.
                    Most of my work is open source and publicly available on{' '}
                    <Link
                        className="text-blue-500"
                        href="https://github.com/shuhrat-kobulov"
                        target="_blank"
                    >
                        GitHub
                    </Link>
                    .
                </p>
                <p className="mb-6 max-w-xl">
                    Outside of programming I enjoy reading books, spending time
                    hiking in nature, and keeping active with regular sports and
                    exercise.
                </p>

                <ul className="flex">
                    <li className="mr-2 hover:opacity-70">
                        <Link
                            href="https://www.linkedin.com/in/shuhrat-kobulov"
                            target="_blank"
                            title="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M8 11v5" />
                                <path d="M8 8v.01" />
                                <path d="M12 16v-5" />
                                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                            </svg>
                        </Link>
                    </li>
                    <li className="mx-1 hover:opacity-70">
                        <Link
                            href="https://github.com/shuhrat-kobulov"
                            target="_blank"
                            title="GitHub"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </Link>
                    </li>
                    <li className="mx-1 hover:opacity-70">
                        <Link
                            href="https://t.me/shuhrats_blog"
                            target="_blank"
                            title="Telegram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}
