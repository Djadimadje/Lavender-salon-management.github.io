import React from 'react';
import { Service } from '@/lib/types/booking';
import { mockServices } from '@/lib/data/services';
import ServiceCard from './ServiceCard';

interface StepServiceSelectionProps {
  selectedService: Service | null;
  onSelectService: (service: Service) => void;
  onNext: () => void;
}

export default function StepServiceSelection({
  selectedService,
  onSelectService,
  onNext,
}: StepServiceSelectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Service</h2>
        <p className="text-gray-600">Choose the service you'd like to book</p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={selectedService?.id === service.id}
            onSelect={onSelectService}
          />
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-6">
        <button
          onClick={onNext}
          disabled={!selectedService}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            selectedService
              ? 'bg-[#8b5e3c] text-white hover:bg-[#3d2817]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next: Select Date & Time
        </button>
      </div>
    </div>
  );
}
