'use client';

import React from 'react';

export default function CashierDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cashier Dashboard</h1>
      <p className="text-gray-600 mb-4">Process payments and manage transactions</p>
      
      {/* Today's appointments */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Today&apos;s Appointments</h2>
        <p className="text-gray-500">Appointment list will be displayed here</p>
      </div>

      {/* Payment processing section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Process Payment</h2>
        <p className="text-gray-500">Payment form will be displayed here</p>
      </div>
    </div>
  );
}
