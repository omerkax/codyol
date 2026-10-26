import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Ana sayfa: öne çıkan projeler (hero'daki üç proje dışındakiler)
const SHOWCASE_SLUGS = ['KartepeGrup', 'EbrarOtel', 'AlestaGrup'];
const projects: ICaseStudy[] = (getMarkDownData('src/data/case-study') as ICaseStudy[])
  .filter((p) => SHOWCASE_SLUGS.includes(p.slug))
  .sort((a, b) => SHOWCASE_SLUGS.indexOf(a.slug) - SHOWCASE_SLUGS.indexOf(b.slug));

const ProjectsShowcase = () => {
  return (
    <section className="dark:bg-background-8 bg-white py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:mb-14 md:flex-row md:items-end md:text-left">
          <div className="max-w-[620px] space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Projelerimiz</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>
                Markalar için <span className="text-primary-500">hayata geçirdiklerimiz</span>
              </h2>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div>
              <LinkButton
                href="/projects"
                className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-lg">
                Tüm projeler
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <RevealAnimation key={project.slug} delay={0.2 + index * 0.1}>
              <article className="group">
                <figure className="overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#fde7ef_0%,#f6f3f7_55%,#fbe2ec_100%)] px-5 pt-6 dark:bg-[linear-gradient(135deg,#2a1520_0%,#14141a_60%,#2a1520_100%)]">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} web sitesi`}
                    width={1552}
                    height={792}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-auto w-full rounded-lg shadow-[0_20px_40px_-18px_rgba(20,10,30,0.30)] translate-y-1 transition-transform duration-500 group-hover:-translate-y-1"
                  />
                </figure>
                <h3 className="text-heading-6 mt-5 font-normal">{project.title}</h3>
                <p className="text-tagline-1 line-clamp-2">{project.description}</p>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
