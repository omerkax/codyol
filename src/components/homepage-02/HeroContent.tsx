import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import QuoteButton from '../shared/QuoteButton';

const HeroContent = () => {
  return (
    <div className="main-container z-10 flex flex-col items-center text-center">
      <RevealAnimation delay={0.2}>
        <h1 className="max-[426px]:text-heading-5 max-sm:text-heading-4 mb-4 font-medium max-[426px]:mb-2.5 max-sm:max-w-[450px]">
          Yapay Zeka Destekli
          <br />
          <span className="text-primary-500">Yazılım </span>
          Çözümleri
        </h1>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <p className="mb-10 max-w-[625px] max-sm:max-w-[420px] sm:mb-14">
          Codyol; yazılım geliştirme, yapay zeka entegrasyonları ve otomasyon çözümleriyle iş ihtiyaçlarına özel dijital ürünler geliştirir. Fikirden yayına, üründen ölçeğe kadar süreci birlikte yürütürüz.
        </p>
      </RevealAnimation>
      <ul className="mb-7 flex flex-col gap-4 max-md:w-full md:mb-14 md:flex-row">
        <RevealAnimation delay={0.3} direction="left" offset={50}>
          <li>
            <QuoteButton
              className="btn btn-xl btn-secondary dark:btn-accent hover:btn-white w-[90%] md:w-auto dark:hover:btn-white-dark"
              ariaLabel="Teklif Al">
              Teklif Al
            </QuoteButton>
          </li>
        </RevealAnimation>
        <RevealAnimation delay={0.5} direction="left" offset={50}>
          <li>
            <LinkButton
              href="/services"
              className="btn btn-white max-md:btn-md btn-xl hover:btn-secondary dark:btn-transparent dark:hover:btn-accent w-full max-md:mx-auto md:w-auto">
              Hizmetleri İncele
            </LinkButton>
          </li>
        </RevealAnimation>
      </ul>
    </div>
  );
};

export default HeroContent;
