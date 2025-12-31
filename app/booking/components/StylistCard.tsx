import React from 'react';
import { Stylist } from '@/lib/data/stylists';
import { FaStar, FaCheck } from 'react-icons/fa';

interface StylistCardProps {
  stylist: Stylist;
  isSelected: boolean;
  onSelect: (stylist: Stylist) => void;
}

export default function StylistCard({ stylist, isSelected, onSelect }: StylistCardProps) {
  return (
    <div
      onClick={() => onSelect(stylist)}
      className={`relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg ${
        isSelected ? 'ring-4 ring-[#8b5e3c]' : 'hover:scale-105'
      }`}
    >
      {/* Selected Indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 bg-[#8b5e3c] text-white rounded-full p-2 z-10">
          <FaCheck className="text-sm" />
        </div>
      )}

      {/* Stylist Photo */}
      <div className="h-48 bg-gradient-to-br from-[#f5ebe0] to-[#c9a961] overflow-hidden">
        {stylist.photo ? (
          <img
            src={stylist.photo.startsWith('http') || stylist.photo.startsWith('/') ? stylist.photo : `/pictures/${stylist.photo}`}
            alt={stylist.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const img = e.currentTarget as HTMLImageElement;
              img.onerror = null;
              img.src = '/pictures/Braids.jpg';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl opacity-50">👤</div>
        )}
      </div>

      {/* Stylist Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{stylist.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500 text-sm" />
            <span className="font-semibold text-gray-900">{stylist.rating?.toFixed(1) || 'N/A'}</span>
          </div>
          {stylist.totalReviews && (
            <span className="text-xs text-gray-500">({stylist.totalReviews} reviews)</span>
          )}
        </div>

        {/* Specialty */}
        <div className="mb-3">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Specialty:</span>{' '}
            {Array.isArray(stylist.specialty)
              ? stylist.specialty.slice(0, 2).join(', ')
              : stylist.specialty}
          </p>
        </div>

        {/* Total Clients */}
        {stylist.totalClients && (
          <div className="text-xs text-gray-500">{stylist.totalClients}+ happy clients</div>
        )}
      </div>
    </div>
  );
}
