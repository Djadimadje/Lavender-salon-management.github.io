'use client';

import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import PageHeader from '@/components/shared/PageHeader';

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Hair Styling',
      stylist: 'Sarah Martinez',
      date: '2025-12-08',
      time: '10:00 AM',
      duration: '1 hour',
      status: 'Confirmed',
      location: 'Main Salon',
    },
    {
      id: 2,
      service: 'Spa Treatment',
      stylist: 'Emily Chen',
      date: '2025-12-10',
      time: '2:00 PM',
      duration: '90 mins',
      status: 'Confirmed',
      location: 'Spa Room 2',
    },
    {
      id: 3,
      service: 'Nail Care',
      stylist: 'Jessica Lee',
      date: '2025-12-12',
      time: '11:30 AM',
      duration: '45 mins',
      status: 'Pending',
      location: 'Nail Station 3',
    },
  ];

  const pastAppointments = [
    {
      id: 4,
      service: 'Makeup Session',
      stylist: 'Rachel Adams',
      date: '2025-11-20',
      time: '3:00 PM',
      duration: '1 hour',
      status: 'Completed',
      location: 'Makeup Studio',
    },
    {
      id: 5,
      service: 'Hair Coloring',
      stylist: 'Sarah Martinez',
      date: '2025-11-15',
      time: '1:00 PM',
      duration: '2 hours',
      status: 'Completed',
      location: 'Main Salon',
    },
  ];

  const appointments = activeTab === 'upcoming' ? upcomingAppointments : pastAppointments;

  return (
    <div className="space-y-4 md:space-y-6">
      <PageHeader 
        title="My Appointments" 
        description="View and manage your salon appointments" 
      />

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`${
                activeTab === 'upcoming'
                  ? 'border-[#8b5e3c] text-[#8b5e3c]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/2 py-3 md:py-4 px-1 text-center border-b-2 font-medium text-sm md:text-base`}
            >
              <span className="hidden sm:inline">Upcoming Appointments</span>
              <span className="sm:hidden">Upcoming</span>
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`${
                activeTab === 'past'
                  ? 'border-[#8b5e3c] text-[#8b5e3c]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } w-1/2 py-3 md:py-4 px-1 text-center border-b-2 font-medium text-sm md:text-base`}
            >
              <span className="hidden sm:inline">Past Appointments</span>
              <span className="sm:hidden">Past</span>
            </button>
          </nav>
        </div>

        {/* Appointments List */}
        <div className="p-4 md:p-6">
          {appointments.length === 0 ? (
            <p className="text-gray-500 text-center py-8 text-sm md:text-base">No appointments found</p>
          ) : (
            <div className="space-y-3 md:space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        {appointment.service}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 flex items-center gap-2 mt-1">
                        <FaUser className="text-xs md:text-sm" />
                        {appointment.stylist}
                      </p>
                    </div>
                    <span
                      className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap ${
                        appointment.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : appointment.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#8b5e3c]" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#8b5e3c]" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#8b5e3c]" />
                      <span>{appointment.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#8b5e3c]" />
                      <span>{appointment.location}</span>
                    </div>
                  </div>

                  {activeTab === 'upcoming' && (
                    <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-2 md:gap-3">
                      <button className="px-3 md:px-4 py-2 bg-[#8b5e3c] text-white rounded-lg hover:bg-[#3d2817] transition-colors text-sm md:text-base">
                        Reschedule
                      </button>
                      <button className="px-3 md:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base">
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
