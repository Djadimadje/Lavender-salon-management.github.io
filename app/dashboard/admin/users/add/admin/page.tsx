'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaSave, FaUser, FaEnvelope, FaPhone, FaShieldAlt } from 'react-icons/fa';

export default function AddAdminPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    permissions: [] as string[],
    status: 'active',
  });

  const permissionOptions = [
    'Manage Users',
    'Manage Bookings',
    'Manage Services',
    'Manage Transactions',
    'View Reports',
    'Manage Content',
    'System Settings',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating admin:', formData);
    // TODO: Implement API call to create admin
    router.push('/dashboard/admin/users');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePermissionToggle = (permission: string) => {
    setFormData({
      ...formData,
      permissions: formData.permissions.includes(permission)
        ? formData.permissions.filter(p => p !== permission)
        : [...formData.permissions, permission],
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={() => router.push('/dashboard/admin/users/add')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#3d2817] mb-4 transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Role Selection</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Add New Admin</h1>
        <p className="text-gray-600 mt-1">Fill in the admin details below</p>
      </div>

      {/* Warning Banner */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800 font-medium">
          ⚠️ Warning: Admins have full access to the system. Only grant admin privileges to trusted personnel.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              <FaUser className="inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
              placeholder="Enter admin's full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <FaEnvelope className="inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
              placeholder="admin@lavender.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              <FaPhone className="inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
              placeholder="+1 234-567-8900"
            />
          </div>

          {/* Permissions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaShieldAlt className="inline mr-2" />
              Permissions *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {permissionOptions.map((permission) => (
                <button
                  key={permission}
                  type="button"
                  onClick={() => handlePermissionToggle(permission)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all text-left ${
                    formData.permissions.includes(permission)
                      ? 'bg-red-500 border-red-500 text-white'
                      : 'border-gray-300 hover:border-red-500'
                  }`}
                >
                  {permission}
                </button>
              ))}
            </div>
            {formData.permissions.length === 0 && (
              <p className="text-sm text-red-500 mt-2">Please select at least one permission</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
              Account Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={formData.permissions.length === 0}
              className="flex items-center gap-2 bg-[#3d2817] text-white px-6 py-3 rounded-lg hover:bg-[#2a1a0f] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <FaSave />
              <span>Create Admin</span>
            </button>
            <button
              type="button"
              onClick={() => router.push('/dashboard/admin/users')}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
