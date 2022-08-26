import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import logo from '@/public/assets/images/the-nigeria-fintech-awards-logo.png';
import logoWhite from '@/public/assets/images/the-nigeria-fintech-awards-logo-white.png';


export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={logo} className="max-h-7 h-16 w-[200px]" alt="The-nigeria-fintech-awards-logo " />
      </a>
    </Link>
  );
};


export const LogoSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <Link href="/">
      <a>
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <Image src={logoWhite} className="max-h-7 h-16 w-[200px]" alt="The-nigeria-fintech-awards-logo " /> : <Image src={logo} className="hidden max-h-7 dark:block" alt="The-nigeria-fintech-awards-logo " />}
      </a>
    </Link>
  );
};
