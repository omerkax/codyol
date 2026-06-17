import Features from '@/components/our-services-01/Features';
import Services from '@/components/our-services-01/Services';
import Solutions from '@/components/our-services-01/Solutions';
import CTAV1 from '@/components/shared/cta/CTAV1';
import NavbarOne from '@/components/shared/header/NavbarOne'; 
import FooterThree from '@/components/shared/footer/FooterThree';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = generateMetadata(
  'Hizmetlerimiz - Codyol',
  'SaaS ürün geliştirme, özel yazılım, yapay zeka entegrasyonları, otomasyonlar, dijital pazarlama ve eğitim hizmetleri.',
  'https://codyol.com/services'
);

const ServicesPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-background-3 dark:!bg-background-7"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <Services />
        <Features />
        <Solutions />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Projeniz için"
          spanText="teklif alın"
          description="Dijital ihtiyaçlarınız için bugün bizimle iletişime geçin ve fikirlerinizi hayata geçirelim."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Teklif Al"
        />
      </main>
       <FooterThree/>
    </Fragment>
  );
};

export default ServicesPage;

