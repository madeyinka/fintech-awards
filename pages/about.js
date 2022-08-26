import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container } from '@/components/ColorSwitch'
import TeamCard from '@/components/team/TeamCard'
import teamData from '@/data/team'
import Link from 'next/link';

const About = () => {
    return (
        <>
            <Header />
            <Container className="pt-24 lg:pb-96">
                <section className="relative ">
                    <div className="container">

                        <div className="mx-auto max-w-2xl py-16 text-center">
                            <h1 className="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white">About Xhibiter</h1>
                            <p className="dark:text-jacarta-300 text-lg leading-normal">
                                Every digital creation available through MakersPlace is an authentic and truly unique digital creation,
                                signed and issued by the creator — made possible by blockchain technology.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="pb-24">
                    <div className="container">
                        <div className="pt-24">
                            <h2 className="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white">Numbers Speak</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4">
                                <div className="mb-10 text-center">
                                    <h5 className="font-display text-jacarta-700 block text-5xl dark:text-white">2012</h5>
                                    <p className="dark:text-jacarta-300 block">Founded</p>
                                </div>
                                <div className="mb-10 text-center">
                                    <h5 className="font-display text-jacarta-700 block text-5xl dark:text-white">$178M</h5>
                                    <span className="dark:text-jacarta-300 block">Trading volume</span>
                                </div>
                                <div className="mb-10 text-center">
                                    <h5 className="font-display text-jacarta-700 block text-5xl dark:text-white">305K</h5>
                                    <span className="dark:text-jacarta-300 block">NFTs created</span>
                                </div>
                                <div className="mb-10 text-center">
                                    <h5 className="font-display text-jacarta-700 block text-5xl dark:text-white">1.6M</h5>
                                    <span className="dark:text-jacarta-300 block">Total users</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24">
                    <div className="container">
                        <h2 className="font-display text-jacarta-700 mb-12 text-center text-3xl dark:text-white">
                            Meet The Jury
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem] lg:grid-cols-5">
                            {
                                teamData.map(({ imagePath, name, title }, index) => (
                                    <TeamCard key={index} imagePath={imagePath} name={name} title={title} />
                                ))
                            }
                            <Link href="contact">
                                <a className="dark:bg-jacarta-700 rounded-2lg dark:border-jacarta-600 border-jacarta-100 flex items-center justify-center border bg-white p-8 text-center transition-shadow hover:shadow-lg">
                                    <span className="font-display text-jacarta-700 text-[1.125rem] dark:text-white">Join us!</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>

            </Container>

            <Footer />

        </>
    )
}

export default About