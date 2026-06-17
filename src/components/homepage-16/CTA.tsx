import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return ( 
    <section className="bg-gray-50 dark:bg-background-5 pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="text-center max-w-[649px] mx-auto"> 
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-5">Başlayın</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mb-3">
              Harika bir şey
              <span className="text-primary-500"> inşa etmeye hazır mısınız?</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mb-6">Fikrinizi kullanıcıların vazgeçemeyeceği bir ürüne dönüştürelim.</p>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="md:inline-block text-center">
              <LinkButton
                href="/contact"
                className="btn btn-secondary dark:btn-accent hover:btn-primary btn-lg md:btn-xl w-[90%] md:w-auto mx-auto md:mx-0">
                Ücretsiz Danışmanlık Alın
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
