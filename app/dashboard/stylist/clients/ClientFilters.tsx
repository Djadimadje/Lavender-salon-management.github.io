'use client';

import { FaSearch, FaSort } from 'react-icons/fa';

interface ClientFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: 'name' | 'visits' | 'recent';
  setSortBy: (sort: 'name' | 'visits' | 'recent') => void;
}

export default function ClientFilters({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
}: ClientFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
          />
        </div>

        {/* Sort */}
        <div className="relative">
          <FaSort className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'visits' | 'recent')}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent appearance-none bg-white"
          >
            <option value="name">Sort by Name</option>
            <option value="visits">Sort by Visits</option>
            <option value="recent">Sort by Recent</option>
          </select>
        </div>
      </div>
    </div>
  );
}
