import { Service } from '../types/booking';

export const mockServices: Service[] = [
  {
    id: 1,
    name: 'Haircut',
    description: 'Professional haircut and styling tailored to your preference',
    price: 45,
    duration: 60,
    image: '/services/haircut.jpg',
    category: 'Hair',
  },
  {
    id: 2,
    name: 'Hair Coloring',
    description: 'Full or partial hair coloring with premium products',
    price: 120,
    duration: 120,
    image: '/services/hair-coloring.jpg',
    category: 'Hair',
  },
  {
    id: 3,
    name: 'Braids',
    description: 'Beautiful braiding styles from classic to modern',
    price: 80,
    duration: 90,
    image: '/services/braids.jpg',
    category: 'Hair',
  },
  {
    id: 4,
    name: 'Hair Extensions',
    description: 'High-quality hair extensions for length and volume',
    price: 200,
    duration: 150,
    image: '/services/extensions.jpg',
    category: 'Hair',
  },
  {
    id: 5,
    name: 'Wig Styling',
    description: 'Custom wig cutting, styling, and fitting',
    price: 100,
    duration: 90,
    image: '/services/wig.jpg',
    category: 'Hair',
  },
  {
    id: 6,
    name: 'Makeup Application',
    description: 'Professional makeup for any occasion',
    price: 75,
    duration: 60,
    image: '/services/makeup.jpg',
    category: 'Makeup',
  },
  {
    id: 7,
    name: 'Bridal Makeup',
    description: 'Special bridal makeup package with trial session',
    price: 150,
    duration: 90,
    image: '/services/bridal-makeup.jpg',
    category: 'Makeup',
  },
  {
    id: 8,
    name: 'Nail Care - Manicure',
    description: 'Complete manicure with polish and hand treatment',
    price: 35,
    duration: 45,
    image: '/services/manicure.jpg',
    category: 'Nails',
  },
  {
    id: 9,
    name: 'Nail Care - Pedicure',
    description: 'Relaxing pedicure with foot massage and polish',
    price: 45,
    duration: 60,
    image: '/services/pedicure.jpg',
    category: 'Nails',
  },
  {
    id: 10,
    name: 'Acrylic Nails',
    description: 'Full set of acrylic nail extensions',
    price: 65,
    duration: 90,
    image: '/services/acrylic.jpg',
    category: 'Nails',
  },
  {
    id: 11,
    name: 'Spa Facial',
    description: 'Rejuvenating facial treatment with skin analysis',
    price: 90,
    duration: 75,
    image: '/services/facial.jpg',
    category: 'Spa',
  },
  {
    id: 12,
    name: 'Deep Tissue Massage',
    description: 'Therapeutic massage for muscle tension relief',
    price: 110,
    duration: 90,
    image: '/services/massage.jpg',
    category: 'Spa',
  },
  {
    id: 13,
    name: 'Eyebrow Shaping',
    description: 'Professional eyebrow shaping and tinting',
    price: 25,
    duration: 30,
    image: '/services/eyebrows.jpg',
    category: 'Beauty',
  },
  {
    id: 14,
    name: 'Eyelash Extensions',
    description: 'Semi-permanent eyelash extensions',
    price: 120,
    duration: 120,
    image: '/services/lashes.jpg',
    category: 'Beauty',
  },
  {
    id: 15,
    name: 'Waxing Service',
    description: 'Professional waxing services for smooth skin',
    price: 40,
    duration: 45,
    image: '/services/waxing.jpg',
    category: 'Beauty',
  },
];

// Helper function to get service by ID
export const getServiceById = (id: number): Service | undefined => {
  return mockServices.find((service) => service.id === id);
};

// Helper function to get services by category
export const getServicesByCategory = (category: string): Service[] => {
  return mockServices.filter((service) => service.category === category);
};
