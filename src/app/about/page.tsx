import OurMission from '@/components/aboutpage-01/OurMission';
import VisionStatement from '@/components/aboutpage-01/VisionStatement';
import WhyChooseUs from '@/components/aboutpage-01/WhyChooseUs';
import NavbarOne from '@/components/shared/header/NavbarOne';
import ReviewsV3 from '@/components/shared/reviews/ReviewsV3';
import FooterThree from '@/components/shared/footer/FooterThree';

import Process from '@/components/integration-02/Process';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Hakkımızda - Codyol',
  'Codyol, yapay zeka destekli dijital çözümler ve SaaS ürünleri geliştiren, tüm dijital ihtiyaçları tek çatı altında toplayan bir teknoloji stüdyosudur.',
  'https://codyol.com/about'
);

const AboutPage = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="dark:bg-background-7"
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <VisionStatement />
        <OurMission />
        <Process />
        {/* <WhyChooseUs /> */}
        {/* <ReviewsV3
          badgeText="Müşteri Başarıları"
          buttonText="Tüm projeleri görüntüle"
          badgeColor="badge-cyan"
          title="Gerçek insanlar. Gerçek sonuçlar."
          description="Codyol ile çalışan müşterilerimiz, dijital dönüşümlerinde ölçülebilir iyileştirmeler ve sürdürülebilir çözümler elde ediyorlar."
        /> */}
      </main>
      <FooterThree />
    </>
  );
};

export default AboutPage;

