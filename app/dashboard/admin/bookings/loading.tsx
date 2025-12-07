import TableSkeleton from '@/components/ui/TableSkeleton';

export default function Loading() {
  return (
    <div>
      <div className="h-10 bg-gray-200 rounded w-64 mb-6 animate-pulse" />
      <div className="h-6 bg-gray-200 rounded w-96 mb-4 animate-pulse" />
      <TableSkeleton rows={8} />
    </div>
  );
}
