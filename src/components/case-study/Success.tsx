import { products } from '@/data/products';
import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import ProductCard from '../codyol/ProductCard';
import CaseStudyPaginationWrapper from './CaseStudyPaginationWrapper';

const references: ICaseStudy[] = (getMarkDownData('src/data/case-study') as ICaseStudy[])
  .filter((item) => item.featured)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

const Success = () => {
  return (
    <>
      {/* Ürünlerimiz */}
      <section className="pt-[130px] pb-[60px] md:pt-[160px] lg:pb-[90px]">
        <div className="main-container">
          <div className="mx-auto mb-12 max-w-[760px] space-y-4 text-center md:mb-16">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Ürünlerimiz</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-5 sm:text-heading-4 md:text-heading-3 xl:text-heading-2 font-normal">
                Ürünlerimiz ve referanslarımız
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Farklı sektörler için geliştirdiğimiz SaaS uygulamaları ve markalar için hayata geçirdiğimiz dijital
                projeler.
              </p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} headingLevel="h2" />
            ))}
          </div>
          <p className="text-tagline-3 text-secondary/50 dark:text-accent/50 mt-6 text-center">
            Panel görselleri örnek verilerle hazırlanmıştır.
          </p>
        </div>
      </section>

      {/* Referanslar */}
      <section className="pb-[50px] lg:pb-[100px]">
        <div className="main-container">
          <div className="mx-auto mb-12 max-w-[760px] space-y-4 text-center md:mb-14">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">Referanslar</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Kurumsal web siteleri</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Farklı sektörlerden markalar için tasarlayıp geliştirdiğimiz web siteleri.</p>
            </RevealAnimation>
          </div>
          <CaseStudyPaginationWrapper caseStudies={references} />
        </div>
      </section>
    </>
  );
};

export default Success;
