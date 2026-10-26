import RevealAnimation from '@/components/animation/RevealAnimation';

interface SectionHeaderProps {
  title: string;
  description?: string;
  maxTitleWidth?: string;
  maxDescWidth?: string;
  as?: 'h1' | 'h2';
}
   
// Sayfanın ana başlığı H1 olarak işaretlenirken görsel boyutu H2 ile aynı kalsın
const H1_AS_H2_CLASSES = 'text-heading-5 sm:text-heading-4 md:text-heading-3 xl:text-heading-2 font-normal';

const SectionHeader = ({
  title,
  description,
  maxTitleWidth = 'max-w-[878px]',
  maxDescWidth = 'max-w-[700px]',
  as: Heading = 'h2',
}: SectionHeaderProps) => {
  return (
    <div className="text-center space-y-5 mb-[70px] mt-[50px] md:mt-[20px]">
      <div className="space-y-3">
        <RevealAnimation delay={0.3}>
          <Heading className={`${maxTitleWidth} mx-auto ${Heading === 'h1' ? H1_AS_H2_CLASSES : ''}`}>
            {title}
          </Heading>
        </RevealAnimation>

        {description && (
          <RevealAnimation delay={0.4}>
            <p className={`${maxDescWidth} mx-auto`}>
              {description}
            </p>
          </RevealAnimation>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
