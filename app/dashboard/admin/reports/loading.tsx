export default function Loading() {
  return (
    <div>
      <div className="h-10 bg-gray-200 rounded w-64 mb-6 animate-pulse" />
      <div className="h-6 bg-gray-200 rounded w-96 mb-4 animate-pulse" />
      
      {/* Stats cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-28 mb-3" />
            <div className="h-8 bg-gray-200 rounded w-24" />
          </div>
        ))}
      </div>

      {/* Chart skeleton */}
      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-64 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
