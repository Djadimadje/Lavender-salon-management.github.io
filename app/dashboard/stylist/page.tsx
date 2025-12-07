'use client';

import React from 'react';

export default function StylistDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Stylist Dashboard</h1>
      <p className="text-gray-600 mb-4">View your schedule and manage appointments</p>
      
      {/* Today's schedule */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Today&apos;s Schedule</h2>
        <p className="text-gray-500">Your appointments will be displayed here</p>
      </div>

      {/* Availability management */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Manage Availability</h2>
        <p className="text-gray-500">Set your working hours and time off</p>
      </div>
    </div>
  );
}
