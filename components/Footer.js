import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from '@/components/ColorSwitch'

function Footer() {
  return (
    <>
      <Container className="pb-20 lg:pb-28 pt-32 lg:pt-44">
        <footer className="  text-jacarta-600 dark:text-white relative ">
          <div className="container mx-auto relative px-4 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8">
              <div className="footer-widget xl:flex xl:flex-col xl:justify-center xl:col-span-2">
                <div className="block mb-10 xl:ml-10" >
                  <Logo />
                </div>
                <div className="social-share flex items-center xl:ml-10">
                  <Link href="#!">

                    <a
                      className="group flex items-center justify-center w-10 h-10  rounded-lg border transition duration-500 hover:bg-indigo-500 mr-2"

                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook"
                        className="group-hover:fill-accent fill-jacarta-600 h-5 w-5 dark:group-hover:fill-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                    </a>
                  </Link>
                  <Link href="https://twitter.com/nigerianfintc1a">
                    <a
                      className="group flex items-center justify-center w-10 h-10 rounded-lg border transition duration-500 hover:bg-indigo-500 mr-2"

                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        className="group-hover:fill-accent fill-jacarta-600 h-5 w-5 dark:group-hover:fill-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </a>

                  </Link>
                  <Link href="#!">
                    <a
                      className="group flex items-center justify-center w-10 h-10 rounded-lg border transition duration-500 hover:bg-indigo-500 mr-2"

                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        className="group-hover:fill-accent fill-jacarta-600 h-5 w-5 dark:group-hover:fill-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>

                  </Link>
                  <Link href="#!">
                    <a
                      className="group flex items-center justify-center w-10 h-10 rounded-lg border transition duration-500 hover:bg-indigo-500 mr-2"

                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="tiktok"
                        className="group-hover:fill-accent fill-jacarta-600 h-5 w-5 dark:group-hover:fill-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
                <h4 className="font-display text-xl text-blueGray-900 font-semibold">Navigation</h4>
                <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
                  <li className="mb-4 mr-4">
                    <Link href="/">
                      <a className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="mb-4 mr-4">
                    <Link href="/about">
                      <a className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        About
                      </a>

                    </Link>
                  </li>

                  <li className="mb-4 mr-4">
                    <Link href="/blog">
                      <a className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        Blog
                      </a>
                    </Link>
                  </li>
                  <li className="mb-4 mr-4">
                    <Link href="/contact">
                      <a className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
                <h4 className="font-display text-xl text-blueGray-900 font-semibold">Explore</h4>
                <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
                  <li className="mb-4 mr-4">
                    <Link href="/past-awards">
                      <a
                        className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        Past Awards
                      </a>

                    </Link>
                  </li>
                  <li className="mb-4 mr-4">
                    <Link href="/#categories">
                      <a
                        className="transition duration-500 hover:text-indigo-500 underline-hover"

                      >
                        Categories
                      </a>

                    </Link>
                  </li>
                  <li className="mb-4 mr-4">
                    <Link href="/#how-to-register">
                      <a className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        How To Register
                      </a>
                    </Link>
                  </li>
                  <li className="mb-4 mr-4">
                    <Link href="/about/#meet-the-jury" >
                      <a
                        className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        Meet The Jury
                      </a>
                    </Link>
                  </li>

                </ul>
              </div>
              <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
                <h4 className="font-display text-xl text-blueGray-900 font-semibold">Community</h4>
                <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
                  <li className="mb-4 mr-4">
                    <Link href="/awards-categories">
                      <a
                        className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        Awards Categories
                      </a>

                    </Link>
                  </li>
                  <li className="mb-4 mr-4">
                    <Link href="/our-sponsor">
                      <a
                        className="transition duration-500 hover:text-indigo-500 underline-hover"

                      >
                        Our Sponsors
                      </a>

                    </Link>
                  </li>
                  <li className="mb-4 mr-4">
                    <Link href="/blog">
                      <a
                        className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        Recent Activity
                      </a>

                    </Link>
                  </li>
                  <li className="mb-4 mr-4">
                    <Link href="/#packages">
                      <a
                        className="transition duration-500 hover:text-indigo-500 underline-hover"
                      >
                        Packages
                      </a>

                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget col-span-1 md:col-span-2">
                <h4 className="font-display text-xl text-blueGray-900 font-semibold">Subscribe Us</h4>
                <form className="footer-newsletter flex items-center w-full mb-4 mt-4 xl:mt-10">
                  <input
                    className="bg-transparent border-2 border-r-0 border-indigo-500 transition duration-500 focus:outline-none hover:bg-white rounded-l w-full h-14 p-4"
                    type="text"
                    placeholder="Your e-mail address"
                  />
                  <button
                    className="flex items-center rounded-r h-14 py-4 px-8 transition-all duration-500  dark:bg-accent dark:hover:bg-jacarta-600  hover:bg-accent custom-shadow text-white  bg-jacarta-700"
                    type="submit"
                  >
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.6749 0.195557C19.5425 0.0931457 19.3816 0.0278986 19.2109 0.00741864C19.0403 -0.0130613 18.8669 0.0120695 18.711 0.0798823L0 8.26252V9.84586L7.85899 12.7747L12.9 20.0005H14.5998L19.9704 1.05835C20.014 0.903225 20.0093 0.739764 19.957 0.587011C19.9047 0.434258 19.8069 0.298501 19.6749 0.195557ZM13.5503 18.4903L9.21733 12.2793L15.885 5.47519L14.8301 4.57775L8.11016 11.4349L1.6304 9.02004L18.3024 1.72885L13.5503 18.4903Z" />
                    </svg>


                  </button>
                </form>
                <p className="ray-600">Your privacy protected! We dont disclose Email.</p>
              </div>
            </div>
            <div className="lg:text-center mt-8 lg:mt-10">
              <p className="ta-700">
                © <span id=""> Roatek Technology - All Rights Reserved by
                  <a href="https://roatek.com.ng/" className="text-indigo-500 underline-hover ml-3" rel="noopener">
                    Roatek
                  </a>
                </span>
              </p>
            </div>
          </div>
          <a
            href="#"
            className="footer-back w-10 h-10 hidden fixed bottom-8 right-8 z-50 bg-blueGray-600 rounded-lg items-center justify-center show"
          >
            <svg width={18} height={10} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L9 1L17 9" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
