import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import behance from '@public/images/icons/behance.svg';
import dribbble from '@public/images/icons/dribbble.svg';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import darkLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';
import FooterLeftGradient from './FooterLeftGradient';
import FooterRightGradient from './FooterRightGradient';

interface FooterOneProps {
  className?: string;
  defaultTheme?: 'light' | 'dark';
}

const FooterOne: FC<FooterOneProps> = ({ className, defaultTheme }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative overflow-hidden', className)}>
      {/* <!-- right gradient --> */}
      <FooterRightGradient />

      {/* <!-- left gradient --> */}
      <FooterLeftGradient />
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px]">
                <figure>
                  <Image src={darkLogo} alt="Codyol Logo" />
                </figure>
                <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                  Codyol, yapay zeka destekli dijital çözümler ve SaaS ürünleri geliştiren, tüm dijital ihtiyaçları tek çatı altında toplayan bir teknoloji stüdyosudur.
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.instagram.com/codyoltr" className="footer-social-link">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-6" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://www.linkedin.com/company/codyol" className="footer-social-link">
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-6" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px"></div>
                  <Link target="_blank" href="https://x.com/codyoltr" className="footer-social-link">
                    <span className="sr-only">X (Twitter)</span>
                    <Image className="size-6" src={linkedin} alt="X" />
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Şirket</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <Link href="/about" className="footer-link">
                        Hakkımızda
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="footer-link">
                        Hizmetler
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects" className="footer-link">
                        Projeler
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="footer-link">
                        Kariyer
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-link">
                        İletişim
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.5}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Kaynaklar</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <Link href="/blog" className="footer-link">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio" className="footer-link">
                        Portfolyo
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="footer-link">
                        Fiyatlandırma
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.6}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Yasal</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <Link href="/terms-conditions" className="footer-link">
                        Kullanım Koşulları
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="footer-link">
                        Gizlilik Politikası
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="relative pt-[26px] pb-[100px] text-center">
          <FooterDivider />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              Copyright &copy; {new Date().getFullYear()} Codyol – Yapay Zeka Destekli Dijital Çözümler Stüdyosu
            </p>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle defaultTheme={defaultTheme} />
    </footer>
  );
};

export default FooterOne;
