import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import TermsConditionContent from '@/components/privacy/PrivacyContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy - NextSaaS',
};

const Privacy = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        {/* <PageHero title="Privacy" heading="Privacy" link="/privacy" /> */}
        <TermsConditionContent />
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
    </Fragment>
  );
};

export default Privacy;
