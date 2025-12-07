import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface BookingProgressProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: 'Service' },
  { number: 2, label: 'Date & Time' },
  { number: 3, label: 'Stylist' },
  { number: 4, label: 'Review' },
];

export default function BookingProgress({ currentStep }: BookingProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Circle */}
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  currentStep > step.number
                    ? 'bg-green-500 text-white'
                    : currentStep === step.number
                    ? 'bg-[#8b5e3c] text-white ring-4 ring-[#c9a961]/30'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {currentStep > step.number ? <FaCheck /> : step.number}
              </div>
              <p
                className={`mt-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {step.label}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                  currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
                }`}
                style={{ marginTop: '-24px' }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
