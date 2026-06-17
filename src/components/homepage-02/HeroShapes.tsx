import heroShape1 from '@public/images/home-page-2/1.png';
import heroShape2 from '@public/images/home-page-2/7.png';
import heroShape3 from '@public/images/home-page-2/5.png';
import heroShape4 from '@public/images/home-page-2/11.png';
import heroShape6 from '@public/images/home-page-2/6.png';
import heroShape8 from '@public/images/home-page-2/9.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroShapes = () => {
  return (
    <>
   
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/5 parallax-effect absolute top-[15%] left-[8%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full  bg-white p-[3px] max-[426px]:size-10 md:top-[22%] md:left-[19%] xl:top-[22%] xl:left-[26%]"
          data-parallax-value="1.8"
          data-parallax-x="1"
          data-parallax-y="0.5">
          <Image src={heroShape1} alt="Hero shape 1" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/5 parallax-effect absolute top-[15%] right-[12%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full  bg-white p-[3px] max-[426px]:size-10 md:top-[19%] md:right-[20%] xl:top-[19%] xl:right-[24%]"
          data-parallax-value="2.4"
          data-parallax-x="1"
          data-parallax-y="1">
          <Image src={heroShape2} alt="Hero shape 2" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/5 parallax-effect absolute bottom-[16%] left-[7%] -z-10 hidden h-[50px] w-[50px] shrink-0 rounded-full bg-white p-[3px] max-[426px]:size-10 sm:block md:bottom-[18%] md:left-[8%] xl:bottom-[18%] xl:left-[14%]"
          data-parallax-value="1.8"
          data-parallax-x="0.7"
          data-parallax-y="-1">
          <Image src={heroShape3} alt="Hero shape 3" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/5parallax-effect absolute right-[10%] bottom-[15%] -z-10 hidden h-[50px] w-[50px] shrink-0 rounded-full bg-white p-[3px] max-[426px]:size-10 sm:block md:right-[25%] md:bottom-[15%] xl:right-[28%] xl:bottom-[15%]"
          data-parallax-value="1.9"
          data-parallax-x="1"
          data-parallax-y="-0.7">
          <Image src={heroShape4} alt="Hero shape 4" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/5 parallax-effect absolute top-[40%] right-[0%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full  bg-white p-[3px] max-[426px]:size-10 md:top-[30%] md:right-[5%] xl:top-[32%] xl:right-[10%]"
          data-parallax-value="1.7"
          data-parallax-x="1"
          data-parallax-y="0.8">
          <Image src={heroShape6} alt="Hero shape 6" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          className="dark:bg-accent/5 parallax-effect absolute top-[32%] left-[0%] -z-10 h-[50px] w-[50px] shrink-0 rounded-full  bg-white p-[3px] max-[426px]:size-10 md:top-[42%] md:left-[3%] xl:top-[42%] xl:left-[8%]"
          data-parallax-value="1.7"
          data-parallax-x="0.5"
          data-parallax-y="-1">
          <Image src={heroShape8} alt="Hero shape 8" className="size-11 rounded-full max-[426px]:size-8" />
        </figure>
      </RevealAnimation>
    </>
  );
};

export default HeroShapes;