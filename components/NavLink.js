import React from 'react'
import Link from 'next/link'

const NavLinks = ({ url, name }) => {
    return (
        <>
            <li>
                <Link href={url} passHref>
                    <a
                        className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                    >
                        <span className="mr-3 rounded-xl bg-[#F5FFED] p-1.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="h-4 w-4 fill-[#8DD059]"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z" />
                            </svg>
                        </span>
                        <span className="font-display font-medium text-jacarta-700 text-sm dark:text-white">{name}</span>
                    </a>
                </Link>
            </li>

        </>
    )
}

export default NavLinks