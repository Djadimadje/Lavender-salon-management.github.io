import React from 'react';

interface ServiceCardProps {
  service: {
    name: string;
    preview: string;
  };
  index: number;
  onImageClick: (index: number) => void;
  onNameChange: (index: number, name: string) => void;
  onRemove?: (index: number) => void;
  showRemove?: boolean;
}

export default function ServiceCard({
  service,
  index,
  onImageClick,
  onNameChange,
  onRemove,
  showRemove = false,
}: ServiceCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 relative">
      {/* Remove button */}
      {showRemove && onRemove && (
        <button
          onClick={() => onRemove(index)}
          className="absolute top-2 right-2 text-red-600 hover:text-red-700 text-xl font-bold"
          title="Remove service"
        >
          ×
        </button>
      )}

      <h3 className="font-semibold mb-3">{service.name || 'New Service'}</h3>
      
      <div
        onClick={() => onImageClick(index)}
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-500 transition-colors cursor-pointer mb-3"
      >
        {service.preview ? (
          <img
            src={service.preview}
            alt={service.name}
            className="w-full h-32 object-cover rounded mb-2"
          />
        ) : (
          <div className="text-4xl mb-2">📷</div>
        )}
        <button
          type="button"
          className="text-sm text-purple-600 hover:text-purple-700 font-medium"
        >
          Change Image
        </button>
      </div>
      
      <input
        type="text"
        value={service.name}
        onChange={(e) => onNameChange(index, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
        placeholder="Service name"
      />
    </div>
  );
}
