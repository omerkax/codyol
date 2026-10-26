'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import HeroContent from './HeroContent';
import HeroShapes from './HeroShapes';
import HeroShowcase from './HeroShowcase';

const Hero = () => {
  const sceneRef = useParallaxEffect();

  return (
    <section
      ref={sceneRef}
      className="dark:bg-background-8 relative z-0 overflow-hidden bg-white pb-10 md:pb-16"
      id="scene">
      {/* Marka renklerinde yumuşak arka plan ışıltısı */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-40 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(230,45,94,0.14),transparent)] dark:bg-[radial-gradient(closest-side,rgba(230,45,94,0.22),transparent)]" />
        <div className="absolute top-[45%] -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(231,43,123,0.10),transparent)]" />
        <div className="absolute top-[30%] -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(255,170,200,0.22),transparent)] dark:opacity-40" />
      </div>
      <div className="relative z-10 pt-[150px] sm:pt-[200px]">
        <HeroShapes />
        <HeroContent />
      </div>
      <HeroShowcase />
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
