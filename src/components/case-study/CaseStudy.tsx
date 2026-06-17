import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudy = () => {
  return ( 
    <section className="pb-[40px] lg:pb-[100px]">

      <div className="main-container">
        <div className="space-y-[70px]">
          {/* <div className="max-w-[900px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 font-normal">Önde gelen ekipler Codyol ile nasıl büyüyor?</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Hızlı hareket eden girişimlerden kurumsal şirketlere kadar ekipler, Codyol ile süreçlerini sadeleştiriyor,
                görünürlüğü artırıyor ve büyümeyi hızlandırıyor. Gerçek etki yaratan projelerimizi inceleyin.
              </p>
            </RevealAnimation>
          </div> */}
          <div className="space-y-4">
            <RevealAnimation delay={0.4}>
              <h2 className="text-heading-4">Öne çıkan proje</h2>
            </RevealAnimation>
            <ul className="max-w-[435px] space-y-2">
              <RevealAnimation delay={0.5}>
                <li className="text-lg font-medium leading-[150%] text-secondary dark:text-accent">
                  Müşteri:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    VelocityFinance
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="text-lg font-medium leading-[150%] text-secondary dark:text-accent">
                  Sektör:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">Fintech</span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="text-lg font-medium leading-[150%] text-secondary dark:text-accent">
                  Kullanım senaryosu:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Finansal raporlama otomasyonu &amp; gerçek zamanlı analitik
                  </span>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          <RevealAnimation delay={0.8}>
            <figure className="max-w-[1288px] h-[380px] rounded-4xl overflow-hidden">
              <Image
                src="/images/case-study/case-study-img-01.png"
                alt="VelocityFinance case study dashboard showing financial reporting interface"
                fill
                className="object-cover"
              />
            </figure>
          </RevealAnimation>

          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h3 className="text-heading-4">Zorluk</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[705px]">
                VelocityFinance, tablolar ve kopuk araçlarla finansal operasyonlarını manuel yönetiyordu. Raporlama
                süreci yavaştı, hataya açıktı ve ölçeklenmesi zordu.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex items-center flex-col md:flex-row gap-16 justify-between">
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">Çözüm</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>Codyol şu adımları uyguladı:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Özel finansal KPI’larla gerçek zamanlı dashboardlar kuruldu
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Yönetim ve yatırımcılar için aylık raporlama otomatikleştirildi
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Muhasebe araçları ve CRM tek platformda entegre edildi
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">Sonuçlar</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>Codyol’un sağladığı çıktı:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Raporlama süresinde %82 azalma
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Tüm finansal tablolarda %95 doğruluk artışı
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:content-[''] before:size-2 before:bg-secondary dark:before:bg-accent before:rounded-full before:inline-block before:mr-3">
                      Stratejik değerlendirmelerde 4 kat daha hızlı karar alma
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
