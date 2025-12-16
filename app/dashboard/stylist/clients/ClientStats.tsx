'use client';

import { FaUsers, FaStar, FaCalendarCheck } from 'react-icons/fa';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalVisits: number;
  totalSpent: number;
  lastVisit: string;
  favoriteService: string;
  rating?: number;
}

interface ClientStatsProps {
  clients: Client[];
}

export default function ClientStats({ clients }: ClientStatsProps) {
  const totalClients = clients.length;
  const totalVisits = clients.reduce((sum, client) => sum + client.totalVisits, 0);
  const avgRating = (
    clients.reduce((sum, client) => sum + (client.rating || 0), 0) / clients.length
  ).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Total Clients</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{totalClients}</p>
          </div>
          <div className="bg-blue-500 p-3 rounded-full">
            <FaUsers className="text-white text-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Total Visits</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{totalVisits}</p>
          </div>
          <div className="bg-green-500 p-3 rounded-full">
            <FaCalendarCheck className="text-white text-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Average Rating</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{avgRating}</p>
          </div>
          <div className="bg-orange-500 p-3 rounded-full">
            <FaStar className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
