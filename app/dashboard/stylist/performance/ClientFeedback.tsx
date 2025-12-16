'use client';

import { FaStar } from 'react-icons/fa';

export default function ClientFeedback() {
  const feedback = [
    {
      id: 1,
      client: 'Sarah Johnson',
      date: '2025-12-15',
      rating: 5,
      comment: 'Amazing service! Very professional and friendly. Will definitely come back!',
    },
    {
      id: 2,
      client: 'Michael Brown',
      date: '2025-12-14',
      rating: 5,
      comment: 'Best hair coloring experience. Exactly what I wanted!',
    },
    {
      id: 3,
      client: 'Emily Davis',
      date: '2025-12-13',
      rating: 4,
      comment: 'Great haircut, very satisfied with the result.',
    },
    {
      id: 4,
      client: 'James Wilson',
      date: '2025-12-12',
      rating: 5,
      comment: 'Excellent stylist! Highly recommend.',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Client Feedback</h2>
      
      <div className="space-y-4">
        {feedback.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{item.client}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < item.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 italic">&quot;{item.comment}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
