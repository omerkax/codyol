import bannerImage from '@public/images/career/banner-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CareerContent = () => {
  return (
    <section className="pb-[100px] xl:pb-[100px] pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.3}>
            <h2>
              Codyol&apos;un geleceğini birlikte inşa ediyoruz— <br className="hidden md:block" />
              bizimle birlikte geliştirin.
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={bannerImage} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="space-y-8 max-w-[840px] mx-auto">
            <h4>Ortak ilgi alanlarıyla beslenen tutkulu bir topluluğun parçası olun.</h4>
            <p>
              Codyol&apos;da, yapay zeka ve SaaS odaklı projelerde çalışan küçük ama hızlı büyüyen bir ekibiz. Hem ofis hem uzaktan çalışma modellerine açığız. 
              Gerçek projeler, gerçek sorumluluk ve öğrenme kültürü ile çalışıyoruz.
            </p>
            <p>
              Modern teknoloji stack&apos;i kullanarak, ekiplerinizi yapay zeka, SaaS ve dijital dönüşüm konularında ileri seviyeye taşıyan eğitimler veriyoruz. 
              Üniversite/öğrenci dostu yaklaşımımız ile genç yetenekleri destekliyoruz.
            </p>
            <p>
              Esnek çalışma saatleri ve uzaktan çalışma imkânları sunuyoruz. Gerçek projelerde çalışarak deneyim kazanacak, 
              modern teknolojilerle tanışacak ve sürekli öğrenme kültürü içinde büyüyeceksiniz.
            </p>
            <p>
              Codyol&apos;da çalışmanın avantajları:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Gerçek projeler, gerçek sorumluluk</li>
              <li>Esnek çalışma ve uzaktan çalışma imkânı</li>
              <li>Öğrenme kültürü, eğitim desteği</li>
              <li>Modern teknoloji stack&apos;i</li>
              <li>Üniversite/öğrenci dostu yaklaşım</li>
              <li>İş ortaklığı odağı (sadece &quot;iş yapmak&quot; değil, birlikte büyümek)</li>
            </ul>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
