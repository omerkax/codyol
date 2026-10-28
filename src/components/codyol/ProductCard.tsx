import { Product } from '@/data/products';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface ProductCardProps {
  product: Product;
  index: number;
  headingLevel?: 'h2' | 'h3';
}

// Ürün kartı: örnek panel görseli + ad, kategori, açıklama ve öne çıkan özellikler
const ProductCard = ({ product, index, headingLevel: Heading = 'h3' }: ProductCardProps) => {
  return (
    <RevealAnimation delay={0.1 + index * 0.08}>
      <article className="group bg-background-1 dark:bg-background-6 flex h-full flex-col overflow-hidden rounded-[24px] border border-stroke-1/70 dark:border-stroke-5">
        <figure
          className="relative overflow-hidden px-6 pt-7 md:px-8 md:pt-9"
          style={{
            background: `linear-gradient(135deg, ${product.color}1f 0%, ${product.color}0a 55%, ${product.color}24 100%)`,
          }}>
          <Image
            src={product.image}
            alt={`${product.name} örnek panel ekranı`}
            sizes="(min-width: 1024px) 600px, 100vw"
            className="h-auto w-full translate-y-2 rounded-t-lg shadow-[0_24px_50px_-20px_rgba(20,10,30,0.35)] transition-transform duration-500 group-hover:translate-y-0"
          />
        </figure>
        <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-tagline-3 rounded-full px-3 py-1 font-medium"
              style={{ color: product.color, backgroundColor: `${product.color}14` }}>
              {product.category}
            </span>
          </div>
          <div className="space-y-2">
            <Heading className="text-heading-5 font-normal">{product.name}</Heading>
            <p className="text-secondary dark:text-accent text-tagline-1 font-medium">{product.tagline}</p>
            <p>{product.description}</p>
          </div>
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="text-tagline-3 text-secondary/80 dark:text-accent/80 rounded-full border border-stroke-1 px-3 py-1.5 dark:border-stroke-5">
                {feature}
              </li>
            ))}
          </ul>
          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tagline-1 inline-flex w-fit items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              style={{ color: product.color }}>
              {product.url.replace('https://', '')} ↗
            </a>
          )}
        </div>
      </article>
    </RevealAnimation>
  );
};

export default ProductCard;
