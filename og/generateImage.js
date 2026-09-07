import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { site } from '../app/data';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

const BG = '#14151a';
const ACCENT = '#ff86ad';
const MUTED = 'rgba(233, 234, 240, 0.55)';
const TEXT = '#f3f4f8';

/** Thin accent rule that runs along the top of every card. */
function accentBar() {
    return (
        <div
            style={{
                display: 'flex',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 10,
                background: `linear-gradient(90deg, ${ACCENT}, #a970ff)`,
            }}
        />
    );
}

export async function generateHomeImage() {
    return generateImage(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: BG,
                color: TEXT,
                padding: '80px 80px 64px',
                position: 'relative',
            }}
        >
            {accentBar()}

            <div
                style={{
                    display: 'flex',
                    fontFamily: 'Montserrat',
                    fontSize: 96,
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                }}
            >
                {site.author}
            </div>

            <div
                style={{
                    display: 'flex',
                    fontFamily: 'Montserrat',
                    fontSize: 42,
                    color: ACCENT,
                    marginTop: 18,
                }}
            >
                {site.role}
            </div>

            <div
                style={{
                    display: 'flex',
                    fontFamily: 'Merriweather',
                    fontSize: 30,
                    color: MUTED,
                    marginTop: 28,
                }}
            >
                React · Next.js · Angular · TypeScript · Node.js / NestJS
            </div>

            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    left: 80,
                    bottom: 56,
                    fontFamily: 'Merriweather',
                    fontSize: 28,
                    color: MUTED,
                }}
            >
                byshuhrat.com
            </div>
        </div>
    );
}

export async function generatePostImage({ title }) {
    // Long titles need a smaller size to stay on the card.
    const fontSize = title.length > 70 ? 56 : title.length > 40 ? 68 : 82;

    return generateImage(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                backgroundColor: BG,
                color: TEXT,
                padding: '72px 80px 64px',
                position: 'relative',
            }}
        >
            {accentBar()}

            <div
                style={{
                    display: 'flex',
                    fontFamily: 'Montserrat',
                    fontSize: 34,
                    color: ACCENT,
                }}
            >
                Shuhrat&apos;s Blog
            </div>

            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    fontFamily: 'Montserrat',
                    fontSize,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    paddingRight: 40,
                }}
            >
                {title}
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'Merriweather',
                    fontSize: 26,
                    color: MUTED,
                }}
            >
                <span>
                    {site.author} · {site.role}
                </span>
                <span>byshuhrat.com</span>
            </div>
        </div>
    );
}

async function generateImage(jsx) {
    return new ImageResponse(jsx, {
        ...size,
        fonts: [
            {
                name: 'Montserrat',
                data: await montserratExtraBold,
                style: 'normal',
                weight: 900,
            },
            {
                name: 'Merriweather',
                data: await merriweatherRegular,
                style: 'normal',
                weight: 500,
            },
            {
                name: 'Merriweather',
                data: await merriweatherItalic,
                style: 'italic',
                weight: 500,
            },
        ],
    });
}

const montserratExtraBold = readFile(
    join(process.cwd(), 'og/Montserrat-ExtraBold.ttf')
);
const merriweatherRegular = readFile(
    join(process.cwd(), 'og/Merriweather-Regular.ttf')
);
const merriweatherItalic = readFile(
    join(process.cwd(), 'og/Merriweather-Italic.ttf')
);
