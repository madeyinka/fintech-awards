import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog'
import { Container } from '@/components/ColorSwitch'

const Blog = () => {
    return (
        <>
            <Header />
            <main >
                <Container className="pt-[5.5rem] lg:pt-24">
                    <section className="relative py-16 md:py-24">
                        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                            <Image layout="fill" src="/assets/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                        </picture>
                        <div className="container">
                            {/* Featured Post */}
                            {
                                blogData.filter(i => i.feature === true).map(({ imageUrl, description, id, title, date, lastRead }, index) => (
                                    <BlogCard featureCard key={index} id={id} description={description} lastRead={lastRead} imageUrl={imageUrl} date={date} title={title} />
                                ))
                            }

                            <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
                                {
                                    blogData.filter(i => i.feature === false).map(({ imageUrl, id, description, title, date, lastRead }, index) => (
                                        <BlogCard key={index} description={description} id={id} lastRead={lastRead} imageUrl={imageUrl} date={date} title={title} />
                                    ))
                                }
                            </div>
                            {/* Load More */}
                            <div className="mt-10 text-center">
                                <a href="blog" className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all">Load More</a>
                            </div>
                        </div>
                    </section>
                    {/* end blog */}
                </Container>
            </main>

            <Footer />
        </>
    )
}

export default Blog