import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export const generateMetadata = ({
  title,
  description,
  keywords = [],
  image = '/logo.svg',
  url,
}: PageMetadata): Metadata => {
  const siteName = 'Lavender Salon';
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, 'salon', 'beauty', 'hair', 'spa', 'lavender'].join(', '),
    openGraph: {
      title: fullTitle,
      description,
      images: [image],
      url,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
};
