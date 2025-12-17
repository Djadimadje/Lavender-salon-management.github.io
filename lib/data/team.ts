export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Master Hair Stylist',
    bio: 'With over 15 years of experience in the beauty industry, Sarah founded Lavender Salon with a vision to create a sanctuary where beauty meets wellness.',
    image: '/pictures/Master_Hair_Stylist.jpg',
    specialties: ['Hair Coloring', 'Balayage', 'Hair Extensions'],
    experience: '15+ years',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Senior Hair Stylist',
    bio: 'Michael specializes in cutting-edge hairstyles and color techniques. His creative approach has won multiple awards in international competitions.',
    image: '/pictures/Hair_Stylist.jpg',
    specialties: ['Creative Cuts', 'Hair Coloring', 'Men\'s Grooming'],
    experience: '10+ years',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Makeup Artist & Esthetician',
    bio: 'Emily brings artistry and precision to every makeup application. She specializes in bridal makeup and skincare treatments.',
    image: '/pictures/Esthetician.jpg',
    specialties: ['Bridal Makeup', 'Special Effects', 'Skincare'],
    experience: '8+ years',
  },
  {
    id: 4,
    name: 'Jessica Williams',
    role: 'Nail Technician',
    bio: 'Jessica is a certified nail technician known for her intricate nail art and attention to detail in manicure and pedicure services.',
    image: '/pictures/nail_technician.jpg',
    specialties: ['Nail Art', 'Gel Nails', 'Spa Pedicures'],
    experience: '7+ years',
  },
];

export const salonValues = [
  {
    id: 1,
    title: 'Excellence',
    description: 'We strive for perfection in every service we provide, using only premium products and techniques.',
    icon: '⭐',
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'We stay ahead of trends and continuously update our skills to bring you the latest in beauty.',
    icon: '💡',
  },
  {
    id: 3,
    title: 'Wellness',
    description: 'Your health and comfort are our priority. We create a relaxing environment for your well-being.',
    icon: '🌿',
  },
  {
    id: 4,
    title: 'Personalization',
    description: 'Every client is unique. We tailor our services to match your individual style and preferences.',
    icon: '✨',
  },
];
