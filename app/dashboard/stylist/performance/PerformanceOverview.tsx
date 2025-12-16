'use client';

import { FaStar, FaThumbsUp, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PerformanceOverview() {
  const stats = [
    { label: 'Average Rating', value: '4.8', icon: FaStar, color: 'bg-yellow-500' },
    { label: 'Client Satisfaction', value: '96%', icon: FaThumbsUp, color: 'bg-green-500' },
    { label: 'Repeat Clients', value: '78%', icon: FaRedo, color: 'bg-blue-500' },
    { label: 'Monthly Rank', value: '#3', icon: FaTrophy, color: 'bg-purple-500' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <Icon className="text-white text-2xl" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
