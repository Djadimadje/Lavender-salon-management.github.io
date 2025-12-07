export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-10 bg-gray-200 rounded w-64 mb-8 animate-pulse" />
      
      {/* Progress indicator skeleton */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {['Service', 'Date & Time', 'Stylist', 'Review'].map((step, index) => (
            <div key={step} className="flex-1 text-center">
              <div className="h-6 bg-gray-200 rounded w-24 mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-32 mb-6" />
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
      </div>
    </div>
  );
}
