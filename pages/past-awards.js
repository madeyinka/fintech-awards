import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import AwardsCategory from '@/components/sections/AwardsCategory';
import AskQuestion from '@/components/sections/AskQuestion';
const PastAwards = () => {
    return (
        <>
            <Header />
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Page Title */}
                <section className="after:bg-jacarta-900/60 w-full h-full relative bg-cover bg-center bg-no-repeat py-32 mt-5 after:absolute after:inset-0" style={{ backgroundImage: 'url("/assets/images/awards_banner.jpg")', }}>
                    <div className="container relative z-10">
                        <h1 className="font-display text-center tracking-widest md:leading-normal lg:text-[46px] text-3xl font-medium text-white">Past Awards </h1>
                    </div>
                </section>

                <section className="dark:bg-jacarta-800 relative pt-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <Image src="/assets/images/gradient_light.jpg" layout='fill' alt="gradient" className="h-full w-full" />
                    </picture>
                    <h1 className=" mb-8 text-jacarta-700 text-center tracking-widest md:leading-normal lg:text-[46px] text-3xl font-medium dark:text-white">
                        Recent Past Awards
                    </h1>
                    <section className="lg:px-10 py-10">
                        <div className="relative  m-2 grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
                            <div className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
                                <div className="absolute inset-0" >

                                    <Image
                                        src="/assets/gallery/nigeria-fintech-awardee-1.png"
                                        width={750}
                                        height={600}
                                        className="object-cover w-full h-full rounded-md sm:rounded-xl"
                                        alt="nigeria-fintech-awardee"
                                    />
                                    <div className="mt-3">

                                        <Image
                                            src="/assets/gallery/nigeria-fintech-awards-hero.jpg"
                                            width={950}
                                            height={630}
                                            className="object-cover  w-full h-full rounded-md sm:rounded-xl"
                                            alt="nigeria-fintech-awardee"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="relative rounded-md sm:rounded-xl overflow-hidden ">
                                <div className="" >
                                    <Image
                                        src="/assets/gallery/nigeria-fintech-awardee-2.png"
                                        className="object-cover w-full h-full rounded-md sm:rounded-xl "
                                        width={750}
                                        height={650}
                                        alt="nigeria-fintech-awardee-2"
                                    />
                                    <Image
                                        src="/assets/gallery/nigeria-fintech-awarde-new-logo.png"
                                        className="object-cover w-full h-full rounded-md sm:rounded-xl "
                                        width={290}
                                        height={200}
                                        alt="nigeria-fintech-awardee-2"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
                            </div>
                            <div className="relative rounded-md sm:rounded-xl hidden lg:block overflow-hidden ">
                                <div className="" >
                                    <Image
                                        src="/assets/gallery/nigeria-fintech-awards banner.jpg"
                                        className="object-cover w-full h-full rounded-md sm:rounded-xl "
                                        width={350}
                                        height={500}
                                        alt="nigeria-fintech-awardee-3"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
                            </div>
                            <div className="relative rounded-md sm:rounded-xl overflow-hidden ">
                                <div className="" >
                                    <Image
                                        src="/assets/gallery/nigeria-fintech-awardee-3-400x600.png"
                                        className="object-cover w-full h-full rounded-md sm:rounded-xl "
                                        width={350}
                                        height={502}
                                        alt="nigeria-fintech-awardee-4"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
                            </div>
                            <div className="relative rounded-md sm:rounded-xl overflow-hidden hidden sm:block">
                                <div className="" >
                                    <Image
                                        src="/assets/gallery/nigeria-fintech-awards banner-1.jpg"
                                        className="object-cover w-full h-full rounded-md sm:rounded-xl "
                                        width={350}
                                        height={502}
                                        alt="nigeria-fintech-awardee-banner"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
                            </div>
                            <div className="absolute text-jacarta-700 hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-jacarta-100  cursor-pointer hover:bg-jacarta-200 z-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    />
                                </svg>
                                <span className="ml-2 text-neutral-800 text-sm font-medium ">Show all photos</span>
                            </div>
                        </div>
                    </section>
                    <AskQuestion />
                </section>

            </main>
            <Footer />
        </>
    )
}

export default PastAwards