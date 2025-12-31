import { Service } from '../types/booking';

export const mockServices: Service[] = [
  {
    id: 1,
    name: 'Haircut',
    description: 'Professional haircut and styling tailored to your preference',
    price: 45,
    duration: 60,
    image: '/pictures/haircut.jpg',
    category: 'Hair',
  },
  {
    id: 2,
    name: 'Hair Coloring',
    description: 'Full or partial hair coloring with premium products',
    price: 120,
    duration: 120,
      image: '/pictures/gallery1.jpg',
    category: 'Hair',
  },
  {
    id: 3,
    name: 'Braids',
    description: 'Beautiful braiding styles from classic to modern',
    price: 80,
    duration: 90,
      image: '/pictures/braids.jpg',
    category: 'Hair',
  },
  {
    id: 4,
    name: 'Hair Extensions',
    description: 'High-quality hair extensions for length and volume',
    price: 200,
    duration: 150,
      image: '/pictures/Master_Hair_Stylist.jpg',
    category: 'Hair',
  },
  {
    id: 5,
    name: 'Wig Styling',
    description: 'Custom wig cutting, styling, and fitting',
    price: 100,
    duration: 90,
      image: '/pictures/gallery3.jpg',

    category: 'Hair',
  },
  {
    id: 6,
    name: 'Makeup Application',
    description: 'Professional makeup for any occasion',
    price: 75,
    duration: 60,
      image: '/pictures/makeup.jpeg',
    category: 'Makeup',
  },
  {
    id: 7,
    name: 'Bridal Makeup',
    description: 'Special bridal makeup package with trial session',
    price: 150,
    duration: 90,
      image: '/pictures/makeup.jpeg',
    category: 'Makeup',
  },
  {
    id: 8,
    name: 'Nail Care - Manicure',
    description: 'Complete manicure with polish and hand treatment',
    price: 35,
    duration: 45,
      image: '/pictures/nails.jpeg',
    category: 'Nails',
  },
  {
    id: 9,
    name: 'Nail Care - Pedicure',
    description: 'Relaxing pedicure with foot massage and polish',
    price: 45,
    duration: 60,
      image: '/pictures/nail_Technician.jpg',
    category: 'Nails',
  },
  {
    id: 10,
    name: 'Acrylic Nails',
    description: 'Full set of acrylic nail extensions',
    price: 65,
    duration: 90,
      image: '/pictures/nails.jpeg',
    category: 'Nails',
  },
  {
    id: 11,
    name: 'Spa Facial',
    description: 'Rejuvenating facial treatment with skin analysis',
    price: 90,
    duration: 75,
      image: '/pictures/spa_facial.jpg',  
    category: 'Spa',
  },
  {
    id: 12,
    name: 'Deep Tissue Massage',
    description: 'Therapeutic massage for muscle tension relief',
    price: 110,
    duration: 90,
      image: '/pictures/massage1.JPG',
    category: 'Spa',
  },
  {
    id: 13,
    name: 'Eyebrow Shaping',
    description: 'Professional eyebrow shaping and tinting',
    price: 25,
    duration: 30,
      image: '/pictures/eyebrows.jpg',
    category: 'Beauty',
  },
  {
    id: 14,
    name: 'Eyelash Extensions',
    description: 'Semi-permanent eyelash extensions',
    price: 120,
    duration: 120,
      image: '/pictures/lashes.jpg',
    category: 'Beauty',
  },
  {
    id: 15,
    name: 'Waxing Service',
    description: 'Professional waxing services for smooth skin',
    price: 40,
    duration: 45,
      image: '/pictures/waxing.JPG',
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
