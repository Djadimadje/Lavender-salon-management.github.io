'use client';

import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { searchServices } from '@/lib/api/search';
import SearchResults from './SearchResults';


interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const searchDebounce = setTimeout(async () => {
      if (query.trim().length > 0) {
        setLoading(true);
        const searchResults = await searchServices(query);
        setResults(searchResults);
        setLoading(false);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(searchDebounce);
  }, [query]);

  const handleResultClick = (serviceId: string) => {
    router.push(`/services/${serviceId}`);
    setQuery('');
    setResults([]);
    onClose();
  };

  const handleClose = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, treatments, stylists..."
              className="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              onClick={handleClose}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results Dropdown */}
          {query && (
            <SearchResults
              results={results}
              loading={loading}
              query={query}
              onResultClick={handleResultClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
