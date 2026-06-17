import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const BlogMenu = () => {
  return (
    <MobileMenuItem id="blog" title="Blog" hasSubmenu={false}>
      <ul>
        <li>
          <Link
            href="/blog"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Blog
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

export default BlogMenu;
