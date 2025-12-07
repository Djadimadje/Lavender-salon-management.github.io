export default function Loading() {
  return (
    <div className="p-8">
      <div className="h-10 bg-gray-200 rounded w-64 mb-6 animate-pulse" />
      <div className="h-6 bg-gray-200 rounded w-96 mb-8 animate-pulse" />
      
      {/* Stats cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mb-3" />
            <div className="h-8 bg-gray-200 rounded w-20" />
          </div>
        ))}
      </div>

      {/* Content skeleton */}
      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
