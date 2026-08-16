import { Montserrat } from 'next/font/google';

export const sans = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    // 900 backs every `font-black` heading; without it the browser fakes the
    // weight and the titles render noticeably lighter than intended.
    weight: ['500', '600', '700', '900'],
    style: ['normal'],
    preload: true,
});
