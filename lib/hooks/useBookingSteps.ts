'use client';

import { useState } from 'react';

interface BookingData {
  serviceId?: string;
  date?: string;
  time?: string;
  stylistId?: string;
}

export const useBookingSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({});

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    setCurrentStep(Math.max(1, Math.min(step, 4)));
  };

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setBookingData({});
  };

  return {
    currentStep,
    bookingData,
    nextStep,
    prevStep,
    goToStep,
    updateBookingData,
    resetBooking,
  };
};
