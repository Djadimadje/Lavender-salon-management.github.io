'use client';

import Image from 'next/image';
import { FiLoader } from 'react-icons/fi';

interface SearchResult {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  description?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  query: string;
  onResultClick: (id: string) => void;
}

export default function SearchResults({ results, loading, query, onResultClick }: SearchResultsProps) {
  if (loading) {
    return (
      <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg p-4 z-50">
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <FiLoader className="w-5 h-5 animate-spin" />
          <span>Searching...</span>
        </div>
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg p-4 z-50">
        <p className="text-gray-500 text-center">No results found for "{query}"</p>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
      <div className="p-2">
        {results.map((result) => (
          <button
            key={result.id}
            onClick={() => onResultClick(result.id)}
            className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
          >
            {result.image && (
              <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={result.image}
                  alt={result.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 truncate">{result.name}</h4>
              <p className="text-sm text-gray-500">{result.category}</p>
            </div>
            <div className="text-[#8b5e3c] font-semibold">
              ${result.price}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
