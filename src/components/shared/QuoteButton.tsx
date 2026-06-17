'use client';

import LinkButton from '@/components/ui/button/LinkButton';
import { useModalContext } from '@/context/ModalContext';
import { cn } from '@/utils/cn';

interface QuoteButtonProps {
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}

const QuoteButton = ({ className, children = 'Teklif Al', ariaLabel }: QuoteButtonProps) => {
  const { quoteModal } = useModalContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    quoteModal.openModal();
  };

  return (
    <LinkButton
      href="/contact"
      onClick={handleClick}
      className={cn(className)}
      aria-label={ariaLabel ?? 'Teklif Al'}>
      {children}
    </LinkButton>
  );
};

export default QuoteButton;

