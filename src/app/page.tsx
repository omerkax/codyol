import CTA from '@/components/homepage-16/CTA';
import Integration from '@/components/homepage-16/Integration';
import NavbarOne from '@/components/shared/header/NavbarOne';
import ClientsMarquee from '@/components/homepage-36/ClientsMarquee';
import Services from '@/components/homepage-13/Services';
import MeetOurTeam from '@/components/homepage-19/MeetOurTeam';
import FooterThree from '@/components/shared/footer/FooterThree';
import Hero2 from '@/components/homepage-02/Hero';
 
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = { 
  ...defaultMetadata,
  title: 'Codyol – Yapay Zeka Destekli Dijital Çözümler ve SaaS Stüdyosu',
  description: 'Codyol, SaaS ürünleri, özel yazılım geliştirme, yapay zeka entegrasyonları, otomasyonlar ve dijital pazarlama hizmetleri sunan teknoloji stüdyosudur.',
};

const HomePage = () => {
  return (
    <>
      <NavbarOne
        className="bg-background-2 backdrop-blur-[15px] dark:border dark:border-stroke-6 dark:bg-background-9"
        megaMenuColor="dark:!bg-background-9 !bg-background-2"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="dark:bg-background-6">
        <Hero2 />
        <ClientsMarquee />
        <Integration />
        <Services />
        <MeetOurTeam />
        <CTA />
      </main>
      <FooterThree/>
    </>
  );
};

export default HomePage;
