import BlogShowcase from '@/components/blog-01/BlogShowcase';
import FeaturedBlog from '@/components/blog-01/FeaturedBlog';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Blog - Codyol',
  'Yapay zeka, SaaS, dijital pazarlama ve teknoloji hakkında güncel içerikler ve rehberler.',
  'https://codyol.com/blog'
);

const BlogPage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Blog" heading="Blog" />
        <FeaturedBlog />
        <BlogShowcase />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="!badge-yellow-v2"
          badgeText="Başlayın"
          ctaHeading="Dijital dönüşümünüze bugün başlayın"
          description="Ücretsiz danışmanlık ile projenizi değerlendirin ve fikirlerinizi hayata geçirelim."
          ctaBtnText="Teklif Al"
        />
      </main>
      <FooterOne />
    </>
  );
};

export default BlogPage;

