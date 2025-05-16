import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const MobileNav = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuToggled(!isMenuToggled);
  const closeMenu = () => setIsMenuToggled(false);

  return (
    <>
      <button
        className="z-50 cursor-pointer rounded-full p-2 transition-all duration-300"
        style={{ backgroundColor: 'var(--color-secondary-500)' }}
        onClick={toggleMenu}
      >
        <div className="relative h-6 w-6">
          <Bars3Icon
            className={`absolute h-6 w-6 text-white transition-all duration-300 ${
              isMenuToggled ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`}
          />
          <XMarkIcon
            className={`absolute h-6 w-6 text-white transition-all duration-300 ${
              isMenuToggled ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
            }`}
          />
        </div>
      </button>

      {isMenuToggled && (
        <div className="bg-primary-100 fixed top-0 right-0 bottom-0 h-full w-[200px] border-0 text-gray-500 drop-shadow-xl">
          {/* Menu Items */}
          <div className="mx-2 mt-16 flex flex-col gap-4 pt-4 text-xl text-white">
            <Link className="hover:text-primary-500" href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link className="hover:text-primary-500" href="/#benefits" onClick={closeMenu}>
              Benefits
            </Link>
            <Link className="hover:text-primary-500" href="/#ourclasses" onClick={closeMenu}>
              Our Classes
            </Link>
            <Link className="hover:text-primary-500" href="/#contactus" onClick={closeMenu}>
              Contact Us
            </Link>
            <Link className="hover:text-primary-500" href="/signin" onClick={closeMenu}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
