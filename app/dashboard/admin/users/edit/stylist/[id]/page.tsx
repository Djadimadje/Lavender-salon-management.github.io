'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FaArrowLeft, FaSave, FaUser, FaEnvelope, FaPhone, FaVenusMars, FaStar } from 'react-icons/fa';
import { getStylists } from '@/lib/data/stylists';

export default function EditStylistPage() {
  const router = useRouter();
  const params = useParams();
  const userId = parseInt(params.id as string);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 'female' as 'male' | 'female',
    specialty: [] as string[],
    status: 'active',
  });

  const [loading, setLoading] = useState(true);

  const specialtyOptions = [
    'Hair Styling',
    'Hair Coloring',
    'Bridal',
    'Makeup',
    'Manicure',
    'Pedicure',
    'Facial',
    'Massage',
  ];

  useEffect(() => {
    const stylists = getStylists();
    const stylist = stylists.find(s => s.id === userId);
    
    if (stylist) {
      setFormData({
        name: stylist.name,
        email: stylist.email,
        phone: stylist.phone || '',
        gender: stylist.gender,
        specialty: stylist.specialty,
        status: stylist.status,
      });
    }
    setLoading(false);
  }, [userId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating stylist:', userId, formData);
    // TODO: Implement API call to update stylist
    router.push('/dashboard/admin/users');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSpecialtyToggle = (specialty: string) => {
    setFormData({
      ...formData,
      specialty: formData.specialty.includes(specialty)
        ? formData.specialty.filter(s => s !== specialty)
        : [...formData.specialty, specialty],
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
        <h1 className="text-3xl font-bold text-gray-900">Edit Stylist</h1>
        <p className="text-gray-600 mt-1">Update stylist details below</p>
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

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              <FaVenusMars className="inline mr-2" />
              Gender *
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          {/* Specialty */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaStar className="inline mr-2" />
              Specialties *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {specialtyOptions.map((specialty) => (
                <button
                  key={specialty}
                  type="button"
                  onClick={() => handleSpecialtyToggle(specialty)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    formData.specialty.includes(specialty)
                      ? 'bg-[#c9a961] border-[#c9a961] text-white'
                      : 'border-gray-300 hover:border-[#c9a961]'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
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
              disabled={formData.specialty.length === 0}
              className="flex items-center gap-2 bg-[#3d2817] text-white px-6 py-3 rounded-lg hover:bg-[#2a1a0f] transition-colors disabled:bg-gray-400"
            >
              <FaSave />
              <span>Update Stylist</span>
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
