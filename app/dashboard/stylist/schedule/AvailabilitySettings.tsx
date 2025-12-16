'use client';

import { useState } from 'react';
import { FaClock, FaSave } from 'react-icons/fa';

interface DaySchedule {
  enabled: boolean;
  startTime: string;
  endTime: string;
}

type WeekSchedule = Record<string, DaySchedule>;

export default function AvailabilitySettings() {
  const [schedule, setSchedule] = useState<WeekSchedule>({
    Monday: { enabled: true, startTime: '09:00', endTime: '17:00' },
    Tuesday: { enabled: true, startTime: '09:00', endTime: '17:00' },
    Wednesday: { enabled: true, startTime: '09:00', endTime: '17:00' },
    Thursday: { enabled: true, startTime: '09:00', endTime: '17:00' },
    Friday: { enabled: true, startTime: '09:00', endTime: '17:00' },
    Saturday: { enabled: true, startTime: '10:00', endTime: '15:00' },
    Sunday: { enabled: false, startTime: '10:00', endTime: '15:00' },
  });

  const handleToggleDay = (day: string) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], enabled: !schedule[day].enabled },
    });
  };

  const handleTimeChange = (day: string, field: 'startTime' | 'endTime', value: string) => {
    setSchedule({
      ...schedule,
      [day]: { ...schedule[day], [field]: value },
    });
  };

  const handleSave = () => {
    // Mock save - in real app, send to API
    alert('Availability settings saved successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <FaClock className="text-[#8b5e3c] text-xl" />
        <h2 className="text-xl font-bold text-gray-900">Set Your Availability</h2>
      </div>

      <div className="space-y-3">
        {Object.entries(schedule).map(([day, settings]) => (
          <div key={day} className="flex items-center gap-4 p-4 border rounded-lg">
            <input
              type="checkbox"
              checked={settings.enabled}
              onChange={() => handleToggleDay(day)}
              className="w-5 h-5 text-[#8b5e3c] rounded focus:ring-[#c9a961]"
            />
            <span className="font-medium text-gray-900 w-24">{day}</span>
            {settings.enabled ? (
              <>
                <input
                  type="time"
                  value={settings.startTime}
                  onChange={(e) => handleTimeChange(day, 'startTime', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="time"
                  value={settings.endTime}
                  onChange={(e) => handleTimeChange(day, 'endTime', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
                />
              </>
            ) : (
              <span className="text-gray-400 italic">Not available</span>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-gradient-to-r from-[#8b5e3c] to-[#c9a961] text-white py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
      >
        <FaSave />
        <span>Save Availability</span>
      </button>
    </div>
  );
}
