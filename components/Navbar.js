import Link from 'next/link'
import React from 'react'
import classNames from 'classnames';

const NavBar = ({ top, homePage, url, title, }) => {
    return (


        <Link href={url} passHref>
            <a
                className={classNames({ 'text-jacarta-50': top && homePage }, { 'text-jacarta-800': top && !homePage }, "hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5", { 'text-jacarta-800': !top })}
                aria-expanded="false"
            >
                {title}
                <i className="lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-4 w-4 dark:fill-white"
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                </i>
            </a>
        </Link>



    )
}

export default NavBar



{/*


 {
                menu.map(({ url, title, }, index) => (
                  <NavBar key={index} top={top} homePage={homePage} url={url} title={title} />
                ))

              }

              {
                menu.map(({ subMenu, bigMenu }, index) => (
                  <ul
                    key={index}
                    className={classNames("font-CalSans dark:bg-jacarta-800 top-[85%] z-10 hidden gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute  lg:translate-y-4 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2",
                      { 'left-0 min-w-[200px] lg:!grid lg:py-4 lg:px-2': !bigMenu }, { 'lg:-left-96 xl:-left-80 grid-flow-col grid-rows-6 lg:grid lg:py-8 lg:px-5 ': bigMenu })}

                    aria-labelledby="navDropdown-1"
                  >
                    <NavLink options={subMenu} />
                  </ul>
                ))
              }
















<li className="group relative">
                <a
                    className={classNames({ 'text-jacarta-50': top && homePage }, { 'text-jacarta-800': top && !homePage }, "hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5", { 'text-jacarta-800': !top })}
                    aria-expanded="false"
                >
                    Awards Categories
                    <i className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="h-4 w-4 dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                        </svg>
                    </i>
                </a>
                <ul
                    className="font-CalSans dropdown-menu dark:bg-jacarta-800 lg:-left-96 xl:-left-80 top-[85%] z-10 hidden grid-flow-col grid-rows-6 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                    aria-labelledby="navDropdown-1"
                >
                    {options}
                </ul>
            </li>
            
            
            <li className="group relative">
                <a
                    className={classNames({ 'text-jacarta-50': top && homePage }, { 'text-jacarta-800': top && !homePage }, "font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5", { 'text-jacarta-800': !top })}
                    aria-expanded="false"
                >
                    Resources
            
                </a>
                <ul
                    className="font-CalSans dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                    aria-labelledby="navDropdown-4"
                >
                    <li>
                        <Link href="/blog">
                            <a
                                className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                            >
                                <span className="font-DmSans text-jacarta-700 text-sm font-medium dark:text-white">Blog</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="past-awards">
                            <a
            
                                className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                            >
                                <span className="font-DmSans text-jacarta-700 text-sm font-medium dark:text-white">Past Awards</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sponsorship">
                            <a
                                className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                            >
                                <span className="font-DmSans text-jacarta-700 text-sm font-medium dark:text-white">Sponsorship</span>
                            </a>
                        </Link>
                    </li>
            
            
                </ul>
            </li> */}