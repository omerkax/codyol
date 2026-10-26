import alestaDark from '@public/images/codyol/clients/alesta-dark.png';
import alesta from '@public/images/codyol/clients/alesta.png';
import ebrarDark from '@public/images/codyol/clients/ebrar-dark.png';
import ebrar from '@public/images/codyol/clients/ebrar.png';
import ervaDark from '@public/images/codyol/clients/erva-dark.png';
import erva from '@public/images/codyol/clients/erva.png';
import kartalDark from '@public/images/codyol/clients/kartal-dark.png';
import kartal from '@public/images/codyol/clients/kartal.png';
import kartepeDark from '@public/images/codyol/clients/kartepe-dark.png';
import kartepe from '@public/images/codyol/clients/kartepe.png';
import narmanogluDark from '@public/images/codyol/clients/narmanoglu-dark.png';
import narmanoglu from '@public/images/codyol/clients/narmanoglu.png';
import sirmaDark from '@public/images/codyol/clients/sirma-dark.png';
import sirma from '@public/images/codyol/clients/sirma.png';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  name: string;
  light: StaticImageData;
  dark: StaticImageData;
  // Geniş logolar daha kısa, kare logolar daha uzun gösterilir; böylece optik boyut eşitlenir
  heightClass: string;
}

const clients: ClientLogo[] = [
  { name: 'Erva Group', light: erva, dark: ervaDark, heightClass: 'h-7 md:h-8' },
  { name: 'Kartepe Grup', light: kartepe, dark: kartepeDark, heightClass: 'h-12 md:h-14' },
  { name: 'Kartal İnşaat', light: kartal, dark: kartalDark, heightClass: 'h-10 md:h-12' },
  { name: 'Ebrar Apart & Otel', light: ebrar, dark: ebrarDark, heightClass: 'h-12 md:h-14' },
  { name: 'Narmanoğlu İnşaat & Mühendislik', light: narmanoglu, dark: narmanogluDark, heightClass: 'h-11 md:h-12' },
  { name: 'Alesta Grup', light: alesta, dark: alestaDark, heightClass: 'h-8 md:h-9' },
  { name: 'Sırma Denizcilik', light: sirma, dark: sirmaDark, heightClass: 'h-12 md:h-14' },
];

const ClientsMarquee = () => {
  return (
    <section className="dark:bg-background-8 bg-white pt-4 pb-10 md:pb-14">
      <RevealAnimation delay={0.1}>
        <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 mb-6 text-center">
          Birlikte çalıştığımız markalar
        </p>
      </RevealAnimation>
      <RevealAnimation delay={0.2}>
        <div className="relative">
          <div className="dark:from-background-8 absolute top-0 left-0 z-40 h-full w-[12%] bg-gradient-to-r from-white to-transparent md:w-[18%]" />
          <div className="dark:from-background-8 absolute top-0 right-0 z-40 h-full w-[12%] bg-gradient-to-l from-white to-transparent md:w-[18%]" />
          <Marquee autoFill speed={35} pauseOnHover>
            <ul className="flex items-center">
              {clients.map((client) => (
                <li
                  key={client.name}
                  className="mx-6 flex h-16 min-w-[120px] items-center justify-center opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:mx-10 md:min-w-[150px]">
                  <Image
                    src={client.light}
                    alt={`${client.name} logosu`}
                    loading="lazy"
                    className={`w-auto object-contain dark:hidden ${client.heightClass}`}
                  />
                  <Image
                    src={client.dark}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className={`hidden w-auto object-contain dark:block ${client.heightClass}`}
                  />
                </li>
              ))}
            </ul>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default ClientsMarquee;
