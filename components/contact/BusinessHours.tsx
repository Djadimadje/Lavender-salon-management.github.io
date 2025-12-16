'use client';

import { FiClock } from 'react-icons/fi';

export default function BusinessHours() {
  const schedule = [
    { day: 'Monday', hours: '9:00 AM - 7:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '9:00 AM - 7:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '9:00 AM - 7:00 PM', isOpen: true },
    { day: 'Thursday', hours: '9:00 AM - 7:00 PM', isOpen: true },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f5ebe0] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8b5e3c] rounded-full mb-4">
              <FiClock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Hours
            </h2>
            <div className="w-20 h-1 bg-[#8b5e3c] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              We're here to serve you during these hours
            </p>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-6 ${
                  index !== schedule.length - 1 ? 'border-b border-gray-100' : ''
                } ${!item.isOpen ? 'bg-gray-50' : 'hover:bg-[#f5ebe0]/30'} transition-colors duration-200`}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.day}
                </span>
                <span
                  className={`text-lg font-medium ${
                    item.isOpen ? 'text-[#8b5e3c]' : 'text-gray-500'
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 p-6 bg-[#c9a961]/10 rounded-xl">
            <p className="text-gray-700">
              <span className="font-semibold">Note:</span> We recommend booking appointments in advance to ensure availability. 
              Walk-ins are welcome subject to stylist availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
