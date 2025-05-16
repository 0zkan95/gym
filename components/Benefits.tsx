'use client';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import HText from '@/components/HText';
import { SelectedPage, BenefitType } from '@/shared/types';
import Benefit from '@/components/Benefit';
import Image from 'next/image';
import ActionButton from './ActionButton';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description: 'Neque adipiscing amet amet enim. Feugiat dolor enimurgerdum.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: 'Neque adipiscing amet amet enim. Feugiat dolor enimurgerdum.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description: 'Neque adipiscing amet amet enim. Feugiat dolor enimurgerdum.',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* HEADER */}
        <motion.div
          className="text-red-400 md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            we provide world class fitness equipment, trainers and classes to get you to your
            ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map(benefit => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/*  GRAPHİCS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 rounded-xl p-10 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <Image
            src={'/BenefitsPageGraphic.png'}
            alt="benefits-page-graphic"
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />

          {/* DESCRIPTION */}
          <div className="mt-10 p-10">
            {/* HEADING */}
            <div className="relive">
              <div className="before:z[-1] before:content-abstract before:absolute before:-top-20 before:-left-20">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING <span className="text-red-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* TEXT */}
            <motion.div
              className="items-center gap-10 md:flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-sm">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices
                consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet
                vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas
                ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
                diam odio.
              </p>
              <p className="mb-5 text-sm">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam
                porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor
                facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:content-sparkles before:absolute before:right-40 before:-bottom-20 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
