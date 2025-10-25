import { sans } from './fonts';
import Link from './Link';
import './[slug]/markdown.css';

export default function NotFound() {
    return (
        <article className="markdown">
            <h1
                className={[
                    sans.className,
                    'text-[40px] font-black leading-[44px] text-[--title]',
                ].join(' ')}
            >
                Not found
            </h1>
            <div className="markdown mt-10">
                <p>This page doesn't exist</p>
                <p>
                    Back to Home page{' '}
                    <Link
                        href="/"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        click
                    </Link>
                    .
                </p>
            </div>
        </article>
    );
}
