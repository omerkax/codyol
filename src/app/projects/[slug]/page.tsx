import CaseStudyDetails from '@/components/case-study/CaseStudyDetails';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
// import { generateMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const caseStudies = getMarkDownData('src/data/case-study');
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const slug = (await params).slug;
//   const caseStudies = getMarkDownData('src/data/case-study');
//   const project = caseStudies.find((p) => p.slug === slug);

//   return generateMetadata(
//     project?.title ? `${project.title} - Codyol` : 'Proje Detayı - Codyol',
//     project?.description || 'Codyol proje detay sayfası',
//     `https://codyol.com/projects/${slug}`
//   );
// }

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetailsPage = async ({ params }: ProjectDetailsPageProps) => {
  const slug = (await params).slug;

  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Proje Detayı"
          heading="Proje Detayı"
          // link="/projects"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <CaseStudyDetails slug={slug} />

        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Başlayın"
          ctaHeading="Benzer bir proje için bizimle iletişime geçin"
          description="Projeniz için ücretsiz danışmanlık alın ve fikirlerinizi hayata geçirelim."
          ctaBtnText="Teklif Al"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterOne />
    </>
  );
};

export default ProjectDetailsPage;

