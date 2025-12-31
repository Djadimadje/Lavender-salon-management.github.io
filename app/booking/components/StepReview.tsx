'use client';

import React, { useState } from 'react';
import { Service } from '@/lib/types/booking';
import { Stylist } from '@/lib/data/stylists';
import { FaCalendarAlt, FaClock, FaUser, FaDollarSign } from 'react-icons/fa';

interface StepReviewProps {
  selectedService: Service | null;
  selectedStylist: Stylist | null;
  selectedDate: string | null;
  selectedTime: string | null;
  isAuthenticated: boolean;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  onContactInfoChange: (info: { name: string; email: string; phone: string }) => void;
  onConfirm: () => void;
  onBack: () => void;
  onEdit: () => void;
}

export default function StepReview({
  selectedService,
  selectedStylist,
  selectedDate,
  selectedTime,
  isAuthenticated,
  contactInfo,
  onContactInfoChange,
  onConfirm,
  onBack,
  onEdit,
}: StepReviewProps) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    // Skip validation for authenticated users (info already validated)
    if (isAuthenticated) {
      return true;
    }

    const newErrors: { [key: string]: string } = {};

    if (!contactInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!contactInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!contactInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(contactInfo.phone)) {
      newErrors.phone = 'Invalid phone format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    console.log('StepReview handleConfirm called');
    console.log('isAuthenticated:', isAuthenticated);
    console.log('contactInfo:', contactInfo);
    
    if (validateForm()) {
      console.log('Validation passed, calling onConfirm');
      onConfirm();
    } else {
      console.log('Validation failed, errors:', errors);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Review Your Booking</h2>
        <p className="text-gray-600">Please review your appointment details before confirming</p>
      </div>

      {/* Appointment Summary */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold mb-4">Appointment Summary</h3>

        {selectedService && (
          <div className="flex items-start gap-3">
            <FaDollarSign className="text-[#8b5e3c] mt-1" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Service</p>
              <p className="text-gray-700">{selectedService.name}</p>
              <p className="text-sm text-gray-600 mt-1">{selectedService.description}</p>
              <div className="flex gap-4 mt-2">
                <p className="text-sm font-semibold text-[#8b5e3c]">
                  Rwf{selectedService.price}
                </p>
                <p className="text-sm text-gray-600">{selectedService.duration} minutes</p>
              </div>
            </div>
          </div>
        )}

        {selectedStylist && (
          <div className="flex items-start gap-3 pt-4 border-t">
            <FaUser className="text-[#8b5e3c] mt-1" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Stylist</p>
              <p className="text-gray-700">{selectedStylist.name}</p>
              <p className="text-sm text-gray-600">
                ⭐ {selectedStylist.rating?.toFixed(1)} rating
              </p>
            </div>
          </div>
        )}

        {selectedDate && selectedTime && (
          <>
            <div className="flex items-start gap-3 pt-4 border-t">
              <FaCalendarAlt className="text-[#8b5e3c] mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">Date</p>
                <p className="text-gray-700">{formatDate(selectedDate)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t">
              <FaClock className="text-[#8b5e3c] mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">Time</p>
                <p className="text-gray-700">{selectedTime}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Contact Information Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

        {isAuthenticated ? (
          <div className="space-y-2 text-gray-700">
            <p className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>{contactInfo.name}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{contactInfo.email}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Phone:</span>
              <span>{contactInfo.phone}</span>
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Please provide your contact information for appointment confirmation.
            </p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={contactInfo.name}
                onChange={(e) => onContactInfoChange({ ...contactInfo, name: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => onContactInfoChange({ ...contactInfo, email: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={contactInfo.phone}
                onChange={(e) => onContactInfoChange({ ...contactInfo, phone: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
        >
          Back
        </button>
        <button
          onClick={onEdit}
          className="flex-1 px-6 py-3 border border-[#8b5e3c] text-[#8b5e3c] rounded-lg hover:bg-[#8b5e3c] hover:text-white transition-colors font-semibold"
        >
          Edit
        </button>
        <button
          onClick={handleConfirm}
          className="flex-1 px-6 py-3 bg-[#8b5e3c] text-white rounded-lg hover:bg-[#3d2817] transition-colors font-semibold"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
