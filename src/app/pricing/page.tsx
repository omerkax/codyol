import Benefits from '@/components/pricing-01/Benefits';
import Contact from '@/components/pricing-01/Contact';
import Features from '@/components/pricing-01/Features';
import Pricing from '@/components/pricing-01/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterThree from '@/components/shared/footer/FooterThree';
import Pricing2 from '@/components/pricing-02/Pricing';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next'; 
import { Fragment } from 'react';

export const metadata: Metadata = generateMetadata(
  'Fiyatlandırma - Codyol',
  'Codyol\'un esnek fiyatlandırma planları. Başlangıç, Büyüme ve Kurumsal paketlerimizle dijital dönüşümünüze başlayın.',
  'https://codyol.com/pricing'
);

const PricingPage = () => {
  return (
    <Fragment>
      <NavbarOne 
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-accent dark:!bg-background-9"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Pricing2/>
        {/* <Pricing />  */}
        {/* <Benefits /> */}
        {/* <Features /> */}
        <Contact />
        {/* <CTAV1
          className="dark:bg-background-7 bg-background-3"
          badgeText="Başlayın"
          badgeClass="!badge-cyan"
          ctaHeading="Dijital dönüşümünüze bugün başlayın"
          description="Ücretsiz danışmanlık ile projenizi değerlendirin ve fikirlerinizi hayata geçirelim."
          ctaBtnText="Teklif Al"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        /> */}
      </main>
       <FooterThree/>
    </Fragment>
  );
};

export default PricingPage;

