{
  /* ===========================
  integration process section
  =========================== */
}
import RevealAnimation from '../animation/RevealAnimation';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const Process = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 'connect-platform',
      title: 'Ürün & İş Odağı',
      description: 'Projeleri yalnızca geliştirmiyor, ürünleştiriyor ve ticari değere dönüştürüyoruz.',
      icon: 'ns-shape-36',
    },
    {
      id: 'design-automate',
      title: 'Uzun Vadeli İş Ortaklığı',
      description: 'Kısa vadeli teslimler değil, sürdürülebilir ve birlikte büyüyen projeler hedefliyoruz.',
      icon: 'ns-shape-60',
    },
    {
      id: 'optimize-scale',
      title: 'Ölçeklenebilir ve Ölçülebilir',
      description: 'Veriye dayalı, büyümeye hazır ve gerçek sonuçlar üreten çözümler geliştiriyoruz.',
      icon: 'ns-shape-45',
    }, 
  ];

  return (
    <section className="relative pb-32 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="text-center space-y-10 mb-[50px] mt-[50px] md:mt-[20px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Neden Codyol?</span> 
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Şeffaflık, ürün odağı ve sürdürülebilir sonuçlar üzerine kurulu bir çalışma modeli.</h2>
          </RevealAnimation>
        </div>
        <div className="grid gap-8 grid-cols-12 justify-center">
          {processSteps.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.3 + index * 0.1}>
              <article className="space-y-8 p-8 col-span-12 md:col-span-6 rounded-[20px] shadow-7 lg:col-span-4 dark:bg-background-5">
                <div className="flex items-center justify-between">
                  <span className={`${step.icon} text-[52px] text-secondary dark:text-accent`} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-heading-5">{step.title}</h3>
                  <p className="max-w-[344px]">{step.description}</p>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
