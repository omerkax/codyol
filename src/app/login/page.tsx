import LoginHero from '@/components/authentication/LoginHero';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Giriş Yap - Codyol',
  'Codyol hesabınıza giriş yapın.',
  'https://codyol.com/login'
);

const LoginPage = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="dark:bg-background-7"
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <LoginHero />
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
    </>
  );
};

export default LoginPage;

