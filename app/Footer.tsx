import Link from './Link';
import { site, socials } from './data';
import { socialIcons, RssIcon } from './icons';

export function Footer() {
    return (
        <footer className="mt-24 border-t border-line pt-8 text-sm text-muted">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © {new Date().getFullYear()} {site.author} · {site.role}
                </p>

                <ul className="flex items-center gap-4">
                    {socials.map((social) => {
                        const Icon =
                            socialIcons[social.name as keyof typeof socialIcons];
                        return (
                            <li key={social.name}>
                                <Link
                                    href={social.href}
                                    aria-label={social.name}
                                    title={social.name}
                                    className="block transition-colors hover:text-title"
                                >
                                    <Icon size={20} />
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link
                            href="/rss.xml"
                            aria-label="RSS feed"
                            title="RSS feed"
                            className="block transition-colors hover:text-title"
                        >
                            <RssIcon size={20} />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
