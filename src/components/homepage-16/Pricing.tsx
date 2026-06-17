'use client';

import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import QuoteButton from '../shared/QuoteButton';

const pricingPlans = [
  {
    name: 'Başlangıç',
    description: 'Küçük işletmeler ve yeni girişimler için',
    monthlyPrice: 25000,
    yearlyPrice: 25000,
    features: ['Basit web sitesi', 'Temel SEO optimizasyonu', 'E-posta desteği', 'Aylık raporlama', '5 sayfaya kadar'],
    buttonVariant: 'btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent',
    isSpecial: false,
  },
  {
    name: 'Büyüme',
    description: 'Büyümek isteyen markalar için',
    monthlyPrice: 50000,
    yearlyPrice: 50000,
    features: [
      'Özel geliştirme',
      'Reklam yönetimi',
      'Detaylı raporlama',
      '7/24 destek',
      'Güçlü entegrasyonlar',
      '10 sayfaya kadar',
    ],
    buttonVariant: 'btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-accent',
    isSpecial: true,
  },
  {
    name: 'Kurumsal',
    description: 'Büyük şirketler ve kapsamlı projeler',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ['Tam entegre mimari', 'Özel SLA', 'Dedike ekip', 'Sınırsız sayfa', 'Özel çözümler'],
    buttonVariant: 'btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent',
    isSpecial: false,
  },
];

const Pricing = () => {
  const [isMonthly] = useState(true);
  const CheckIcon = () => (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={20} height={20} rx={10} fill="" className="fill-secondary/40 dark:fill-accent/40" />
      <path
        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
        fill=""
        className="fill-white dark:fill-accent"
      />
    </svg>
  );

  const ProCheckIcon = () => (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
      <path
        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
        fill=""
        className="fill-white dark:fill-black"
      />
    </svg>
  );

  return (
    <section className="relative pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px] overflow-hidden">
      <div className="main-container flex flex-col gap-[70px]">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-5">Fiyatlandırma planları</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mb-8">
              Sizinle birlikte <span className="text-primary-500">büyüyen esnek planlar</span>
            </h2>
          </RevealAnimation>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
            {pricingPlans.map((plan, index) => (
              <RevealAnimation key={index} delay={0.4 + index * 0.1}>
                {plan.isSpecial ? (
                  <div className="p-2.5 rounded-[20px] flex flex-col h-full bg-[url('/images/home-page-16/price-bg.png')] bg-no-repeat bg-center bg-cover max-lg:w-full">
                    <div className="bg-white dark:bg-black p-8 rounded-[20px] flex flex-col h-full gap-6">
                      <div className="mb-6">
                        <h3 className="mb-2.5 font-normal text-heading-5">{plan.name}</h3>
                        <p className="mb-6 text-secondary dark:text-accent max-w-[250px]">{plan.description}</p>
                        <ul className="relative list-none space-y-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2.5">
                              <ProCheckIcon />
                              <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto border-t border-stroke-2 dark:border-stroke-6 pt-6">
                        {plan.monthlyPrice === 0 ? (
                          <div className="mb-7">
                            <h4 className="text-heading-4 font-normal">
                              Özel Teklif
                            </h4>
                          </div>
                        ) : (
                          <div className="mb-7">
                            <h4 className="text-heading-4 font-normal">
                              <span>{plan.monthlyPrice.toLocaleString('tr-TR')}</span>
                              <span className="text-tagline-2"> TL/ay</span>
                            </h4>
                          </div>
                        )}
                        <QuoteButton
                          className={`btn btn-md ${plan.buttonVariant} w-full block text-center before:content-none first-letter:uppercase`}>
                          {plan.monthlyPrice === 0 ? 'Özel Teklif Al' : 'Teklif Al'}
                        </QuoteButton>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-background-2 dark:bg-background-5 flex flex-col h-full gap-6 p-8 rounded-[20px] max-lg:w-full">
                    <div className="mb-6">
                      <h3 className="mb-2 font-normal text-heading-5">{plan.name}</h3>
                      <p className="mb-6 max-w-[250px]">{plan.description}</p>
                      <ul className="relative list-none space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2.5">
                            <CheckIcon />
                            <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto border-t border-stroke-2 dark:border-stroke-6 pt-6">
                      {plan.monthlyPrice === 0 ? (
                        <div className="mb-6">
                          <h4 className="text-heading-4 font-normal">
                            Özel Teklif
                          </h4>
                        </div>
                      ) : (
                        <div className="mb-6">
                          <h4 className="text-heading-4 font-normal">
                            <span>{plan.monthlyPrice.toLocaleString('tr-TR')}</span>
                            <span className="text-tagline-2"> TL/ay</span>
                          </h4>
                        </div>
                      )}
                      <QuoteButton
                        className={`btn btn-md ${plan.buttonVariant} w-full block text-center before:content-none first-letter:uppercase`}>
                        {plan.monthlyPrice === 0 ? 'Özel Teklif Al' : 'Teklif Al'}
                      </QuoteButton>
                    </div>
                  </div>
                )}
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
