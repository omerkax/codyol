'use client';

import { useWordAnimation } from '@/hooks/useWordAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const MeetOurTeam = () => { 
  const { titleRef } = useWordAnimation();

  return (
    <section className="pb-[50px] md:pb-[80px] lg:pb-[100px]" aria-label="Team Introduction">
      <div className="main-container">
        <div className="space-y-7 md:space-y-14">
          <h2 ref={titleRef} className="split-text-team-title text-center mt-16">
            Net ihtiyaçları analiz eder, doğru çözümleri tasarlar ve sürdürülebilir dijital ürünler geliştiririz.
          </h2>

          <RevealAnimation delay={0.2}>
            <div className="text-center">
              <LinkButton
                href="/about"
                className="btn btn-secondary dark:btn-accent hover:btn-primary btn-lg md:btn-xl w-[90%] md:w-auto mx-auto md:mx-0">
                Neden Codyol?
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
