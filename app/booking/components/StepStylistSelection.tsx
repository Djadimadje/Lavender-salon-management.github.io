import React from 'react';
import { Stylist } from '@/lib/data/stylists';
import { getSuggestedStylist } from '@/lib/api/booking';
import StylistCard from './StylistCard';
import SuggestedStylistBanner from './SuggestedStylistBanner';
import { FaSpinner } from 'react-icons/fa';

interface StepStylistSelectionProps {
  selectedStylist: Stylist | null;
  availableStylists: Stylist[];
  loadingStylists: boolean;
  onSelectStylist: (stylist: Stylist) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepStylistSelection({
  selectedStylist,
  availableStylists,
  loadingStylists,
  onSelectStylist,
  onNext,
  onBack,
}: StepStylistSelectionProps) {
  const suggestedStylist = getSuggestedStylist(availableStylists);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Stylist</h2>
        <p className="text-gray-600">Choose your preferred stylist for this service</p>
      </div>

      {loadingStylists ? (
        <div className="flex items-center justify-center py-12">
          <FaSpinner className="animate-spin text-4xl text-[#8b5e3c]" />
        </div>
      ) : (
        <>
          {/* Suggested Stylist Banner */}
          {suggestedStylist && <SuggestedStylistBanner stylist={suggestedStylist} />}

          {/* Stylist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableStylists.map((stylist) => (
              <StylistCard
                key={stylist.id}
                stylist={stylist}
                isSelected={selectedStylist?.id === stylist.id}
                onSelect={onSelectStylist}
              />
            ))}
          </div>

          {availableStylists.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No stylists available for the selected time.</p>
              <p className="text-sm mt-2">Please go back and choose a different time slot.</p>
            </div>
          )}
        </>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedStylist}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            selectedStylist
              ? 'bg-[#8b5e3c] text-white hover:bg-[#3d2817]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next: Review Booking
        </button>
      </div>
    </div>
  );
}
