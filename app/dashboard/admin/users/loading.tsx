import TableSkeleton from '@/components/ui/TableSkeleton';

export default function Loading() {
  return (
    <div>
      <div className="h-10 bg-gray-200 rounded w-64 mb-6 animate-pulse" />
      <div className="h-6 bg-gray-200 rounded w-96 mb-4 animate-pulse" />
      
      {/* Tabs skeleton */}
      <div className="mb-6">
        <div className="flex space-x-8 border-b">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded w-24 mb-2 animate-pulse" />
          ))}
        </div>
      </div>

      <TableSkeleton rows={8} />
    </div>
  );
}
