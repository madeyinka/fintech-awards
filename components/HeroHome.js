import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import css from './first.module.css';
import classNames from 'classnames';
import { Button } from '@/components/form'



function HeroHome() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  return (
    <div className="relative">
      <section className="relative w-full h-screen top-0 left-0 object-cover object-[83%]  bg-cover bg-center bg-[url('/assets/gallery/nigeria-fintech-awards-hero1.jpg')] dark:bg-[url('/assets/gallery/nigeria-fintech-awards-hero1.jpg')]  ">
        <div className={`${css.home__container} ${css.containerbox} ${css.gridbox}`}>

          <div className="flex items-center mx-auto justify-center max-w-4xl">
            <div className="py-24 pt-32 xl:pt-36 text-center ">
              <h1 className={classNames("font-display mb-6 text-5xl lg:text-6xl xl:text-7xl animated", { 'text-white': mounted && (theme === 'dark' || resolvedTheme === 'dark') }, { 'color-font ': mounted && (theme === 'light' || resolvedTheme === 'light') })}>
                The Nigerian Fintech Awards
              </h1>
              <p className="text-white three-row-paragraph mb-8 lg:text-[22px] text-base 2xl:text-xl ">Dedicated to honouring excellence in financial technologies and services companies and products. The Awards provide public recognition for the achievements of FinTech companies and products in categories </p>
              <div className="inline-flex space-x-4">
                <Link href="/category" passHref>
                  <a>
                    <Button>BROWSE  CATEGORIES</Button>
                  </a>
                </Link>

                <Link href="#how-to-register" passHref>
                  <a>
                    <Button className="hidden lg:flex" color="secondary">HOW TO ENTER </Button>
                  </a>
                </Link>

              </div>
            </div>
          </div>


        </div>
      </section>
      <div className="gradient-line mx-auto"></div>
    </div>
  );
}

export default HeroHome;
