'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FaArrowLeft, FaSave, FaUser, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { getCashiers } from '@/lib/data/cashiers';

export default function EditCashierPage() {
  const router = useRouter();
  const params = useParams();
  const userId = parseInt(params.id as string);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shift: 'morning' as 'morning' | 'afternoon' | 'evening',
    status: 'active',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cashiers = getCashiers();
    const cashier = cashiers.find(c => c.id === userId);
    
    if (cashier) {
      setFormData({
        name: cashier.name,
        email: cashier.email,
        phone: cashier.phone || '',
        shift: cashier.shift || 'morning',
        status: cashier.status,
      });
    }
    setLoading(false);
  }, [userId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating cashier:', userId, formData);
    // TODO: Implement API call to update cashier
    router.push('/dashboard/admin/users');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={() => router.push('/dashboard/admin/users')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#3d2817] mb-4 transition-colors"
        >
          <FaArrowLeft />
          <span>Back to User Management</span>
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Edit Cashier</h1>
        <p className="text-gray-600 mt-1">Update cashier details below</p>
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
            />
          </div>

          {/* Shift */}
          <div>
            <label htmlFor="shift" className="block text-sm font-medium text-gray-700 mb-2">
              <FaClock className="inline mr-2" />
              Work Shift *
            </label>
            <select
              id="shift"
              name="shift"
              value={formData.shift}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
            >
              <option value="morning">Morning (8:00 AM - 4:00 PM)</option>
              <option value="afternoon">Afternoon (12:00 PM - 8:00 PM)</option>
              <option value="evening">Evening (4:00 PM - 12:00 AM)</option>
            </select>
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
              className="flex items-center gap-2 bg-[#3d2817] text-white px-6 py-3 rounded-lg hover:bg-[#2a1a0f] transition-colors"
            >
              <FaSave />
              <span>Update Cashier</span>
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
