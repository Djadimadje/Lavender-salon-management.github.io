import React from 'react';
import { Stylist } from '@/lib/data/stylists';
import { FaStar } from 'react-icons/fa';

interface SuggestedStylistBannerProps {
  stylist: Stylist;
}

export default function SuggestedStylistBanner({ stylist }: SuggestedStylistBannerProps) {
  return (
    <div className="bg-gradient-to-r from-[#c9a961] to-[#8b5e3c] text-white rounded-lg p-4 mb-6 shadow-md">
      <div className="flex items-center gap-3">
        <div className="bg-white/20 p-3 rounded-full">
          <FaStar className="text-2xl" />
        </div>
        <div>
          <p className="text-sm font-medium opacity-90">Based on reviews, we suggest</p>
          <p className="text-lg font-bold">
            {stylist.name}{' '}
            <span className="text-sm font-normal">
              ({stylist.rating?.toFixed(1) || 'N/A'} ⭐ rating)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
