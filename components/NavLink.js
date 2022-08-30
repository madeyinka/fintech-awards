import React from 'react'
import Link from 'next/link'
import { RightArrow2 } from '@/public/assets/svgsIcons'

const NavLinks = ({ url, name }) => {
    return (
        <>
            <li>
                <Link href={url} passHref>
                    <a
                        className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                    >
                        <span className="mr-3 rounded-xl  p-1.5">
                            < RightArrow2 />
                        </span>
                        <span className="font-DmSans font-medium text-jacarta-700 text-sm dark:text-white">{name}</span>
                    </a>
                </Link>
            </li>

        </>
    )
}

export default NavLinks