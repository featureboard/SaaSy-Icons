import Link from 'next/link'
import s from './Footer.module.css'

import Logo from 'components/icons/Logo'
import GitHub from 'components/icons/GitHub'

export default function Footer() {
    return (
        <footer className="flex flex-col p-8 space-y-4 bg-zinc-900 text-zinc-400 border-t border-zinc-800 md:space-y-0 md:flex-row">
            <span>
                A demo by
                <a
                    href="https://twitter.com/CoreyGinnivan"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white hover:underline"
                >
                    {' '}
                    FeatureBoard
                </a>
            </span>
        </footer>
    )
}
