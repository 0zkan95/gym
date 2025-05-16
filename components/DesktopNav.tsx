import Link from 'next/link'
import ActionButton from './ActionButton'

const DesktopNav = () => {
  const flexBetween = "flex items-center justify-between";
  
  return (
    <div className={`${flexBetween} w-full font-bold `}>
      <div className={`${flexBetween} gap-8 text-sm`}>
        <Link className='text-secondary-500 hover:text-white' href="/">Home</Link>
        <Link className='text-secondary-500 hover:text-white' href="/#benefits">Benefits</Link>
        <Link className='text-secondary-500 hover:text-white' href="/#ourclasses">Our Classes</Link>
        <Link className='text-secondary-500 hover:text-white' href="/#contactus">Contact Us</Link>
      </div>
      <div className={`${flexBetween} gap-8`}>
        <ActionButton>Become a Member</ActionButton>
        <ActionButton href="/signin">Sign In</ActionButton>
      </div>
    </div>
  );
};

export default DesktopNav; 