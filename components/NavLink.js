import React from 'react'
import Link from 'next/link'
import { RightArrow2 } from '@/public/assets/svgsIcons'
import { Link as ScrollLink } from 'react-scroll';

const NavLinks = ({ url, name }) => {
    return (
        <>
            <li>
                <Link href={url} scroll={false} passHref>
                    <ScrollLink activeClass="active" to={url} spy={true} offset={-30} smooth={true} duration={600}>
                        <a
                            className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                        >
                            <span className="mr-3 rounded-xl  p-1.5">
                                < RightArrow2 />
                            </span>
                            <span className="font-DmSans font-medium text-jacarta-900 text-sm dark:text-white">{name}</span>
                        </a>
                    </ScrollLink>
                </Link>
            </li>

        </>
    )
}

export default NavLinks