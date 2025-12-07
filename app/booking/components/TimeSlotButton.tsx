import React from 'react';

interface TimeSlotButtonProps {
  time: string;
  available: boolean;
  isSelected: boolean;
  onSelect: (time: string) => void;
}

export default function TimeSlotButton({
  time,
  available,
  isSelected,
  onSelect,
}: TimeSlotButtonProps) {
  return (
    <button
      onClick={() => available && onSelect(time)}
      disabled={!available}
      className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
        isSelected
          ? 'bg-[#8b5e3c] text-white ring-2 ring-[#c9a961]'
          : available
          ? 'bg-white text-gray-900 border-2 border-gray-300 hover:border-[#8b5e3c] hover:text-[#8b5e3c]'
          : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
      }`}
    >
      {time}
    </button>
  );
}
