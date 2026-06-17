'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-green-White.svg';
import logo from '@public/images/shared/logo-green.svg';
import Image from 'next/image';
import Link from 'next/link'; 

import { useEffect, useRef } from 'react';
import AboutUsMenu from './mobile-menu/AboutUsMenu';
import HomeMenu from './mobile-menu/HomeMenu';
import PricingMenu from './mobile-menu/PricingMenu';
import ServicesMenu from './mobile-menu/ServicesMenu';


const MobileMenu = () => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  const sidebarRef = useRef<HTMLElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, closeMenu]);
  return (
    <aside
      ref={sidebarRef}
      className={cn(
        'dark:bg-background-7 scroll-bar fixed top-0 right-0 z-[999] h-screen w-full bg-white transition-transform duration-300 ease-in-out sm:w-1/2 xl:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full',
        
      )}>
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Ana Sayfa</span>
            <figure className="max-w-[80px]">
              <Image src={logo} alt="Codyol" className="block w-full dark:hidden" />
              <Image src={logoDark} alt="Codyol" className="hidden w-full dark:block" />
            </figure>
          </Link>
          {/* close menu btn */}
          <button
            onClick={closeMenu}
            className="nav-hamburger-close bg-background-4 dark:bg-background-9 hover:bg-background-5 dark:hover:bg-background-8 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-all duration-200 hover:scale-105 group"
            aria-label="Mobil menüyü kapat">
            <span className="sr-only">Menüyü Kapat</span>
            <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 rotate-45 transition-all duration-200 group-hover:bg-stroke-1"></span>
            <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 -rotate-45 transition-all duration-200 group-hover:bg-stroke-1"></span>
          </button>
        </div>
        <div className="scroll-bar h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
          <ul>
            <li>
              <Link
                href="/"
                className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
                Hizmetler
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
                Fiyatlandırma
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
                Projeler
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
                İletişim
              </Link>
            </li>
            {/* <HomeMenu />
            <AboutUsMenu />
            <ServicesMenu /> */}
            {/* <PricingMenu /> */}
            {/* <LoginMenu />
            <SignUpMenu /> */}
          </ul>
  {/* CTA */}

        </div>
      </div>
    </aside> 
  );
};

export default MobileMenu;
 