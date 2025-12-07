export interface Stylist {
  id: number;
  name: string;
  email: string;
  phone?: string;
  gender: 'male' | 'female';
  specialty: string[];
  status: 'active' | 'inactive';
  joinDate: string;
  rating?: number;
  totalClients?: number;
  totalReviews?: number;
}

export const stylists: Stylist[] = [
  {
    id: 2,
    name: 'Emma Wilson',
    email: 'emma@lavender.com',
    phone: '+1 234-567-8902',
    gender: 'female',
    specialty: ['Hair Styling', 'Hair Coloring', 'Bridal'],
    status: 'active',
    joinDate: '2024-11-20',
    rating: 4.9,
    totalClients: 156,
  },
  {
    id: 4,
    name: 'Olivia Taylor',
    email: 'olivia@lavender.com',
    phone: '+1 234-567-8904',
    gender: 'female',
    specialty: ['Spa Treatment', 'Massage', 'Facial'],
    status: 'active',
    joinDate: '2024-12-05',
    rating: 4.8,
    totalClients: 98,
  },
  {
    id: 9,
    name: 'Sophia Martinez',
    email: 'sophia@lavender.com',
    phone: '+1 234-567-8909',
    gender: 'female',
    specialty: ['Nail Care', 'Manicure', 'Pedicure'],
    status: 'active',
    joinDate: '2024-10-15',
    rating: 5.0,
    totalClients: 203,
  },
  {
    id: 10,
    name: 'David Chen',
    email: 'david@lavender.com',
    phone: '+1 234-567-8910',
    gender: 'male',
    specialty: ['Hair Styling', 'Beard Grooming', 'Hair Coloring'],
    status: 'active',
    joinDate: '2024-09-10',
    rating: 4.7,
    totalClients: 142,
  },
  {
    id: 11,
    name: 'Marcus Johnson',
    email: 'marcus@lavender.com',
    phone: '+1 234-567-8911',
    gender: 'male',
    specialty: ['Barbering', 'Hair Cut', 'Styling'],
    status: 'active',
    joinDate: '2025-01-05',
    rating: 4.6,
    totalClients: 67,
  },
];

export const getStylists = () => stylists;

export const getStylistById = (id: number) => stylists.find(s => s.id === id);

export const getFemalStylists = () => stylists.filter(s => s.gender === 'female');

export const getMaleStylists = () => stylists.filter(s => s.gender === 'male');

export const getActiveStylists = () => stylists.filter(s => s.status === 'active');
