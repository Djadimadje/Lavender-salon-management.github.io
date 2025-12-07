import { generateMetadata } from './metadata';

interface GenerateMetaParams {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path?: string;
}

export const generateMeta = ({
  title,
  description,
  keywords,
  image,
  path = '',
}: GenerateMetaParams) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const url = `${baseUrl}${path}`;

  return generateMetadata({
    title,
    description,
    keywords,
    image,
    url,
  });
};

// Predefined metadata for common pages
export const homePageMeta = generateMeta({
  title: 'Welcome to Lavender',
  description: 'Experience premium beauty services at Lavender Salon. Book your appointment with our expert stylists today.',
  keywords: ['hair salon', 'beauty salon', 'spa', 'haircut', 'styling'],
  path: '/',
});

export const servicesPageMeta = generateMeta({
  title: 'Our Services',
  description: 'Discover our comprehensive range of professional beauty and hair services.',
  keywords: ['hair services', 'beauty treatments', 'salon services'],
  path: '/services',
});

export const bookingPageMeta = generateMeta({
  title: 'Book an Appointment',
  description: 'Schedule your appointment with Lavender Salon in just a few simple steps.',
  keywords: ['book appointment', 'salon booking', 'schedule service'],
  path: '/booking',
});
