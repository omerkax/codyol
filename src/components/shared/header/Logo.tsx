import logoDark from '@public/images/shared/logo-green-White.svg';
import logo from '@public/images/shared/logo-green.svg';
import mainLogo from '@public/images/shared/logo-green.svg';
import Image from 'next/image';  
import Link from 'next/link';
  
const Logo = () => {
  return (
    <div className="flex items-center pr-8 lg:pr-16">  
      <Link href="/">
        <span className="sr-only">Ana Sayfa</span>
        <figure className="hidden lg:block lg:max-w-[138px]">
          <Image src={mainLogo} alt="Codyol" className="block w-full h-auto dark:hidden" />
          <Image src={logoDark} alt="Codyol" className="hidden w-full h-auto dark:block" />
        </figure>

        {/* mobile logo */}
        <figure className="block max-w-[80px] lg:hidden">
          <Image src={logo} alt="Codyol" className="block w-full h-auto dark:hidden" />
          <Image src={logoDark} alt="Codyol" className="hidden w-full h-auto dark:block" />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;
