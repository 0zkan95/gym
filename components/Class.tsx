import { ClassType } from '@/shared/types';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      className="relative mx-5 inline-block h-[380px] w-[450px]"
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`bg-primary-500 absolute inset-0 z-30 flex flex-col items-center justify-center rounded-md p-5 text-center text-2xl font-bold text-white transition duration-500 lg:opacity-0 lg:hover:opacity-80 ${isActive ? 'opacity-80' : 'opacity-0'} `}
      >
        <p className="text-xl">{name}</p>
        <p className="mt-5 text-sm">{description}</p>
      </div>
      <Image
        alt={name}
        src={image}
        className="h-full w-full rounded-md object-cover"
        fill
        sizes="(max-width: 450px) 100vw, (max-width: 768px) 75vw, 50vw"
        priority
      />
    </li>
  );
};

export default Class;
