import React, { useState, useEffect } from 'react';
import ActionButton from '@/components/ActionButton';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HomePage = ({ setSelectedPage }: Props) => {
  const [isAboveMediumScreens, setIsAboveMediumScreens] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsAboveMediumScreens(window.innerWidth >= 1060);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-between md:flex md:h-5/6"
      >
        <motion.div
          className="top-20 z-10 mt-32 md:basis-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:-mt-20">
            <div className="relative top-20">
              <div className="absolute -top-10 -left-10 z-[-1] hidden opacity-40 md:block">
                <Image src="/EvolveText.png" alt="hero text" width={1000} height={1000} />
              </div>
              <div className="">
                <Image src="/HomePageText.png" alt="hero text" width={1000} height={1000} />
              </div>
            </div>
          </div>
          <div className="top-20 mt-30">
            <p className="text-md top-20 mt-8 font-semibold text-black">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the
              Body Shapes You Dream of.. Get Your Dream Body Now.
            </p>
            <div className="mt-8 flex items-center gap-8">
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              <Link
                href="/#contact"
                className="hover:text-secondary-500 text-sm font-bold text-red-500 underline"
              >
                <p>Learn More</p>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="flex basis-3/5 justify-center md:z-10 md:mt-20 md:ml-40 md:justify-items-end">
          <Image src="/HomePageGraphic.png" alt="1st muscle" width={500} height={600} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="bg-primary-100 h-[150px] w-full py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <Image src="/SponsorRedBull.png" alt="RedBull Sponsor" width={100} height={100} />
              <Image src="/SponsorFortune.png" alt="Fortune Sponsor" width={100} height={100} />
              <Image src="/SponsorForbes.png" alt="Forbes Sponsor" width={100} height={100} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomePage;
