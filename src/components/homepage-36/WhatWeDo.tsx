'use client';
import { useWordAnimation } from '@/hooks/useWordAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const WhatWeDo = () => {
  const { titleRef } = useWordAnimation({
    start: 'top 80%',
  });
  return (
    <section className="max-[1920px]:px-5">
      <RevealAnimation delay={0.2}>
        <div className="bg-secondary max-w-[1800px] rounded-3xl xl:rounded-4xl lg:py-24 xl:py-28 px-5 mx-auto">
          <div className="max-w-[1400px] mx-auto py-16 lg:py-20 xl:py-30">
            <h2
              ref={titleRef}
              className="split-text-team-title text-center text-accent font-inter-tight font-light text-heading-5 sm:text-heading-4 md:text-heading-3 lg:text-heading-2 xl:text-heading-1 2xl:text-[88px] 2xl:leading-[120%] wrap-break-word">
              Akıllı yazılımlar, güçlü dijital stratejiler
ve ölçülebilir sonuçlar.
            </h2>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default WhatWeDo;
