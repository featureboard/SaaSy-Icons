import Link from 'next/link'
import s from './Navbar.module.css'

import Logo from 'components/icons/Logo'
import { useUser } from 'utils/useUser'
import { useFeature } from '@featureboard/react-sdk'
import classNames from 'classnames'

const Navbar = () => {
    const { user, signOut } = useUser()
    const userLimit = useFeature('user-limit', 1)
    const iconAccess = useFeature('limit-icon-access', false)

    return (
        <nav className={s.root}>
            <div className="mx-auto px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
                    <div className="flex flex-1 items-center">
                        <p>
                            Subscribe to get access to all the Pro icons and
                            much much more!
                        </p>
                    </div>

                    <div className="flex flex-1 justify-end space-x-4">
                        {user ? (
                            <Link href="#">
                                <a className={s.link} onClick={() => signOut()}>
                                    Sign out
                                </a>
                            </Link>
                        ) : (
                            <>
                                <Link href="/signin">
                                    <a className="flex items-center justify-center px-4 border-2 border-white bg-white rounded-lg text-black font-semibold hover:text-white hover:bg-white/0 duration-150 ease-in-out py-2 transition">
                                        Subscribe to Pro for $3/m
                                    </a>
                                </Link>
                                <Link href="/signin">
                                    <a className="flex items-center justify-center px-4 bg-transparent rounded-lg text-white font-semibold hover:text-black hover:bg-white/100 duration-150 ease-in-out py-2 transition">
                                        Sign in
                                    </a>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
