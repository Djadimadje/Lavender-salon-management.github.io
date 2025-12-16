'use client';

import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import WeeklyCalendar from './WeeklyCalendar';
import AvailabilitySettings from './AvailabilitySettings';

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="space-y-6">
      {/* Header */}
      <PageHeader 
        title="My Schedule" 
        description="Manage your calendar and availability"
      />

      {/* Weekly Calendar */}
      <WeeklyCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />

      {/* Availability Settings */}
      <AvailabilitySettings />
    </div>
  );
}
