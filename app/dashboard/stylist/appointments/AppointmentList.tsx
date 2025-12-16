'use client';

import { FaPhone, FaEnvelope } from 'react-icons/fa';

export interface Appointment {
  id: string;
  client: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  status: 'upcoming' | 'in-progress' | 'completed' | 'cancelled';
  notes?: string;
}

interface AppointmentListProps {
  appointments: Appointment[];
}

export default function AppointmentList({ appointments }: AppointmentListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (appointments.length === 0) {
    return (
      <div className="bg-white p-12 rounded-lg shadow-md text-center">
        <p className="text-gray-500">No appointments found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 gap-4 p-6">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg text-gray-900">{appointment.client}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                    {appointment.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                  <p><span className="font-medium">Service:</span> {appointment.service}</p>
                  <p><span className="font-medium">Duration:</span> {appointment.duration} min</p>
                  <p><span className="font-medium">Date:</span> {appointment.date}</p>
                  <p><span className="font-medium">Time:</span> {appointment.time}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <a href={`tel:${appointment.phone}`} className="flex items-center gap-1 hover:text-[#8b5e3c]">
                    <FaPhone className="text-xs" />
                    {appointment.phone}
                  </a>
                  <a href={`mailto:${appointment.email}`} className="flex items-center gap-1 hover:text-[#8b5e3c]">
                    <FaEnvelope className="text-xs" />
                    {appointment.email}
                  </a>
                </div>
                {appointment.notes && (
                  <p className="mt-2 text-sm text-gray-500 italic">Note: {appointment.notes}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
