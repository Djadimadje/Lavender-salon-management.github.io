'use client';

export default function RatingsChart() {
  const ratingsData = [
    { stars: 5, count: 125, percentage: 75 },
    { stars: 4, count: 32, percentage: 19 },
    { stars: 3, count: 8, percentage: 5 },
    { stars: 2, count: 2, percentage: 1 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Rating Distribution</h2>
      
      <div className="space-y-3">
        {ratingsData.map((rating) => (
          <div key={rating.stars} className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700 w-16">
              {rating.stars} Stars
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-[#8b5e3c] to-[#c9a961] h-3 rounded-full transition-all duration-500"
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 w-16 text-right">
              {rating.count} ({rating.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
