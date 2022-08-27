import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import { Container } from '@/components/ColorSwitch'

const sponsorship = () => {
    return (
        <>
            <Header />
            <Container className="bg-jacarta-700 dark:bg-white" >
                <main className="pt-[5.5rem] lg:pt-24">
                    <section className="dark:bg-jacarta-800 relative py-16 md:py-24">
                        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                            <Image src="/assets/images/gradient_light.jpg" width="100%" height="100%" alt="gradient" className="h-full w-full" />
                        </picture>
                        <div className="container text-jacarta-700 dark:text-jacarta-50 font-DmSans">
                            <h1 className="font-display mb-8 text-jacarta-700 text-center text-4xl font-medium dark:text-white">
                                Sponsorship Opportunities
                            </h1>
                            <div className="article-content my-2 mx-auto max-w-[48.125rem] space-y-4">
                                <h2 className="text-base">Our Sponsors</h2>
                                <p>
                                    We are careful about inviting or accepting a company as a sponsor. Our sponsors will share the limelight with us on the Awards night and throughout the communications cycle. Some of our sponsors stick with an award category. Others work with us much more closely.
                                </p>
                                <h2 className="text-base">How We Work</h2>
                                <p>
                                    We have a sustainable and consistent team. These include our photographers to our judges. We work with partner companies that share our values. This approach has undoubtedly made the awards stronger year on year.
                                </p>
                                <p>
                                    We understand the role of sponsorship in helping us to celebrate the Award winners. We also understand that our sponsors need a ‘Win’ themselves. We have carefully aligned sponsors with categories. Our team works with partners’ teams to find the best awareness and positioning for each. In whatever way a sponsor chooses to work with the Nigerian Fintech Awards, they have the same commitment as us.
                                </p>
                                <h2 className='text-base'>Why Sponsor? </h2>
                                <p>
                                    Sponsors get access to an engaged audience of senior thought-leaders through an assortment of different options. Whether you’re looking to align your brand with innovations in the Nigerian Fintech industry or benefit from inclusion in our marketing campaign, the Nigerian Fintech Awards have something that’s right for you.
                                </p>
                                <h2>Our sponsorship packages come with branding</h2>
                                <p>
                                    Our sponsorship packages include branding, communications, and a few Fintech Africa publications offer. You will also feature on all pre and post-articles: the winners&apos; supplement, email, and social media messages about the awards.
                                </p>

                            </div>
                        </div>
                    </section>
                </main>
            </Container>


            <Footer />
        </>
    )

}

export default sponsorship