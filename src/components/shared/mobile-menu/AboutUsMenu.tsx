import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const AboutUsMenu = () => {
  return (
    <MobileMenuItem id="about" title="Hakkımızda" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/about"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
          Ana Sayfa
            Hakkımızda
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};
AboutUsMenu.displayName = 'AboutUsMenu';  
export default AboutUsMenu;

