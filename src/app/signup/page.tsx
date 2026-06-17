import SignupHero from '@/components/authentication/SignupHero';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = generateMetadata(
  'Kayıt Ol - Codyol',
  'Codyol\'a yeni hesap oluşturun.',
  'https://codyol.com/signup'
);

const SignUpPage = () => {
  return (
    <Fragment>
      <NavbarOne
        megaMenuColor="dark:bg-background-7"
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <SignupHero />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Başlayın"
          ctaHeading="Dijital dönüşümünüze bugün başlayın"
          description="Ücretsiz danışmanlık ile projenizi değerlendirin ve fikirlerinizi hayata geçirelim."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Teklif Al"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default SignUpPage;

