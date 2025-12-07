import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration: number;
  image?: string;
  onBook?: () => void;
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  image,
  onBook,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-purple-600">${price}</span>
          <span className="text-gray-500">{duration} min</span>
        </div>
        {onBook && (
          <button
            onClick={onBook}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}
