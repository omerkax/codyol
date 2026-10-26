import { ICaseStudy } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface CaseStudyPaginationWrapperProps {
  caseStudies: ICaseStudy[];
}

// Proje kartları: tarayıcı çerçeveli ekran görüntüsü + başlık + açıklama
const CaseStudyPaginationWrapper = ({ caseStudies }: CaseStudyPaginationWrapperProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((caseStudy, index) => (
        <RevealAnimation delay={0.1 + index * 0.05} key={caseStudy.slug}>
          <article className="group h-full" itemScope itemType="http://schema.org/CreativeWork">
            <div className="bg-background-1 dark:bg-background-6 flex h-full flex-col overflow-hidden rounded-[20px] transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(230,45,94,0.35)]">
              <figure className="relative overflow-hidden bg-[linear-gradient(135deg,#fde7ef_0%,#f6f3f7_55%,#fbe2ec_100%)] px-5 pt-6 dark:bg-[linear-gradient(135deg,#2a1520_0%,#14141a_60%,#2a1520_100%)]">
                <Image
                  src={caseStudy.thumbnail}
                  alt={`${caseStudy.title} web sitesi`}
                  width={1552}
                  height={792}
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full rounded-lg shadow-[0_20px_40px_-18px_rgba(20,10,30,0.30)] translate-y-1 transition-transform duration-500 group-hover:-translate-y-1"
                  itemProp="image"
                />
              </figure>
              <div className="space-y-2 p-6">
                <h2 className="text-heading-5 font-normal" itemProp="name">
                  {caseStudy.title}
                </h2>
                <p itemProp="description">{caseStudy.description}</p>
              </div>
            </div>
          </article>
        </RevealAnimation>
      ))}
    </div>
  );
};

CaseStudyPaginationWrapper.displayName = 'CaseStudyPaginationWrapper';
export default CaseStudyPaginationWrapper;
