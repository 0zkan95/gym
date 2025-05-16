import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import HText from '@/components/HText';
import Class from '@/components/Class';
import { ClassType } from '@/shared/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/image1.png',
  },
  {
    name: 'Yoga Classes',
    image: '/image2.png',
  },
  {
    name: 'Ab Core Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/image3.png',
  },
  {
    name: 'Adventure Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/image4.png',
  },
  {
    name: 'Fitness Classes',
    image: '/image5.png',
  },
  {
    name: 'Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/image6.png',
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust this value to control scroll distance
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="ourclasses" className="bg-primary-100 w-full py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam
              porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor
              facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full">
          <div className="relative h-full w-full overflow-hidden">
            <button
              onClick={() => scroll('left')}
              className="bg-primary-500 hover:bg-primary-400 absolute top-1/2 left-4 z-40 -translate-y-1/2 cursor-pointer rounded-full p-2 text-white transition duration-300 hover:scale-110"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div
              ref={scrollContainerRef}
              className="absolute top-0 left-0 h-full w-full overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <ul className="flex w-[2800px] gap-8">
                {classes.map((item, index) => (
                  <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                ))}
              </ul>
            </div>
            <button
              onClick={() => scroll('right')}
              className="bg-primary-500 hover:bg-primary-400 absolute top-1/2 right-4 z-40 -translate-y-1/2 cursor-pointer rounded-full p-2 text-white transition duration-300 hover:scale-110"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
