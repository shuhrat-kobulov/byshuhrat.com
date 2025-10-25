import HomeLink from './HomeLink';
import Link from './Link';

export const Header = () => {
    return (
        <header className="mb-14 flex flex-row place-content-between">
            <HomeLink />

            <nav>
                <ul>
                    <li>
                        <Link className="font-bold" href="/posts">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
