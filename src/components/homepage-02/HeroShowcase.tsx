import ervaImg from '@public/images/codyol/projects/ErvaGrup.webp';
import kartalImg from '@public/images/codyol/projects/KartalInsaat.webp';
import narmanogluImg from '@public/images/codyol/projects/NarmanogluInsaatMuhendislik.webp';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

// Hero altında gerçek projelerden oluşan vitrin
const HeroShowcase = () => {
  return (
    <div className="main-container relative z-10">
      <RevealAnimation delay={0.4} offset={40}>
        <Link
          href="/projects"
          aria-label="Projelerimizi inceleyin"
          className="group relative mx-auto block max-w-[1080px] pt-6 md:pt-10">
          {/* sol */}
          <figure className="absolute top-[18%] left-0 hidden w-[44%] -rotate-[5deg] transition-transform duration-500 group-hover:-translate-x-2 md:block">
            <Image
              src={kartalImg}
              alt="Kartal İnşaat web sitesi"
              sizes="(min-width: 768px) 480px, 0px"
              className="h-auto w-full rounded-lg opacity-90 shadow-[0_24px_50px_-20px_rgba(20,10,30,0.30)]"
            />
          </figure>
          {/* sağ */}
          <figure className="absolute top-[18%] right-0 hidden w-[44%] rotate-[5deg] transition-transform duration-500 group-hover:translate-x-2 md:block">
            <Image
              src={narmanogluImg}
              alt="Narmanoğlu İnşaat & Mühendislik web sitesi"
              sizes="(min-width: 768px) 480px, 0px"
              className="h-auto w-full rounded-lg opacity-90 shadow-[0_24px_50px_-20px_rgba(20,10,30,0.30)]"
            />
          </figure>
          {/* orta */}
          <figure className="relative z-10 mx-auto w-full transition-transform duration-500 group-hover:-translate-y-1 md:w-[68%]">
            <Image
              src={ervaImg}
              alt="Erva Group web sitesi"
              priority
              sizes="(min-width: 768px) 740px, 100vw"
              className="h-auto w-full rounded-xl shadow-[0_40px_80px_-30px_rgba(20,10,30,0.40)]"
            />
          </figure>
        </Link>
      </RevealAnimation>
    </div>
  );
};

export default HeroShowcase;
