import { products } from '@/data/products';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import ProductCard from './ProductCard';

// Ana sayfa: kendi SaaS ürünlerimiz
const ProductsShowcase = () => {
  return (
    <section className="dark:bg-background-8 bg-white py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:mb-14 md:flex-row md:items-end md:text-left">
          <div className="max-w-[640px] space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Ürünlerimiz</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>
                Sektörlere özel <span className="text-primary-500">SaaS uygulamalarımız</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Sahada gördüğümüz ihtiyaçlardan yola çıkarak kendi ürünlerimizi geliştiriyoruz; müşteri projelerinde de aynı deneyimi kullanıyoruz.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div>
              <LinkButton
                href="/projects"
                className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-lg">
                Ürünler ve referanslar
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
