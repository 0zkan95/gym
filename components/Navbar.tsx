'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const [isAboveMediumScreens, setIsAboveMediumScreens] = useState<boolean>(true);
  const flexBetween = 'flex items-center justify-between';
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  useEffect(() => {
    const handleResize = () => {
      setIsAboveMediumScreens(window.innerWidth >= 1060);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <Image src="/logo.png" alt="logo" width={144} height={36} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? <DesktopNav /> : <MobileNav />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
