'use client';

import React, { useState, useEffect } from 'react';
import useImageUpload from '@/lib/hooks/useImageUpload';
import { updateServiceCards } from '@/lib/api/content';
import ImageSourceDialog from './ImageSourceDialog';
import ServiceCard from './ServiceCard';

interface Service {
  name: string;
  image: File | null;
  preview: string;
}

export default function ServiceCardsManagement() {
  const defaultServices = ['Make up', 'Hair care', 'Nails', 'Spa treatment'];
  
  // State for each service
  const [services, setServices] = useState<Service[]>(
    defaultServices.map((name) => ({
      name,
      image: null,
      preview: '',
    }))
  );
  const [isSaving, setIsSaving] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Image upload hook for the currently active image
  const imageUpload = useImageUpload('', {
    maxSizeMB: 2,
    onUploadSuccess: (previewUrl) => {
      if (activeImageIndex !== null) {
        const updatedServices = [...services];
        updatedServices[activeImageIndex].preview = previewUrl;
        setServices(updatedServices);
      }
    },
    onUploadError: (error) => alert(`Image error: ${error.message}`),
  });

  /**
   * Opens image source dialog for specific service
   */
  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
    imageUpload.setShowSourceDialog(true);
  };

  /**
   * Handles service name change
   */
  const handleNameChange = (index: number, name: string) => {
    const updatedServices = [...services];
    updatedServices[index].name = name;
    setServices(updatedServices);
  };

  /**
   * Handles local file upload
   */
  const handleLocalUpload = () => {
    imageUpload.setShowSourceDialog(false);
    imageUpload.inputProps.ref.current?.click();
  };

  /**
   * Updates service image when file is selected
   */
  useEffect(() => {
    if (imageUpload.file && activeImageIndex !== null) {
      const updatedServices = [...services];
      updatedServices[activeImageIndex].image = imageUpload.file;
      setServices(updatedServices);
    }
  }, [imageUpload.file, activeImageIndex]);

  /**
   * Adds a new service
   */
  const handleAddService = () => {
    setServices([...services, { name: '', image: null, preview: '' }]);
  };

  /**
   * Removes a service
   */
  const handleRemoveService = (index: number) => {
    if (services.length <= 1) {
      alert('You must have at least one service');
      return;
    }
    setServices(services.filter((_, i) => i !== index));
  };

  /**
   * Handles save operation
   */
  const handleSave = async () => {
    // Validate services
    const invalidService = services.find((s) => !s.name.trim());
    if (invalidService) {
      alert('Please fill in all service names');
      return;
    }

    setIsSaving(true);
    try {
      const serviceData = services.map((service) => ({
        name: service.name,
        image: service.image,
      }));

      await updateServiceCards(serviceData);
      alert('✅ Service cards updated successfully!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`❌ Failed to save: ${errorMessage}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Service Cards</h2>
        <button
          onClick={handleAddService}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          ➕ Add Service
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            onImageClick={handleImageClick}
            onNameChange={handleNameChange}
            onRemove={handleRemoveService}
            showRemove={services.length > 1}
          />
        ))}
      </div>

      <button 
        onClick={handleSave}
        disabled={isSaving || imageUpload.isUploading}
        className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSaving ? '⏳ Saving...' : '💾 Save All Services'}
      </button>

      {/* Hidden file input */}
      <input {...imageUpload.inputProps} />

      {/* Image Source Dialog */}
      <ImageSourceDialog
        isOpen={imageUpload.showSourceDialog}
        onClose={() => {
          imageUpload.setShowSourceDialog(false);
          setActiveImageIndex(null);
        }}
        onLocalUpload={handleLocalUpload}
        onGooglePhotos={() => {
          imageUpload.handleGooglePhotos();
          setActiveImageIndex(null);
        }}
      />
    </div>
  );
}
