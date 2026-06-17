import clientLogo10Dark from '@public/images/icons/background/ervaGroupDark.png';
import clientLogo10 from '@public/images/icons/background/ervaGroupLight.png';
import clientLogo6Dark from '@public/images/icons/background/EbrarDark.png';
import clientLogo6 from '@public/images/icons/background/EbrarLight.png';
import clientLogo7Dark from '@public/images/icons/background/narmanogluDark.png';
import clientLogo7 from '@public/images/icons/background/narmanogluLight.png';
import clientLogo8Dark from '@public/images/icons/background/kartepe.png';
import clientLogo8 from '@public/images/icons/background/kartepeLight.png';
import clientLogo9Dark from '@public/images/icons/background/alestaDark.png';
import clientLogo9 from '@public/images/icons/background/alestaLight.png';
import clientLogo5Dark from '@public/images/icons/background/kartal.png';
import clientLogo5 from '@public/images/icons/background/kartalLight.png';
import clientLogo4Dark from '@public/images/icons/background/sırmaDark.png';
import clientLogo4 from '@public/images/icons/background/sırmaLight.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const ClientsMarquee = () => {
  return ( 
    <section>
      <RevealAnimation delay={0.2}>
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-white to-transparent dark:from-background-5 z-40" />
          <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-white to-transparent dark:from-background-5 z-40" />
          <Marquee autoFill speed={40}>
            <div className="flex items-center gap-8 justify-center py-7.5">
              <figure className="min-w-[140px] md:min-w-[201px] h-[60px] flex items-center justify-center ml-8">
                <Image 
                  src={clientLogo6} 
                  alt="Client 1 logo" 
                  loading="lazy" 
                  className="dark:hidden object-contain max-h-[60px] w-auto" 
                />
                <Image 
                  src={clientLogo6Dark} 
                  alt="Client 1 logo" 
                  loading="lazy" 
                  className="hidden dark:inline-block object-contain max-h-[60px] w-auto" 
                />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] h-[60px] flex items-center justify-center">
                <Image 
                  src={clientLogo7} 
                  alt="Client 2 logo" 
                  loading="lazy" 
                  className="dark:hidden object-contain max-h-[60px] w-auto" 
                />
                <Image 
                  src={clientLogo7Dark} 
                  alt="Client 2 logo" 
                  loading="lazy" 
                  className="hidden dark:inline-block object-contain max-h-[60px] w-auto" 
                />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] h-[60px] flex items-center justify-center">
                <Image 
                  src={clientLogo8} 
                  alt="Client 3 logo" 
                  loading="lazy" 
                  className="dark:hidden object-contain max-h-[60px] w-auto" 
                />
                <Image 
                  src={clientLogo8Dark} 
                  alt="Client 3 logo" 
                  loading="lazy" 
                  className="hidden dark:inline-block object-contain max-h-[60px] w-auto" 
                />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] h-[60px] flex items-center justify-center">
                <Image 
                  src={clientLogo9} 
                  alt="Client 4 logo" 
                  loading="lazy" 
                  className="dark:hidden object-contain max-h-[60px] w-auto" 
                />
                <Image 
                  src={clientLogo9Dark} 
                  alt="Client 4 logo" 
                  loading="lazy" 
                  className="hidden dark:inline-block object-contain max-h-[60px] w-auto" 
                />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] h-[60px] flex items-center justify-center">
                <Image 
                  src={clientLogo10} 
                  alt="Client 5 logo" 
                  loading="lazy" 
                  className="dark:hidden object-contain max-h-[60px] w-auto" 
                />
                <Image 
                  src={clientLogo10Dark} 
                  alt="Client 5 logo" 
                  loading="lazy" 
                  className="hidden dark:inline-block object-contain max-h-[60px] w-auto" 
                />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] h-[60px] flex items-center justify-center">
                <Image 
                  src={clientLogo5} 
                  alt="Client 6 logo" 
                  loading="lazy" 
                  className="dark:hidden object-contain max-h-[60px] w-auto" 
                />
                <Image 
                  src={clientLogo5Dark} 
                  alt="Client 6 logo" 
                  loading="lazy" 
                  className="hidden dark:inline-block object-contain max-h-[60px] w-auto" 
                />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] h-[60px] flex items-center justify-center">
                <Image 
                  src={clientLogo4} 
                  alt="Client 7 logo" 
                  loading="lazy" 
                  className="dark:hidden object-contain max-h-[60px] w-auto" 
                />
                <Image 
                  src={clientLogo4Dark} 
                  alt="Client 7 logo" 
                  loading="lazy" 
                  className="hidden dark:inline-block object-contain max-h-[60px] w-auto" 
                />
              </figure>
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default ClientsMarquee;
