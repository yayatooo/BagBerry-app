import {Newsreader} from "next/font/google"

export const newsReader = Newsreader({
    variable:  '--newsReader-font',
    subsets: ['latin'],
    display: 'fallback',
    weight: '500',
})