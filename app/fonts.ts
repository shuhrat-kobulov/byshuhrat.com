import { Montserrat, Merriweather } from 'next/font/google';

export const sans = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['500', '700'],
    style: ['normal'],
    preload: true,
});
