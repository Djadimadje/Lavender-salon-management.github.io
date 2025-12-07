'use client';

import React from 'react';

export default function TestimonialsManagement() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          ➕ Add New Testimonial
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer Avatar
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer">
                <div className="text-4xl mb-2">👤</div>
                <button className="text-sm text-purple-600">Upload Photo</button>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <input
                type="text"
                placeholder="Customer Name"
                defaultValue="Michaela Hayden"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Time (e.g., 2 days ago)"
                defaultValue="2 days ago"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <textarea
            rows={4}
            placeholder="Testimonial text..."
            defaultValue="We are other and about hotels and services was heights: Professional! Spacious! Romantic!"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3"
          />

          <div className="flex justify-end gap-2">
            <button className="text-red-600 hover:text-red-700 font-medium">
              🗑️ Delete
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              💾 Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
