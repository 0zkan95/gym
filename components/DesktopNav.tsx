import Link from 'next/link';
import ActionButton from './ActionButton';
import { SelectedPage } from '@/shared/types';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const DesktopNav = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';

  return (
    <div className={`${flexBetween} z-1000 w-full font-bold`}>
      <div className={`${flexBetween} gap-8 text-sm`}>
        <Link
          className={`${selectedPage === SelectedPage.Home ? 'text-primary-500' : 'text-gray-500'} hover:text-primary-500 transition duration-500`}
          href="/"
          onClick={() => setSelectedPage(SelectedPage.Home)}
        >
          Home
        </Link>
        <Link
          className={`${selectedPage === SelectedPage.Benefits ? 'text-primary-500' : 'text-gray-500'} hover:text-primary-500 transition duration-500`}
          href="/#benefits"
          onClick={() => setSelectedPage(SelectedPage.Benefits)}
        >
          Benefits
        </Link>
        <Link
          className={`${selectedPage === SelectedPage.OurClasses ? 'text-primary-500' : 'text-gray-500'} hover:text-primary-500 transition duration-500`}
          href="/#ourclasses"
          onClick={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          Our Classes
        </Link>
        <Link
          className={`${selectedPage === SelectedPage.ContactUs ? 'text-primary-500' : 'text-gray-500'} hover:text-primary-500 transition duration-500`}
          href="/#contactus"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          Contact Us
        </Link>
      </div>
      <div className={`${flexBetween} gap-8`}>
        <ActionButton>Become a Member</ActionButton>
        <ActionButton href="/signin">Sign In</ActionButton>
      </div>
    </div>
  );
};

export default DesktopNav;
