import { WalkInCustomer } from './types';

export interface Stylist {
  id: string;
  name: string;
  specialization: string;
  available: boolean;
}

export const stylists: Stylist[] = [
  { id: 'S001', name: 'Sarah Johnson', specialization: 'Hair Coloring', available: true },
  { id: 'S002', name: 'Michael Chen', specialization: 'Hair Styling', available: true },
  { id: 'S003', name: 'Emma Williams', specialization: 'Spa Treatments', available: true },
  { id: 'S004', name: 'David Brown', specialization: 'Nail Art', available: true },
  { id: 'S005', name: 'Lisa Anderson', specialization: 'Makeup', available: false },
];

export const mockWalkIns: WalkInCustomer[] = [
  {
    id: 'WI1001',
    name: 'Alice Thompson',
    phone: '+250 788 123 456',
    email: 'alice.t@email.com',
    service: 'Hair Styling',
    stylist: 'Sarah Johnson',
    preferredTime: '10:30',
    registeredAt: new Date().toISOString(),
    status: 'in-service',
    notes: 'Prefers natural look',
  },
  {
    id: 'WI1002',
    name: 'Bob Miller',
    phone: '+250 788 234 567',
    service: 'Hair Cut',
    stylist: 'Michael Chen',
    preferredTime: '11:00',
    registeredAt: new Date(Date.now() - 1800000).toISOString(), // 30 min ago
    status: 'waiting',
  },
  {
    id: 'WI1003',
    name: 'Carol Davis',
    phone: '+250 788 345 678',
    email: 'carol.d@email.com',
    service: 'Manicure',
    stylist: 'David Brown',
    preferredTime: '09:45',
    registeredAt: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    status: 'completed',
    notes: 'Red polish requested',
  },
  {
    id: 'WI1004',
    name: 'Daniel Wilson',
    phone: '+250 788 456 789',
    service: 'Facial Treatment',
    stylist: 'Emma Williams',
    preferredTime: '11:30',
    registeredAt: new Date(Date.now() - 600000).toISOString(), // 10 min ago
    status: 'waiting',
  },
  {
    id: 'WI1005',
    name: 'Eva Martinez',
    phone: '+250 788 567 890',
    email: 'eva.m@email.com',
    service: 'Hair Coloring',
    stylist: 'Sarah Johnson',
    preferredTime: '14:00',
    registeredAt: new Date(Date.now() - 300000).toISOString(), // 5 min ago
    status: 'waiting',
    notes: 'Allergic to ammonia-based products',
  },
];
