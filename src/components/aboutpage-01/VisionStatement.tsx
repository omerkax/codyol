import vision1Img from '@public/images/about-page-01/about1.png';
import vision1ImgDark from '@public/images/about-page-01/about1-dark.png';
import vision2Img from '@public/images/about-page-01/about2.png';
import vision2ImgDark from '@public/images/about-page-01/about2-dark.png';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import SectionHeader from '../shared/SectionHeader'; 

const VisionStatement = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-[100px]">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <SectionHeader
          title="Codyol, iş dünyasının geleceğini şekillendiriyor."
          description=" Yapay zeka, özel yazılım ve otomasyon çözümleriyle girişimler ve kurumlar için ölçeklenebilir dijital ürünler geliştiriyoruz."
        />
        <article className="grid grid-cols-12 gap-y-8 gap-x-8 justify-center">
          <RevealAnimation delay={0.5}>
            <figure className="col-span-12 md:col-span-6 rounded-[20px] overflow-hidden max-w-[630px]">
              <Image src={vision1Img} alt="vision-1" className="block w-full h-auto dark:hidden" />
              <Image src={vision1ImgDark} alt="vision-1" className="hidden w-full h-auto dark:block" />
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.6}>
            <figure className="col-span-12 md:col-span-6 rounded-[20px] overflow-hidden max-w-[630px]">
              <Image src={vision2Img} alt="vision-2" className="block w-full h-auto dark:hidden" />
              <Image src={vision2ImgDark} alt="vision-2" className="hidden w-full h-auto dark:block" />
            </figure>
          </RevealAnimation>
        </article>

      </div>
    </section>
  );
};

export default VisionStatement;
