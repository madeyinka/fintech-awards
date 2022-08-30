import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import AwardsCategory from '@/components/sections/AwardsCategory';

const Category = () => {
    return (
        <>
            <Header />
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Page Title */}
                <section className="after:bg-jacarta-900/60 w-full h-full relative bg-cover bg-center bg-no-repeat py-32 mt-5 after:absolute after:inset-0" style={{ backgroundImage: 'url("/assets/images/awards_banner.jpg")', }}>
                    <div className="container relative z-10">
                        <h1 className="font-display text-center text-4xl font-medium text-white">Awards Category</h1>
                    </div>
                </section>

                <section className="dark:bg-jacarta-800 relative py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <Image src="/assets/images/gradient_light.jpg" layout='fill' alt="gradient" className="h-full w-full" />
                    </picture>
                    <AwardsCategory />

                </section>

            </main>
            <Footer />
        </>
    )
}

export default Category