import { cn } from '@/utils/cn';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PageHeroProps {
  className?: string;
  title?: string;
  heading?: string;
  badge?: string; // 👈 ekle
}
const PageHero = ({ className, title, heading, badge }: PageHeroProps) => {
  return (
    <section
      className={cn( 
        'pt-24 md:pt-28 xl:pt-32',
        className
      )} 
    >
      <div className="main-container">
        <div className="max-w-2xl mx-auto text-center space-y-3 ">
          {badge && (
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan md:text-xl mb-5 inline-block">
                {badge}
              </span>
            </RevealAnimation>
          )}
          <RevealAnimation delay={0.2}>
            <h1 className="lg:text-heading-2 font-normal">
              {heading}
            </h1>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};


export default PageHero;
