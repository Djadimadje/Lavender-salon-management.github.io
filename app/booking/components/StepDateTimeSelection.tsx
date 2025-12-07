import React, { useState } from 'react';
import TimeSlotButton from './TimeSlotButton';
import { FaSpinner, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface StepDateTimeSelectionProps {
  selectedDate: string | null;
  selectedTime: string | null;
  availableTimeSlots: { time: string; available: boolean }[];
  loadingSlots: boolean;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepDateTimeSelection({
  selectedDate,
  selectedTime,
  availableTimeSlots,
  loadingSlots,
  onSelectDate,
  onSelectTime,
  onNext,
  onBack,
}: StepDateTimeSelectionProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday
    
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      date.setHours(0, 0, 0, 0);
      const isPast = date < today;
      const dateString = date.toISOString().split('T')[0];
      
      days.push({
        day,
        date: dateString,
        isPast,
        isToday: date.getTime() === today.getTime(),
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const goToPreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() - 1);
    
    // Don't go before current month
    const today = new Date();
    if (newMonth.getMonth() < today.getMonth() && newMonth.getFullYear() <= today.getFullYear()) {
      return;
    }
    
    setCurrentMonth(newMonth);
  };

  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  const canGoPrevious = () => {
    const today = new Date();
    return currentMonth.getMonth() > today.getMonth() || currentMonth.getFullYear() > today.getFullYear();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Date & Time</h2>
        <p className="text-gray-600">Choose your preferred appointment date and time</p>
      </div>

      {/* Calendar */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Date</h3>
        
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={goToPreviousMonth}
            disabled={!canGoPrevious()}
            className={`p-2 rounded-lg ${
              canGoPrevious()
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <FaChevronLeft />
          </button>
          
          <h4 className="text-lg font-semibold text-gray-900">{monthName}</h4>
          
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((dayInfo, index) => {
              if (!dayInfo) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }
              
              const isSelected = selectedDate === dayInfo.date;
              
              return (
                <button
                  key={dayInfo.date}
                  onClick={() => !dayInfo.isPast && onSelectDate(dayInfo.date)}
                  disabled={dayInfo.isPast}
                  className={`aspect-square p-2 rounded-lg font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#8b5e3c] text-white ring-2 ring-[#c9a961]'
                      : dayInfo.isPast
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : dayInfo.isToday
                      ? 'bg-[#c9a961]/20 text-gray-900 border-2 border-[#c9a961] hover:bg-[#c9a961]/30'
                      : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-[#8b5e3c] hover:bg-gray-50'
                  }`}
                >
                  {dayInfo.day}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Time</h3>
          
          {loadingSlots ? (
            <div className="flex items-center justify-center py-12">
              <FaSpinner className="animate-spin text-4xl text-[#8b5e3c]" />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {availableTimeSlots.map((slot) => (
                <TimeSlotButton
                  key={slot.time}
                  time={slot.time}
                  available={slot.available}
                  isSelected={selectedTime === slot.time}
                  onSelect={onSelectTime}
                />
              ))}
            </div>
          )}
        </div>
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
          disabled={!selectedDate || !selectedTime}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            selectedDate && selectedTime
              ? 'bg-[#8b5e3c] text-white hover:bg-[#3d2817]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next: Select Stylist
        </button>
      </div>
    </div>
  );
}
