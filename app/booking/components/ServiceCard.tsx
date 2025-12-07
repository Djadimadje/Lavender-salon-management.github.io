import React from 'react';
import { Service } from '@/lib/types/booking';
import { FaClock, FaCheck } from 'react-icons/fa';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: (service: Service) => void;
}

export default function ServiceCard({ service, isSelected, onSelect }: ServiceCardProps) {
  return (
    <div
      onClick={() => onSelect(service)}
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

      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-[#f5ebe0] to-[#c9a961] flex items-center justify-center">
        <div className="text-6xl opacity-50">💇</div>
        {/* In production, use actual image: <img src={service.image} alt={service.name} className="w-full h-full object-cover" /> */}
      </div>

      {/* Service Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaClock className="text-[#8b5e3c]" />
            <span>{service.duration} min</span>
          </div>
          <div className="text-xl font-bold text-[#8b5e3c]">${service.price}</div>
        </div>
      </div>
    </div>
  );
}
