import Success from '@/components/case-study/Success';
import CTAV1 from '@/components/shared/cta/CTAV1';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterThree from '@/components/shared/footer/FooterThree';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Ürünler ve Referanslar - Codyol',
  'PlotYol, LabYol, Klubyol ve Corelink gibi Codyol SaaS ürünleri ile markalar için geliştirdiğimiz kurumsal web siteleri.',
  'https://codyol.com/projects'
);
 
const ProjectsPage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Success />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="!badge-yellow-v2"
          badgeText="Başlayın"
          ctaHeading="Benzer bir proje için bizimle iletişime geçin"
          description="Projeniz için ücretsiz danışmanlık alın ve fikirlerinizi hayata geçirelim."
          ctaBtnText="Teklif Al"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>

      <FooterThree />
    </>
  );
};

export default ProjectsPage;

