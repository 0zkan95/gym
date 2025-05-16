import { ClassType } from '@/shared/types';
import Image from 'next/image';

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className="bg-primary-500 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center rounded-md p-5 text-center text-2xl font-bold whitespace-normal text-white opacity-0 drop-shadow-md transition duration-500 hover:opacity-80">
        <p className="text-xl">{name}</p>
        <p className="mt-5 text-sm">{description}</p>
      </div>
      <Image
        alt={`${name}`}
        src={image}
        className="h-full w-full object-cover"
        fill
        sizes="(max-width: 450px) 100vw, (max-width: 768px) 75vw, 50vw"
        priority
      />
    </li>
  );
};

export default Class;
