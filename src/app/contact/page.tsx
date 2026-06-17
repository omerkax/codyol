import ContactInfo from '@/components/contact-page/ContactInfo';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterThree from '@/components/shared/footer/FooterThree';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'İletişim - Codyol',
  'Projeniz, fikriniz veya dijital ihtiyaçlarınız için bize ulaşın. Ekibimiz en kısa sürede sizinle iletişime geçsin.',
  'https://codyol.com/contact'
);

const ContactPage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7 pt-[60px]">
        <ContactInfo />
      </main>
       <FooterThree/>
    </>
  );
};

export default ContactPage;

