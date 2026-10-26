'use client';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import SectionHeader from '../shared/SectionHeader';

{
  /* =========================
Pricing section
===========================*/
}
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <section className="bg-gray-50 dark:bg-background-5 relative pb-20 md:pb-[100px] lg:pb-[150px] xl:pb-[200px] pt-[100px]">
      <div className="main-container flex flex-col gap-[70px]">
        <div className="flex flex-col items-center text-center">
      
          <SectionHeader
            as="h1"
            title="İhtiyacınıza uygun paketi seçin"
          />
          <RevealAnimation delay={0.4}>
            <div className="relative z-0">
           
              {/* <label className="relative inline-flex items-center cursor-pointer z-[10] bg-white dark:bg-background-9 py-6 px-[57px] rounded-full">
                <span className="mr-2.5 text-base text-secondary dark:text-accent font-normal">Aylık</span>
                <input
                  type="checkbox"
                  id="priceCheck"
                  checked={isAnnual}
                  onChange={(e) => setIsAnnual(e.target.checked)}
                  className="sr-only peer"
                  aria-label="Toggle between monthly and yearly pricing"
                />
                <span className="relative w-13 h-[28px] bg-secondary rounded-[34px] dark:bg-accent peer-checked:after:translate-x-full after:content-[''] after:absolute *: dark:after:bg-background-9 after:top-1/2 after:-translate-y-1/2 after:start-[2px] peer-checked:after:start-[2px] after:bg-accent d after:rounded-full after:h-6 after:w-6 after:transition-all" />
                <span className="ms-2.5 text-base text-secondary dark:text-accent font-normal">Yıllık</span>
              </label> */}
            </div>
          </RevealAnimation>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
            {/* Price Card 1 */}
            <RevealAnimation delay={0.3} instant>
              <div className="bg-background-3 dark:bg-background-5 flex-1 p-8 rounded-[20px] max-lg:w-full">
                <h3 className="mb-2 font-normal text-heading-5">Başlangıç</h3>
                <p className="mb-6 max-w-[250px]">Küçük işletmeler ve yeni girişimler için.</p>
                {isAnnual ? (
                  <div className="price-year mb-7">
                    <h4 className="text-heading-4 font-normal"> 
                      <span>Özel Teklif</span>
                    </h4>
                    {/* <p className="text-secondary dark:text-accent">Yıllık</p> */}
                  </div>
                ) : (
                  <div className="price-month mb-7">
                    <h4 className="text-heading-4 font-normal">
                     <span>Özel Teklif</span>
                    </h4>
                    {/* <p className="text-secondary dark:text-accent">Aylık</p> */}
                  </div>
                )}

                <Link
                  href="/contact-us"
                  className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent w-full block text-center mb-8 before:content-none first-letter:uppercase">
                  Teklif Al
                </Link>
                <ul className="relative list-none space-y-2.5">
                  <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-white dark:fill-black"
                      />
                    </svg>
                    <span className="text-secondary dark:text-accent font-normal text-tagline-1">Basit web sitesi</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-secondary/60 dark:fill-accent/60"
                      />
                    </svg>
                    <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                      Temel SEO optimizasyonu
                    </span>
                  </li>
                        <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-secondary/60 dark:fill-accent/60"
                      />
                    </svg>
                    <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                     E-posta desteği
                    </span>
                  </li>      <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-secondary/60 dark:fill-accent/60"
                      />
                    </svg>
                    <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                      Aylık raporlama
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-secondary/60 dark:fill-accent/60"
                      />
                    </svg>
                    <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                      5 sayfaya kadar
                    </span>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            {/* Price Card 2 */}
            <RevealAnimation delay={0.4} instant>
              <div className="p-2.5 rounded-[20px] flex-1 bg-[url('/images/home-page-2/price-bg.png')] bg-no-repeat bg-center bg-cover max-lg:w-full">
                <div className="bg-white dark:bg-background-8 p-8 rounded-[12px]">
                  <h3 className="mb-2.5 font-normal text-heading-5">Büyüme</h3>
                  <p className="mb-6 text-secondary/60 dark:text-accent/60 max-w-[250px]">
                    Büyümek isteyen markalar için
                  </p>
                  {isAnnual ? (
                    <div className="price-year mb-7">
                      <h4 className="text-heading-4 font-normal">
                        <span>Özel Teklif</span>
                      </h4>
                      {/* <p className="text-secondary dark:text-accent">Yıllık</p> */}
                    </div>
                  ) : (
                    <div className="price-month mb-7">
                      <h4 className="text-heading-4 font-normal">
                        <span>Özel Teklif</span>
                      </h4>
                      {/* <p className="text-secondary dark:text-accent">Aylık</p> */}
                    </div>
                  )}

                  <Link
                    href="/contact-us"
                    className="btn btn-md btn-secondary dark:btn-accent hover:btn-primary w-full block mb-8 before:content-none first-letter:uppercase">
                   Teklif Al
                  </Link>
                  <ul className="relative list-none space-y-2.5">
                    <li className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Özel geliştirme
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                        Reklam yönetimi
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">Detaylı raporlama</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-white dark:fill-black"
                        />
                      </svg>
                      <span className="text-secondary dark:text-accent font-normal text-tagline-1">7/24 destek</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60 dark:fill-accent/60"
                        />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                        Güçlü entegrasyonlar  
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0">
                        <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                        <path
                          d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                          fill=""
                          className="fill-secondary/60 dark:fill-accent/60"
                        />
                      </svg>
                      <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                        10 sayfaya kadar
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>
            {/* Price Card 3 */}
            <RevealAnimation delay={0.5} instant>
              <div className="bg-background-3 dark:bg-background-5 flex-1 p-8 rounded-[20px] max-lg:w-full">
                <h3 className="mb-2 font-normal text-heading-5">Kurumsal</h3>
                <p className="mb-6 max-w-[250px] text-secondary/60 dark:text-accent/60">
                  Büyük şirketler ve kapsamlı projeler
                </p>
                {isAnnual ? (
                  <div className="price-year mb-7">
                    <h4 className="text-heading-4 font-normal">
                      <span>Özel Teklf</span>
                    </h4>
                    {/* <p className="text-secondary dark:text-accent">Yıllık</p> */}
                  </div>
                ) : (
                  <div className="price-month mb-7">
                    <h4 className="text-heading-4 font-normal">
                      <span>Özel Teklif</span>
                    </h4>
                    {/* <p className="text-secondary dark:text-accent">Aylık</p> */}
                  </div>
                )}

                <Link
                  href="/contact-us"
                  className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent w-full block mb-8 before:content-none first-letter:uppercase">
                  Teklif Al
                </Link>
                <ul className="relative list-none space-y-2.5">
                  <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-white dark:fill-black"
                      />
                    </svg>
                    <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                     Tam entegre mimari
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-white dark:fill-black"
                      />
                    </svg>
                    <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                      Özel SLA
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-secondary/60 dark:fill-accent/60"
                      />
                    </svg>
                    <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                     Dedike ekip
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-secondary/60 dark:fill-accent/60"
                      />
                    </svg>
                    <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                    Sınırsız sayfa
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <rect width={20} height={20} rx={10} fill="" className="fill-white dark:fill-background-9" />
                      <path
                        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                        fill=""
                        className="fill-secondary/60 dark:fill-accent/60"
                      />
                    </svg>
                    <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                     Özel çözümler
                    </span>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
