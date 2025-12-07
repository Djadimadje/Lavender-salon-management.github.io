import SkeletonCard from '@/components/ui/SkeletonCard';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-10 bg-gray-200 rounded w-64 mb-8 animate-pulse" />
      <div className="h-6 bg-gray-200 rounded w-96 mb-8 animate-pulse" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
