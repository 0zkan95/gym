'use client';
import React, { useState, useEffect } from 'react';
import { SelectedPage } from '@/shared/types';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import Benefits from '@/components/Benefits';
import OurClasses from '@/components/OurClasses';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isTopOfPage={isTopOfPage} />
      <HomePage setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
    </>
  );
}
