import { Inter_Tight } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-interTight',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export { interTight };
