'use client';

import React from 'react';

export default function InstagramGalleryManagement() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Instagram Gallery</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors cursor-pointer">
            <div className="text-5xl mb-3">📷</div>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              Upload Image {index + 1}
            </button>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
        💾 Save Gallery
      </button>
    </div>
  );
}
