'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Appointment {
  id: string;
  client: string;
  service: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface WeeklyCalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function WeeklyCalendar({ selectedDate, onDateChange }: WeeklyCalendarProps) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const mockAppointments: Record<string, Appointment[]> = {
    'Mon': [
      { id: '1', client: 'Sarah Johnson', service: 'Hair Styling', time: '09:00 AM', duration: 60, status: 'scheduled' },
      { id: '2', client: 'Michael Brown', service: 'Hair Cut', time: '11:00 AM', duration: 45, status: 'scheduled' },
    ],
    'Tue': [
      { id: '3', client: 'Emily Davis', service: 'Hair Coloring', time: '10:00 AM', duration: 90, status: 'scheduled' },
    ],
    'Wed': [
      { id: '4', client: 'James Wilson', service: 'Hair Styling', time: '02:00 PM', duration: 60, status: 'scheduled' },
      { id: '5', client: 'Lisa Anderson', service: 'Hair Cut', time: '04:00 PM', duration: 45, status: 'scheduled' },
    ],
    'Thu': [],
    'Fri': [
      { id: '6', client: 'David Martinez', service: 'Spa Treatment', time: '01:00 PM', duration: 120, status: 'scheduled' },
    ],
    'Sat': [
      { id: '7', client: 'Emma Thompson', service: 'Hair Styling', time: '10:00 AM', duration: 60, status: 'scheduled' },
      { id: '8', client: 'Robert Garcia', service: 'Hair Coloring', time: '12:00 PM', duration: 90, status: 'scheduled' },
    ],
    'Sun': [],
  };

  const handlePrevWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    onDateChange(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    onDateChange(newDate);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Week Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevWeek}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">
          Week of {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </h2>
        <button
          onClick={handleNextWeek}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="border rounded-lg p-3 min-h-[200px]">
            <h3 className="font-semibold text-center mb-3 text-gray-700 pb-2 border-b">
              {day}
            </h3>
            <div className="space-y-2">
              {mockAppointments[day].length > 0 ? (
                mockAppointments[day].map((apt) => (
                  <div
                    key={apt.id}
                    className="bg-[#8b5e3c]/10 border-l-4 border-[#8b5e3c] p-2 rounded text-xs"
                  >
                    <p className="font-semibold text-gray-800">{apt.time}</p>
                    <p className="text-gray-600">{apt.client}</p>
                    <p className="text-gray-500 text-[10px]">{apt.service}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center text-xs mt-4">No appointments</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
