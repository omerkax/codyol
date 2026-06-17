import type { Metadata } from 'next';

export const DEFAULT_URL = 'https://codyol.com/';
export const DEFAULT_TITLE = 'Codyol – Yapay Zeka Destekli Dijital Çözümler ve SaaS Stüdyosu';
export const DEFAULT_DESCRIPTION =
  'Codyol, SaaS ürünleri, özel yazılım geliştirme, yapay zeka entegrasyonları, otomasyonlar ve dijital pazarlama hizmetleri sunan teknoloji stüdyosudur.';
export const DEFAULT_IMAGE_URL = 'https://codyol.com/og-image.jpg';

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,

  openGraph: {
    type: 'website', 
    siteName: 'Codyol',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_IMAGE_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE_URL],
  },
};

const generateMetadata = (title?: string, description?: string, canonicaUrl?: string, imageUrl?: string): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: canonicaUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ?? defaultMetadata.openGraph?.title,
      description: description ?? defaultMetadata.openGraph?.description,
      url: canonicaUrl ?? defaultMetadata.openGraph?.url,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ?? defaultMetadata.twitter?.title,
      description: description ?? defaultMetadata.twitter?.description,
      images: imageUrl ? [imageUrl] : defaultMetadata.twitter?.images,
    },
  };
};

export { defaultMetadata, generateMetadata };
