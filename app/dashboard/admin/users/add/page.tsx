'use client';

import { useRouter } from 'next/navigation';
import { FaUsers, FaCut, FaCashRegister, FaUserShield, FaArrowLeft } from 'react-icons/fa';

export default function AddUserPage() {
  const router = useRouter();

  // User roles configuration
  const userRoles = [
    {
      id: 'customer',
      title: 'Customer',
      description: 'Add a new customer who can book services',
      icon: FaUsers,
      color: 'bg-green-500',
      path: '/dashboard/admin/users/add/customer',
    },
    {
      id: 'stylist',
      title: 'Stylist',
      description: 'Add a new stylist to provide services',
      icon: FaCut,
      color: 'bg-purple-500',
      path: '/dashboard/admin/users/add/stylist',
    },
    {
      id: 'cashier',
      title: 'Cashier',
      description: 'Add a new cashier to handle transactions',
      icon: FaCashRegister,
      color: 'bg-orange-500',
      path: '/dashboard/admin/users/add/cashier',
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Add a new admin with full access',
      icon: FaUserShield,
      color: 'bg-red-500',
      path: '/dashboard/admin/users/add/admin',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#8b5e3c] text-white p-8 mb-6">
        <button
          onClick={() => router.push('/dashboard/admin/users')}
          className="flex items-center gap-2 text-gray-200 hover:text-white mb-4 transition-colors"
        >
          <FaArrowLeft />
          <span>Back to User Management</span>
        </button>
        <h1 className="text-3xl font-bold mb-2">Add New User</h1>
        <p className="text-gray-200">Select the type of user you want to add</p>
      </div>

      <div className="p-8 space-y-6">
        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userRoles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => router.push(role.path)}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 text-left"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${role.color} p-6 rounded-full`}>
                    <Icon className="text-white text-5xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{role.title}</h3>
                    <p className="text-sm mt-2 text-gray-600">{role.description}</p>
                  </div>
                  <div className="mt-4 text-sm font-medium text-[#8b5e3c]">
                    Click to add →
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
          <ul className="text-blue-800 space-y-2 text-sm">
            <li><strong>Customer:</strong> Can book appointments and view their booking history</li>
            <li><strong>Stylist:</strong> Can manage their schedule and view assigned bookings</li>
            <li><strong>Cashier:</strong> Can process payments and manage transactions</li>
            <li><strong>Admin:</strong> Has full access to all system features and settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
