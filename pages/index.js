import Logo from '@/components/Logo';
import { Button } from '@/components/form';
import Link from 'next/link';
import HeaderOne from '@/components/Header1';
import Header from '@/components/Header';
import HomeHero from '@/components/HeroHome'
import AboutSection from '@/components/sections/About';
import HowtoRegSection from '@/components/sections/HowtoRegister';
import Footer from '@/components/Footer';
import Packages from '@/components/sections/Packages';
import AwardsCategory from '@/components/sections/AwardsCategory';
import AskQuestion from '@/components/sections/AskQuestion';




export default function Home() {
  return (
    <>

      <Header homePage
        title="Home-Page" desc="Home-Page The Nigeria FinTech Awards" />
      <HomeHero />
      <AboutSection />
      <HowtoRegSection />
      <Packages />
      <AwardsCategory />
      <AskQuestion />
      <Footer />

      {/* <section className="hero w-screen h-screen mt-20"></section> */}
    </>
  );
}
