'use client';

import { useState, useEffect } from 'react';
import { Service } from '../types/booking';
import { Stylist } from '../data/stylists';
import { getAvailableTimeSlots, getAvailableStylists } from '../api/booking';

export const useBookingFlow = (initialContactInfo?: {
  name: string;
  email: string;
  phone: string;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [contactInfo, setContactInfo] = useState(
    initialContactInfo || { name: '', email: '', phone: '' }
  );

  const [availableTimeSlots, setAvailableTimeSlots] = useState<
    { time: string; available: boolean }[]
  >([]);
  const [availableStylists, setAvailableStylists] = useState<Stylist[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [loadingStylists, setLoadingStylists] = useState(false);

  // Fetch available time slots when service and date are selected
  useEffect(() => {
    if (selectedService && selectedDate) {
      setLoadingSlots(true);
      getAvailableTimeSlots(selectedDate, selectedService.id)
        .then((slots) => {
          setAvailableTimeSlots(slots);
          setLoadingSlots(false);
        })
        .catch((error) => {
          console.error('Error fetching time slots:', error);
          setLoadingSlots(false);
        });
    }
  }, [selectedService, selectedDate]);

  // Fetch available stylists when service, date, and time are selected
  useEffect(() => {
    if (selectedService && selectedDate && selectedTime) {
      setLoadingStylists(true);
      getAvailableStylists(selectedService.id, selectedDate, selectedTime)
        .then((stylists) => {
          setAvailableStylists(stylists);
          setLoadingStylists(false);
        })
        .catch((error) => {
          console.error('Error fetching stylists:', error);
          setLoadingStylists(false);
        });
    }
  }, [selectedService, selectedDate, selectedTime]);

  const canProceedToNextStep = (): boolean => {
    switch (currentStep) {
      case 1:
        return !!selectedService;
      case 2:
        return !!selectedDate && !!selectedTime;
      case 3:
        return !!selectedStylist;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const goToNextStep = () => {
    if (canProceedToNextStep() && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 4) {
      setCurrentStep(step);
    }
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedStylist(null);
    setAvailableTimeSlots([]);
    setAvailableStylists([]);
  };

  return {
    // Current state
    currentStep,
    selectedService,
    selectedDate,
    selectedTime,
    selectedStylist,
    contactInfo,
    availableTimeSlots,
    availableStylists,
    loadingSlots,
    loadingStylists,

    // Setters
    setSelectedService,
    setSelectedDate,
    setSelectedTime,
    setSelectedStylist,
    setContactInfo,

    // Navigation
    canProceedToNextStep,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    resetBooking,
  };
};
