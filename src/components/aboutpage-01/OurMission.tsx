import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
    
const OurMission = () => {
  return (
    <section className="bg-gray-50 dark:bg-background-5 relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container ">
        <div className="flex items-stretch flex-wrap lg:flex-nowrap gap-8 lg:gap-4 xl:gap-8">

          <div className="w-full lg:w-1/2 flex flex-col h-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5 w-fit ">
                Misyonumuz</span> 
            </RevealAnimation>

            <div className="md:max-w-[540px] flex flex-col h-full space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>
                  Ekiplerin daha akıllı, daha güvenli
                  yazılımlarla çalışmasını sağlamak.

                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="mt-auto">
                  Şirketlerin karmaşık iş akışlarını yönetilebilir
                  sistemlere dönüştürmelerine yardımcı oluyoruz —
                  bir dashboard, bir otomasyon, bir içgörü adım adım.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col h-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5  w-fit">
                Vizyonumuz</span>
            </RevealAnimation>

            <div className="md:max-w-[540px] flex flex-col h-full space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>
                  Yapay zeka çağında
                  güvenilir dijital çözümler üretmek.

                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="mt-auto">
                  Codyol olarak, geliştirdiğimiz ölçeklenebilir yazılım
                  çözümleriyle işletmelerin dijital dönüşümüne
                  uzun vadeli değer katmayı hedefliyoruz.

                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
