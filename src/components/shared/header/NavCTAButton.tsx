'use client';

import LinkButton from '@/components/ui/button/LinkButton';
import { useModalContext } from '@/context/ModalContext';
import { cn } from '@/utils/cn';
import React from 'react';

interface NavCTAButtonProps {
  btnClassName?: string;
  href?: string;
  label: string;
  className?: string;
  useQuoteModal?: boolean;
}

const NavCTAButton = ({ btnClassName, href = '/', label, className, useQuoteModal = false }: NavCTAButtonProps) => {
  const modalCtx = useModalContext();
  const quoteModal = modalCtx?.quoteModal;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (useQuoteModal && quoteModal) {
      e.preventDefault();
      quoteModal.openModal();
    }
  };

  return (
    <div className={cn('hidden items-center justify-center xl:flex', className)}>
      <LinkButton href={href} className={cn('btn btn-md', btnClassName)} onClick={handleClick}>
        {label}
      </LinkButton>
    </div>
  );
};

NavCTAButton.displayName = 'NavCTAButton';
export default NavCTAButton;
