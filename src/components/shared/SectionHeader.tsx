import RevealAnimation from '@/components/animation/RevealAnimation';

interface SectionHeaderProps {
  title: string;
  description?: string;
  maxTitleWidth?: string;
  maxDescWidth?: string;
}
   
const SectionHeader = ({
  title,
  description,
  maxTitleWidth = 'max-w-[878px]',
  maxDescWidth = 'max-w-[700px]',
}: SectionHeaderProps) => {
  return (
    <div className="text-center space-y-5 mb-[70px] mt-[50px] md:mt-[20px]">
      <div className="space-y-3">
        <RevealAnimation delay={0.3}>
          <h2 className={`${maxTitleWidth} mx-auto`}>
            {title}
          </h2>
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
