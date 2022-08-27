import React, { useState } from 'react';
import classNames from 'classnames';
import packageData from '@/data/packages';
import Link from 'next/link';


const PackageStep = () => {
    const [visibleTab, setVisibleTab] = useState(packageData[0].id);

    const TabTitles = packageData.map((item, index) => (
        <h2
            key={index}
            onClick={() => setVisibleTab(item.id)}
            className={classNames('font-DmSans mb-3 lg:mb-8 text-center text-base lg:text-[1.125rem] font-semibold cursor-pointer', { 'color-font border-b-2 border-jacarta-700 pb-1 px-1': visibleTab === item.id }, { 'text-jacarta-800 dark:text-jacarta-100': visibleTab !== item.id })}
        >
            {item.tabTitle}
        </h2>
    ));
    const TabContent = packageData.map((item, index) => (
        <>
            <div
                key={index}
                style={visibleTab === item.id ? {} : { display: 'none' }} className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-4 lg:px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                <div className="">

                    <h4 className="font-DmSans text-jacarta-700 lg:text-[1.125rem] my-1 font-bold dark:text-white"> {item.tabTitle}</h4>

                    <p className="dark:text-jacarta-300 lg:text-[1.125rem]">{item.tabContent}</p>
                </div>
            </div>

        </>
    ));
    return (
        <>

            <div className="my-5">
                <div className=" 2xl:container 2xl:mx-auto  overflow-hidden ">

                    <div className="dark:bg-jacarta-800 mb-5 mt-2 mx-auto custom-shadow bg-light-base rounded-[1.25rem] px-3 pt-7 lg:p-10 lg:w-[63.75rem]">
                        <div className="flex flex-wrap gap-x-5 lg:gap-x-5 justify-start">
                            {TabTitles}
                        </div>
                        <div className="flex flex-col space-y-5">
                            {TabContent}
                        </div>


                        <div className="w-full pb-5">
                            <h2 className="font-DmSans text-jacarta-700 my-4 pl-3 text-[1.125rem] lg:text-xl dark:text-white">For sponsorship, please contact: </h2>
                            <div className="flex items-center mx-auto flex-wrap justify-center gap-5">
                                <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-[1.25rem] border bg-white p-6">
                                    <div className="mb-6 flex items-center space-x-5">
                                        <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} className="fill-jacarta-400">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h4 className="text-jacarta-700 dark:text-jacarta-100 text-base ">SOLA FANAWOPO</h4>


                                        </div>
                                    </div>
                                    <div className="mb-6 flex items-center space-x-5">
                                        <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-400">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h6 className="font-display text-jacarta-700 block text-base dark:text-white">Phone Number </h6>
                                            <Link href="tel:+2348082477786">
                                                <a className="text-jacarta-500 hover:text-accent dark:text-jacarta-300 font-DmSans "> 08082477786</a>
                                            </Link>

                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-5">
                                        <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-400">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h6 className="font-display text-jacarta-700 block text-base dark:text-white">Email</h6>
                                            <Link href="mailto:sola@emaginagtionsng.com">
                                                <a className="text-jacarta-500 hover:text-accent dark:text-jacarta-300 font-DmSans lg:text-[1.125rem] text-base  not-italic">sola@emaginagtionsng.com</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-[1.25rem] border bg-white p-6">
                                    <div className="mb-6 flex items-center space-x-5">
                                        <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} className="fill-jacarta-400">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h4 className="text-jacarta-700 dark:text-jacarta-100 text-base ">RARZACK OLAEGBE</h4>


                                        </div>
                                    </div>
                                    <div className="mb-6 flex items-center space-x-5">
                                        <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-400">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h6 className="font-display text-jacarta-700 block text-base dark:text-white">Phone Number </h6>
                                            <Link href="tel:+2348082477799">
                                                <a className="text-jacarta-500 hover:text-accent dark:text-jacarta-300 font-DmSans "> 08082477799</a>
                                            </Link>

                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-5">
                                        <span className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-400">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <h6 className="font-display text-jacarta-700 block text-base dark:text-white">Email</h6>
                                            <Link href="mailto:rarzack@emaginationsng.com">
                                                <a className="text-jacarta-500 hover:text-accent dark:text-jacarta-300 font-DmSans text-base lg:text-[1.125rem] not-italic">rarzack@emaginationsng.com</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default PackageStep;
