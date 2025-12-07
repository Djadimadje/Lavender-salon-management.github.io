export interface Cashier {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: 'active' | 'inactive';
  joinDate: string;
  shift?: 'morning' | 'afternoon' | 'evening';
}

export const cashiers: Cashier[] = [
  {
    id: 5,
    name: 'John Smith',
    email: 'john@lavender.com',
    phone: '+1 234-567-8905',
    status: 'active',
    joinDate: '2025-01-08',
    shift: 'morning',
  },
  {
    id: 12,
    name: 'Lisa Anderson',
    email: 'lisa@lavender.com',
    phone: '+1 234-567-8912',
    status: 'active',
    joinDate: '2024-11-15',
    shift: 'afternoon',
  },
  {
    id: 13,
    name: 'Robert Lee',
    email: 'robert@lavender.com',
    phone: '+1 234-567-8913',
    status: 'active',
    joinDate: '2025-02-20',
    shift: 'evening',
  },
];

export const getCashiers = () => cashiers;

export const getCashierById = (id: number) => cashiers.find(c => c.id === id);

export const getActiveCashiers = () => cashiers.filter(c => c.status === 'active');

export const getCashiersByShift = (shift: 'morning' | 'afternoon' | 'evening') => 
  cashiers.filter(c => c.shift === shift);
