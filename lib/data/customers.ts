export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: 'active' | 'inactive';
  joinDate: string;
  totalBookings?: number;
}

export const customers: Customer[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1 234-567-8901',
    status: 'active',
    joinDate: '2025-01-15',
    totalBookings: 12,
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael@example.com',
    phone: '+1 234-567-8903',
    status: 'active',
    joinDate: '2025-02-10',
    totalBookings: 5,
  },
  {
    id: 6,
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '+1 234-567-8906',
    status: 'inactive',
    joinDate: '2024-10-12',
    totalBookings: 8,
  },
  {
    id: 8,
    name: 'James Wilson',
    email: 'james@example.com',
    phone: '+1 234-567-8908',
    status: 'active',
    joinDate: '2025-03-01',
    totalBookings: 3,
  },
];

export const getCustomers = () => customers;

export const getCustomerById = (id: number) => customers.find(c => c.id === id);

export const getActiveCustomers = () => customers.filter(c => c.status === 'active');
