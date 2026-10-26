import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyPaginationWrapper from './CaseStudyPaginationWrapper';

const caseStudies: ICaseStudy[] = getMarkDownData('src/data/case-study')
  .filter(service => service.featured)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  .slice(0, 7);


const Success = () => {
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">  
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h1 className="text-heading-8">Hayata geçirdiğimiz projeler</h1>
            </RevealAnimation>
             <RevealAnimation delay={0.2}>
              <h4 className="max-w-[738px] mx-auto text-heading-6">
                Farklı sektörlerden markalar için tasarlayıp geliştirdiğimiz dijital ürünler.
              </h4>
            </RevealAnimation>
          </div>
          <div className="space-y-14">
            <CaseStudyPaginationWrapper caseStudies={caseStudies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
