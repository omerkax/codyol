import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const ServicesMenu = () => {
  return (
    <MobileMenuItem id="services" title="Hizmetler" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/services"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Hizmetlerimiz
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;
