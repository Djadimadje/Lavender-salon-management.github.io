'use client';

import React, { useState, useEffect } from 'react';
import useImageUpload from '@/lib/hooks/useImageUpload';
import { updateShopProducts } from '@/lib/api/content';
import ImageSourceDialog from './ImageSourceDialog';


interface Product {
  name: string;
  price: string;
  discount: string;
  image: File | null;
  preview: string;
}

export default function ShopProductsManagement() {
  const defaultProducts = [
    { name: 'Face toner', price: '$45', discount: '-20%' },
    { name: 'Night cream', price: '$45', discount: '' },
    { name: 'Makeup base', price: '$45', discount: '' },
    { name: 'Make up brush', price: '$45', discount: '' },
  ];

  // State for products
  const [products, setProducts] = useState<Product[]>(
    defaultProducts.map((product) => ({
      ...product,
      image: null,
      preview: '',
    }))
  );
  const [isSaving, setIsSaving] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Image upload hook
  const imageUpload = useImageUpload('', {
    maxSizeMB: 2,
    onUploadSuccess: (previewUrl) => {
      if (activeImageIndex !== null) {
        updateProductField(activeImageIndex, 'preview', previewUrl);
      }
    },
    onUploadError: (error) => alert(`Image error: ${error.message}`),
  });

  /**
   * Updates a specific product field
   */
  const updateProductField = (index: number, field: keyof Product, value: any) => {
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    setProducts(updatedProducts);
  };

  /**
   * Opens image source dialog for specific product
   */
  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
    imageUpload.setShowSourceDialog(true);
  };

  /**
   * Handles local file upload
   */
  const handleLocalUpload = () => {
    imageUpload.setShowSourceDialog(false);
    imageUpload.inputProps.ref.current?.click();
  };

  /**
   * Updates product image when file is selected
   */
  useEffect(() => {
    if (imageUpload.file && activeImageIndex !== null) {
      updateProductField(activeImageIndex, 'image', imageUpload.file);
    }
  }, [imageUpload.file, activeImageIndex]);

  /**
   * Adds a new product to the list
   */
  const handleAddProduct = () => {
    setProducts([
      ...products,
      { name: '', price: '', discount: '', image: null, preview: '' },
    ]);
  };

  /**
   * Removes a product from the list
   */
  const handleRemoveProduct = (index: number) => {
    if (products.length <= 1) {
      alert('You must have at least one product');
      return;
    }
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  /**
   * Handles save operation
   */
  const handleSave = async () => {
    // Validate products
    const invalidProduct = products.find((p) => !p.name || !p.price);
    if (invalidProduct) {
      alert('Please fill in all product names and prices');
      return;
    }

    setIsSaving(true);
    try {
      const productData = products.map((product) => ({
        name: product.name,
        price: product.price,
        discount: product.discount,
        image: product.image,
      }));

      await updateShopProducts(productData);
      alert('✅ Shop products updated successfully!');
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
        <h2 className="text-2xl font-semibold">Shop Products</h2>
        <button
          onClick={handleAddProduct}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          ➕ Add New Product
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 relative">
            {/* Remove button */}
            {products.length > 1 && (
              <button
                onClick={() => handleRemoveProduct(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-700 text-xl"
                title="Remove product"
              >
                ×
              </button>
            )}

            {/* Image upload */}
            <div
              onClick={() => handleImageClick(index)}
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer mb-3 hover:border-purple-500 transition-colors"
            >
              {product.preview ? (
                <img
                  src={product.preview}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded mb-2"
                />
              ) : (
                <div className="text-4xl mb-2">📷</div>
              )}
              <button
                type="button"
                className="text-sm text-purple-600 hover:text-purple-700"
              >
                Change Image
              </button>
            </div>

            {/* Product name */}
            <input
              type="text"
              value={product.name}
              onChange={(e) => updateProductField(index, 'name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
              placeholder="Product name"
            />

            {/* Price */}
            <input
              type="text"
              value={product.price}
              onChange={(e) => updateProductField(index, 'price', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
              placeholder="Price (e.g., $45)"
            />

            {/* Discount */}
            <input
              type="text"
              value={product.discount}
              onChange={(e) => updateProductField(index, 'discount', e.target.value)}
              placeholder="Discount (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        disabled={isSaving || imageUpload.isUploading}
        className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSaving ? '⏳ Saving...' : '💾 Save All Products'}
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
