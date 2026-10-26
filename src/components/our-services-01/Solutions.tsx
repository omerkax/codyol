import netSalesDark from '@public/images/services/metrics-dark.png';
import netSales from '@public/images/services/metrics.png';
import revenueDark from '@public/images/services/dashboard2-dark.png';
import revenue from '@public/images/services/dashboard2.png';
import userActivityDark from '@public/images/services/dashboard-dark.png';
import userActivity from '@public/images/services/dashboard-light.png'; 
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Solutions = () => {
  return (
    <section>
      <div className="max-w-[1400px] xl:py-[200px] py-24 px-5 md:px-12 mx-5 sm:mx-auto bg-background-3 dark:bg-background-5 rounded-[20px] overflow-hidden">
        <div className="grid grid-cols-12 xl:gap-[100px] lg:gap-20 gap-y-24 items-end">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-5 lg:mt-[114px] lg:text-left sm:text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow-v2">Nasıl çalışıyoruz?</span>
              </RevealAnimation>
              <div className="space-y-3 max-w-[595px] lg:mx-0 mx-auto">
                <RevealAnimation delay={0.2}>
                  <h2>Ölçüyor, takip ediyor, veriyle büyütüyoruz.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>
                    Codyol olarak dijital projeleri sadece geliştirmiyor,
                    süreçleri ölçüyor, performansı takip ediyor ve
                    veriye dayalı kararlarla sürdürülebilir büyüme sağlıyoruz.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <div className="mt-8 mb-14">
              <ul className="flex items-start sm:items-center sm:flex-row flex-col gap-8 lg:justify-start justify-start sm:justify-center">
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={10} viewBox="0 0 15 10" fill="none">
                        <path
                          d="M13.1875 1.0625L5.3125 8.93715L1.375 5"
                          className="stroke-secondary dark:stroke-accent"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-secondary dark:text-accent/60 leading-snug">
                      <span className="font-semibold block">
                        Gerçek zamanlı veri takibi
                      </span>
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={10} viewBox="0 0 15 10" fill="none">
                        <path
                          d="M13.1875 1.0625L5.3125 8.93715L1.375 5"
                          className="stroke-secondary dark:stroke-accent"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-secondary dark:text-accent/60 leading-snug">
                      <span className="font-semibold block">
                        Yapay zeka destekli otomasyonlar
                      </span>
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={15} height={10} viewBox="0 0 15 10" fill="none">
                        <path
                          d="M13.1875 1.0625L5.3125 8.93715L1.375 5"
                          className="stroke-secondary dark:stroke-accent"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-secondary dark:text-accent/60 leading-snug">
                      <span className="font-semibold block">
                        Hedef odaklı dijital çözümler
                      </span>
                    </p>
                  </li>
                </RevealAnimation>
              </ul> 
            </div>
            <RevealAnimation delay={0.7}>
              <div className="text-center lg:text-left">
                <LinkButton
                  href="/contact"
                  className="btn btn-xl dark:btn-accent hover:btn-primary btn-secondary  sm:w-auto">
                  Bizimle iletişime geç
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="max-w-[595px] lg:mx-0 mx-auto w-full relative z-20 xl:mt-0 mt-40">
              <RevealAnimation delay={0.3}>
                <figure className="xl:max-w-[408px] max-w-[340px] w-full rounded-[20px] overflow-hidden xl:ml-9 relative z-10">
                  <Image src={revenue} className="size-full object-cover inline-block dark:hidden" alt="solutions" />
                  <Image
                    src={revenueDark}
                    className="size-full object-cover hidden dark:inline-block"
                    alt="solutions"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} useSpring={true} duration={1.9} direction="right">
                <figure className="absolute xl:-top-28 -top-20 -z-10 xl:right-0 right-6 xl:max-w-[227px] max-w-[190px] w-full overflow-hidden rounded-2xl">
                  <Image src={netSales} className="size-full object-cover inline-block dark:hidden" alt="solutions" />
                  <Image
                    src={netSalesDark}
                    className="size-full object-cover hidden dark:inline-block"
                    alt="solutions"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.2} direction="left">
                <figure className="absolute xl:-top-52 -top-44 -z-10 left-0 xl:max-w-[350px] max-w-[280px] w-full overflow-hidden rounded-2xl drop-shadow-11">
                  <Image
                    src={userActivity}
                    className="size-full object-cover inline-block dark:hidden"
                    alt="solutions"
                  />
                  <Image
                    src={userActivityDark}
                    className="size-full object-cover hidden dark:inline-block"
                    alt="solutions"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
