import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import SectionHeader from '@/components/shared/SectionHeader';
  
const Services = () => {
const servicesData = getMarkDownData('src/data/services')
  .filter(service => service.showOnHome)
 .filter(service => Number(service.order) <= 6) 
.sort((a, b) => Number(a.order) - Number(b.order));

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] pt-[100px]"> 
      <div className="main-container">
        {/* <div className="text-center space-y-5 mb-[70px] mt-[50px] md:mt-[20px]"> */}
          {/* <RevealAnimation delay={0.2}> 
            <span className="badge badge-cyan md:text-xl mb-5">Hizmetlerimiz</span> 
          </RevealAnimation> */}
          {/* <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h1 className="max-w-[878px] mx-auto text-heading-5 sm:text-heading-4 md:text-heading-3 xl:text-heading-2 font-normal">Dijital projelerinizi uçtan uca tasarlıyor, geliştiriyor ve büyütüyoruz.</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto">
                SaaS ürünlerinden özel yazılıma, yapay zeka entegrasyonlarından dijital pazarlamaya kadar tüm süreçleri tek çatı altında yönetiyoruz.
              </p>
            </RevealAnimation>
          </div>
        </div> */}
        <SectionHeader
  as="h1"
  title="Dijital projelerinizi uçtan uca tasarlıyor, geliştiriyor ve büyütüyoruz."
  description="SaaS ürünlerinden özel yazılıma, yapay zeka entegrasyonlarından dijital pazarlamaya kadar tüm süreçleri tek çatı altında yönetiyoruz."
/>

        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
          {servicesData.map((service, index) => (
            <RevealAnimation key={service.slug} delay={0.5 + index * 0.1}>

              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out">
                  <div className="flex items-center justify-center">
                    <span className={`${service.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5 line-clamp-1">{service.title}</h3>
                    <p className="max-w-[361px] mx-auto line-clamp-3">{service.description}</p>
                  </div>
                  <div>
                    {/* <LinkButton
                      href={`/our-services/${service.slug}`}
                      className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      Detayları Gör
                    </LinkButton> */}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
