export default function Loading() {
  return (
    <div>
      <div className="h-10 bg-gray-200 rounded w-64 mb-6 animate-pulse" />
      <div className="h-6 bg-gray-200 rounded w-96 mb-8 animate-pulse" />
      
      {/* Tabs skeleton */}
      <div className="mb-6">
        <div className="flex space-x-8 border-b">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded w-32 mb-2 animate-pulse" />
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64 bg-gray-200 rounded" />
          <div className="h-64 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
