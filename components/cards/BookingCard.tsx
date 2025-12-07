import React from 'react';

interface BookingCardProps {
  serviceName: string;
  stylistName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  onCancel?: () => void;
}

export default function BookingCard({
  serviceName,
  stylistName,
  date,
  time,
  status,
  onCancel,
}: BookingCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{serviceName}</h3>
          <p className="text-gray-600">with {stylistName}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium">{date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Time</p>
          <p className="font-medium">{time}</p>
        </div>
      </div>

      {onCancel && status !== 'cancelled' && status !== 'completed' && (
        <button
          onClick={onCancel}
          className="text-red-600 hover:text-red-700 font-medium text-sm"
        >
          Cancel Appointment
        </button>
      )}
    </div>
  );
}
