import React from 'react';
import Link from 'next/link';
import { SelectedPage } from '@/shared/types';

interface ActionButtonProps {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  className?: string;
}

const ActionButton = ({
  children,
  setSelectedPage,
  className = '',
}: ActionButtonProps) => {
  const baseStyles =
    'text-white bg-secondary-500 px-8 py-2 rounded-md hover:bg-primary-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  const buttonStyles = `${baseStyles} ${className}`;

  return (
    <Link
      href="#contactus"
      className={buttonStyles}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </Link>
  );
};

export default ActionButton;
