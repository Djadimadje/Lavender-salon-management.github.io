'use client';

import { useState } from 'react';
import { FaUserPlus, FaTimes } from 'react-icons/fa';
import { WalkInCustomer, WalkInFormData } from './types';
import { services } from '../process-payment/serviceData';
import { stylists } from './walkInData';

interface WalkInFormProps {
  onCustomerAdded: (customer: WalkInCustomer) => void;
}

export default function WalkInForm({ onCustomerAdded }: WalkInFormProps) {
  const [formData, setFormData] = useState<WalkInFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    stylist: '',
    preferredTime: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newCustomer: WalkInCustomer = {
      id: `WI${Date.now()}`,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      stylist: formData.stylist,
      preferredTime: formData.preferredTime,
      notes: formData.notes,
      registeredAt: new Date().toISOString(),
      status: 'waiting',
    };

    onCustomerAdded(newCustomer);
    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      stylist: '',
      preferredTime: '',
      notes: '',
    });

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      stylist: '',
      preferredTime: '',
      notes: '',
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Success Message */}
      {showSuccess && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2 text-green-700">
            <FaUserPlus className="text-lg" />
            <span className="font-medium">Walk-in customer registered successfully!</span>
          </div>
          <button onClick={() => setShowSuccess(false)} className="text-green-700 hover:text-green-900">
            <FaTimes />
          </button>
        </div>
      )}

      <h2 className="text-xl font-bold text-[#3d2817] mb-4">Register New Walk-in</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
              placeholder="Enter customer name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
              placeholder="+250 XXX XXX XXX"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
              placeholder="customer@email.com"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Requested <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name} (${service.price})
                </option>
              ))}
            </select>
          </div>

          {/* Stylist */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assign Stylist <span className="text-red-500">*</span>
            </label>
            <select
              name="stylist"
              value={formData.stylist}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
            >
              <option value="">Select a stylist</option>
              {stylists.map((stylist) => (
                <option key={stylist.id} value={stylist.name}>
                  {stylist.name} - {stylist.specialization}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
            placeholder="Any special requests or preferences..."
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-[#8b5e3c] to-[#c9a961] text-white py-3 rounded-lg font-medium hover:opacity-90 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Registering...</span>
              </>
            ) : (
              <>
                <FaUserPlus />
                <span>Register Customer</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition duration-200"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
