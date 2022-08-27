/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pb-10 pt-20 md:pt-32  lg:h-[88vh]">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
        <Image src="/assets/images/gradient.jpg" layout='fill' alt="gradient" />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <Image src="/assets/images/gradient_dark.jpg" layout='fill' alt="gradient dark" />
      </picture>
      <div className="container h-full">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
            <h1 className="text-jacarta-700 font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
              Buy, sell and collect NFTs.
            </h1>
            <p className="dark:text-jacarta-300 mb-8 text-center text-lg md:text-left">
              The world's largest digital marketplace for crypto collectibles and non-fungible tokens
            </p>
            <div className="flex space-x-4">
              <a
                href="create"
                className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Upload
              </a>
              <a
                href="collections"
                className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white"
              >
                Explore
              </a>
            </div>
          </div>
          {/* Hero image */}
          <div className="col-span-6 xl:col-span-8">
            <div className="relative text-center md:pl-8 md:text-right">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
              >
                <defs>
                  <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                    <path
                      d="
              M 0, 100
              C 0, 17.000000000000004 17.000000000000004, 0 100, 0
              S 200, 17.000000000000004 200, 100
                  183, 200 100, 200
                  0, 183 0, 100
          "
                      fill="#9446ED"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clipping)">
                  {/* Bg image */}
                  <div className="bg-red-600 w-[300px] h-[200px]"></div>
                  {/* <image href="img/hero/hero.jpg" width={200} height={200} clipPath="url(#clipping)" /> */}
                </g>
              </svg>
              {/* <Image src="img/hero/3D_elements.png" alt="" className="animate-fly absolute top-0 md:-right-[10%]" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
