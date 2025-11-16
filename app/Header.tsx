import HomeLink from './HomeLink';
import Link from './Link';

export const Header = () => {
    return (
        <header className="mb-14 flex flex-row place-content-between items-center">
            <HomeLink />

            <nav>
                <ul className="flex flex-row gap-6">
                    <li>
                        <Link
                            className="font-bold text-[#e85a4f] text-sm md:text-base"
                            href="https://pomodo.uz"
                            target="_blank"
                            title="Pomodo - Productivity & Task Management App"
                        >
                            Pomodo.uz
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="font-bold text-amber-900 text-sm md:text-base"
                            href="/posts"
                            title="Blog - Articles and Updates"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="font-bold text-amber-900 text-sm md:text-base"
                            href="/Shuhrat_Kobulov_CV.pdf"
                            title="Blog - Articles and Updates"
                        >
                            CV
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
