import React from 'react';

interface ImageSourceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onLocalUpload: () => void;
  onGooglePhotos: () => void;
}

export default function ImageSourceDialog({
  isOpen,
  onClose,
  onLocalUpload,
  onGooglePhotos,
}: ImageSourceDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold mb-4">Choose Image Source</h3>
        <p className="text-gray-600 mb-6">Where would you like to upload the image from?</p>

        <div className="space-y-3">
          {/* Local Computer Option */}
          <button
            onClick={onLocalUpload}
            className="w-full flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all"
          >
            <div className="text-3xl">💻</div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Local Computer</p>
              <p className="text-sm text-gray-600">Upload from your device</p>
            </div>
          </button>

          {/* Google Photos Option */}
          <button
            onClick={onGooglePhotos}
            className="w-full flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all"
          >
            <div className="text-3xl">📷</div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Google Photos</p>
              <p className="text-sm text-gray-600">Select from Google Photos</p>
            </div>
          </button>
        </div>

        {/* Cancel Button */}
        <button
          onClick={onClose}
          className="w-full mt-4 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
