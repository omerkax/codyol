import gradient17 from '@public/images/gradient/gradient-17.png';
import gradient22 from '@public/images/gradient/gradient-22.png';
import gradient6 from '@public/images/gradient/gradient-6.png';
import homeIcon from '@public/images/icons/home.svg';
import mailIcon from '@public/images/icons/mail-open.svg';
import phoneIcon from '@public/images/icons/phone-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SectionHeader from '../shared/SectionHeader';

const contactInfoItems = [
  {
    id: 1,
    icon: homeIcon,
    title: 'Adresimiz',
    content: 'Yalova, Türkiye',
  },
  {
    id: 2,
    icon: mailIcon,
    title: 'E-posta',
    content: 'info@codyol.com',
    link: 'mailto:info@codyol.com',
  },
  {
    id: 3,
    icon: phoneIcon,
    title: 'Telefon',
    content: '+90 (507) 401 77 65',
    link: 'tel:+905074017765',
  },
];

const ContactInfo = () => {
  return (
    <section className="pb-4 md:pb-16 lg:pb-20 xl:pb-[100px]" aria-label="İletişim bilgileri ve formu">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          {/* <div className="max-w-[680px] mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Projeniz, fikriniz veya dijital ihtiyaçlarınız için bize ulaşın.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Sorularınız, teknik destek ihtiyacınız veya danışmanlık talebiniz için ekibimiz burada. En kısa sürede size geri dönüş yapacağız.
              </p>
            </RevealAnimation>
          </div> */}
          <section className="pt-8">
            <SectionHeader
              as="h1"
              title="Projeniz, fikriniz veya dijital ihtiyaçlarınız için bize ulaşın."
              description="Sorularınız, teknik destek ihtiyacınız veya danışmanlık talebiniz için ekibimiz burada. En kısa sürede size geri dönüş yapacağız."
            />
          </section>
          <div className="flex lg:items-start flex-col justify-center items-center gap-10 lg:flex-row lg:gap-8 xl:gap-[70px]">
            {/* contact info cards  */}
            <div className="flex flex-col gap-8 md:flex-row lg:flex-col">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 space-y-6 w-full md:max-w-[371px] text-center relative overflow-hidden">
                    {/* bg overlay  */}
                    {/* <figure
                      className={`absolute select-none pointer-events-none size-[350px] overflow-hidden ${item.gradientClass}`}>
                      <Image src={item.gradient} alt="Decorative gradient overlay" className="size-full object-cover" />
                    </figure> */}
                    <figure className="size-10 overflow-hidden mx-auto">
                      <Image src={item.icon} alt={`${item.title} icon`} className="size-full object-cover" />
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-heading-6 text-accent">{item.title}</p>
                      {item.link ? (
                        <p className="text-accent/60">
                          <Link href={item.link}>{item.content}</Link>
                        </p>
                      ) : (
                        <p className="text-accent/60">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            {/* contact form  */}
            <RevealAnimation
              delay={0.3}
              className="max-w-[847px] w-full mx-auto bg-white dark:bg-background-6 rounded-4xl p-6 md:p-8 lg:p-11">
              <form action="#" method="POST" className="space-y-8">
                {/* name and phone number  */}
                <div className="flex items-center flex-col md:flex-row gap-8 justify-between">
                  {/*  name */}
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label
                      htmlFor="fullname"
                      className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Adınız ve soyadınız"
                      required={true}
                      autoComplete="name"
                      className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    />
                  </div>
                  {/* number */}
                  <div className="space-y-2 max-w-[364px] w-full">
                    <label
                      htmlFor="number"
                      className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                      Telefon
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="+90 (5__) ___ __ __"
                      required={false}
                      autoComplete="tel"
                      className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    />
                  </div>
                </div>
                {/* email  */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    E-posta adresi
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ornek@email.com"
                    required={true}
                    autoComplete="email"
                    className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                  />
                </div>
                {/* subject  */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Mesajınızın konusu"
                    required={true}
                    className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                  />
                </div>
                {/* message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Mesajınızı buraya yazın"
                    required={true}
                    className="w-full px-[18px] py-3 rounded-xl border dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    defaultValue={''}
                  />
                </div>
                {/* terms checkbox */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="sr-only peer" required={true} />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                    <Link href="/terms-conditions" className="text-primary-500 underline text-tagline-3">
                      Kullanım koşullarını
                    </Link>
                    {' '}kabul ediyorum
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-md btn-secondary w-full hover:btn-primary dark:btn-accent before:content-none first-letter:uppercase">
                  Gönder
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
