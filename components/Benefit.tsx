'use client';
import React from 'react';
import { SelectedPage } from '@/shared/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-red-500 px-5 py-16 text-center text-red-500"
    >
      <div className="mb-4 flex justify-center">
        <div className="bg-primary-100 rounded-full border-2 border-gray-100 p-4">{icon}</div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <Link href={`#${SelectedPage.ContactUs}`}>
        <p className="hover:text-secondary-400 mt-5 text-sm text-red-400 underline">Learn More</p>
      </Link>
    </motion.div>
  );
};

export default Benefit;
