export interface Admin {
  id: number;
  name: string;
  email: string;
  phone?: string;
  status: 'active' | 'inactive';
  joinDate: string;
  permissions?: string[];
}

export const admins: Admin[] = [
  {
    id: 7,
    name: 'Admin User',
    email: 'admin@lavender.com',
    phone: '+1 234-567-8907',
    status: 'active',
    joinDate: '2024-01-01',
    permissions: ['all'],
  },
];

export const getAdmins = () => admins;

export const getAdminById = (id: number) => admins.find(a => a.id === id);
