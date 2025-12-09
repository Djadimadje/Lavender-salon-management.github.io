'use client';

import React from 'react';

export default function StylistDashboardPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3d2817] to-[#8b5e3c] text-white p-4 md:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Stylist Dashboard</h1>
        <p className="text-gray-200 text-sm md:text-base">View your schedule and manage appointments</p>
      </div>
      
      {/* Today's schedule */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Today&apos;s Schedule</h2>
        <p className="text-gray-500 text-sm md:text-base">Your appointments will be displayed here</p>
      </div>

      {/* Availability management */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Manage Availability</h2>
        <p className="text-gray-500 text-sm md:text-base">Set your working hours and time off</p>
      </div>
    </div>
  );
}
