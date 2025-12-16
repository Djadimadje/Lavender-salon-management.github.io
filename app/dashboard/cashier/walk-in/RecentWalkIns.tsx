'use client';

import { useState, useEffect } from 'react';
import { FaClock, FaCheck, FaHourglassHalf } from 'react-icons/fa';
import { WalkInCustomer } from './types';
import { mockWalkIns } from './walkInData';

interface RecentWalkInsProps {
  refreshTrigger: number;
}

export default function RecentWalkIns({ refreshTrigger }: RecentWalkInsProps) {
  const [walkIns, setWalkIns] = useState<WalkInCustomer[]>(mockWalkIns);

  useEffect(() => {
    // Reload walk-ins when refreshTrigger changes
    setWalkIns(mockWalkIns);
  }, [refreshTrigger]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'waiting':
        return 'bg-yellow-100 text-yellow-700';
      case 'in-service':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'waiting':
        return <FaClock />;
      case 'in-service':
        return <FaHourglassHalf />;
      case 'completed':
        return <FaCheck />;
      default:
        return <FaClock />;
    }
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-[#3d2817] mb-4">Today's Walk-in Customers</h2>

      {walkIns.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <FaClock className="mx-auto text-4xl mb-2 text-gray-400" />
          <p>No walk-in customers registered today</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Phone</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Service</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Stylist</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Time</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Registered</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {walkIns.map((walkIn) => (
                <tr key={walkIn.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 text-sm text-gray-600">{walkIn.id}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-900">{walkIn.name}</div>
                    {walkIn.email && <div className="text-xs text-gray-500">{walkIn.email}</div>}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{walkIn.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{walkIn.service}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{walkIn.stylist}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{walkIn.preferredTime}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{formatTime(walkIn.registeredAt)}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(walkIn.status)}`}>
                      {getStatusIcon(walkIn.status)}
                      {walkIn.status.replace('-', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Summary Stats 
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {walkIns.filter(w => w.status === 'waiting').length}
          </div>
          <div className="text-sm text-gray-600">Waiting</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {walkIns.filter(w => w.status === 'in-service').length}
          </div>
          <div className="text-sm text-gray-600">In Service</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            {walkIns.filter(w => w.status === 'completed').length}
          </div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
      </div>*/}
    </div>
  );
}
