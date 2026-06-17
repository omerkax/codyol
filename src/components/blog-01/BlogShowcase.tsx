import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogPaginationWrapper from './BlogPaginationWrapper';

const BlogShowcase = () => {
  const blogs: IBlogPost[] = getMarkDownData('src/data/blogs');

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              En son <span className="text-primary-500 inline-block">haberler ve içgörüler</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[738px] mx-auto">
              Son haberlerimiz; ürün inovasyonları, stratejik iş ortaklıkları ve sektörel trendleri kapsayan içgörüler
              sunar. Codyol’un müşterilerine sağladığı değeri, gerçek örnekler üzerinden paylaşıyoruz.
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <BlogPaginationWrapper blogs={blogs} />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
