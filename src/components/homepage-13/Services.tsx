import { IService } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  // const servicesData: IService[] = getMarkDownData('src/data/services').slice(7, 12);
  // const servicesData: IService[] =
  // getMarkDownData('src/data/services').slice(0, 5);
 const servicesData = getMarkDownData('src/data/services')
  .filter(service => service.featured)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  .slice(0, 5);



  return (
    <section className="bg-background-2 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
         <div className="text-center space-y-5 max-w-[650px] mx-auto mb-14">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Hizmetlerimiz</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>
              Dijital ürün ve yazılım ihtiyaçlarınız için <span className="text-primary-500">kapsamlı çözümler</span>
            </h2>
          </RevealAnimation>
        </div>
        <div className="mb-14 grid grid-cols-12 gap-y-8 md:gap-x-8">
          {servicesData.map((item, index) => (
            <RevealAnimation key={item.slug} delay={0.5 + index * 0.1}>
              <div
                className={cn(
                  'col-span-12 sm:col-span-6  px-6 py-8 rounded-[20px] bg-white dark:bg-background-6 flex flex-col items-start space-y-6',
                  index >= 3 ? 'lg:col-span-6' : 'lg:col-span-4',
                )}>
                <span className={cn('text-[52px] text-secondary dark:text-accent', item.icon)}> </span>
                <div>
                  <h5 className="mb-2 max-md:text-heading-6">{item.title}</h5>
                  <p className="">{item.description}</p>
                </div>
                {/* <LinkButton
                  href={`/our-services/${item.slug}`}
                  className="btn btn-white hover:btn-secondary btn-md inline-block dark:btn-transparent dark:hover:btn-accent w-[90%] md:w-auto mx-auto md:mx-0">
                  Read more
                </LinkButton> */}
              </div>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={1}> 
          <div className="flex items-center justify-center">
            <LinkButton
              href="/services"
              className="btn btn-secondary dark:btn-accent hover:btn-primary btn-lg md:btn-xl w-[90%] md:w-auto mx-auto md:mx-0">
              Hizmetleri İncele
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
