'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import useImageUpload from '@/lib/hooks/useImageUpload';
import { updateHeroSection } from '@/lib/api/content';
import ImageSourceDialog from '../hero_section/ImageSourceDialog';

export default function HeroSectionManagement() {
  // Form state
  const [title, setTitle] = useState("Brand Essence:");
  const [description, setDescription] = useState(
    "Lavender Luxe Skincare blends the calming power of lavender with premium natural ingredients to deliver wellness, beauty..."
  );
  const [isSaving, setIsSaving] = useState(false);

  // Image upload hooks
  const mainHero = useImageUpload('/stylists/hero-treatment.jpg', {
    maxSizeMB: 2,
    onUploadError: (error) => alert(`Main image error: ${error.message}`),
  });

  const circularOverlay = useImageUpload('/stylists/face-treatment.jpg', {
    maxSizeMB: 1,
    onUploadError: (error) => alert(`Overlay image error: ${error.message}`),
  });

  /**
   * Handles save operation
   */
  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateHeroSection({
        mainImage: mainHero.file,
        overlayImage: circularOverlay.file,
        title,
        description,
      });
      alert('✅ Hero section updated successfully!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`❌ Failed to save: ${errorMessage}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Hero Section</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Main Hero Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Main Hero Image
          </label>
          <div 
            onClick={mainHero.handleClick}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors cursor-pointer"
          >
            <div className="mb-4">
              <Image
                src={mainHero.preview}
                alt="Current hero"
                width={400}
                height={300}
                className="mx-auto rounded"
              />
            </div>
            <button 
              type="button"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              📁 Change Image
            </button>
            <p className="text-xs text-gray-500 mt-2">Recommended: 800x600px, max 2MB</p>
          </div>
          {mainHero.error && (
            <p className="text-red-500 text-sm mt-2">{mainHero.error}</p>
          )}
          <input {...mainHero.inputProps} />
        </div>

        {/* Circular Overlay Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Circular Overlay Image
          </label>
          <div 
            onClick={circularOverlay.handleClick}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors cursor-pointer"
          >
            <div className="mb-4">
              <Image
                src={circularOverlay.preview}
                alt="Current overlay"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
            </div>
            <button 
              type="button"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              📁 Change Image
            </button>
            <p className="text-xs text-gray-500 mt-2">Recommended: 400x400px, max 1MB</p>
          </div>
          {circularOverlay.error && (
            <p className="text-red-500 text-sm mt-2">{circularOverlay.error}</p>
          )}
          <input {...circularOverlay.inputProps} />
        </div>
      </div>

      {/* Hero Text */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hero Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hero Description
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <button 
          onClick={handleSave}
          disabled={isSaving || mainHero.isUploading || circularOverlay.isUploading}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSaving ? '⏳ Saving...' : '💾 Save Changes'}
        </button>
      </div>

      {/* Image Source Dialog for Main Hero */}
      <ImageSourceDialog
        isOpen={mainHero.showSourceDialog}
        onClose={() => mainHero.setShowSourceDialog(false)}
        onLocalUpload={() => {
          mainHero.setShowSourceDialog(false);
          mainHero.inputProps.ref.current?.click();
        }}
        onGooglePhotos={mainHero.handleGooglePhotos}
      />

      {/* Image Source Dialog for Circular Overlay */}
      <ImageSourceDialog
        isOpen={circularOverlay.showSourceDialog}
        onClose={() => circularOverlay.setShowSourceDialog(false)}
        onLocalUpload={() => {
          circularOverlay.setShowSourceDialog(false);
          circularOverlay.inputProps.ref.current?.click();
        }}
        onGooglePhotos={circularOverlay.handleGooglePhotos}
      />
    </div>
  );
}
