'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import Benefits from '@/components/Benefits';

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

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
      <HomePage />
      <Benefits />
    </>
  );
}
