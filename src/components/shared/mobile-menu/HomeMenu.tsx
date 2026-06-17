import { homeMegaMenuColumns } from '@/data/header';
import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const HomeMenu = () => {
  // Flatten all homepage items from all columns
  const homepages = homeMegaMenuColumns.flatMap((column) => column.items);

  // If no homepages, just show a simple link to home
  if (homepages.length === 0) {
    return (
      <li>
        <Link
          href="/"
          className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
          Ana Sayfa
        </Link>
      </li>
    );
  }

  return (
    <MobileMenuItem id="home" title="Ana Sayfa" hasSubmenu={true}>
      <ul>
        {homepages.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </MobileMenuItem>
  );
};

HomeMenu.displayName = 'HomeMenu';

export default HomeMenu;
