'use client';

import React, { useState } from 'react';
import HeroSectionManagement from './hero_section/HeroSectionManagement';
import ServiceCardsManagement from './service_cards/ServiceCardsManagement';
import TestimonialsManagement from './testimonials/TestimonialsManagement';
import ShopProductsManagement from './shop_products/ShopProductsManagement';
import InstagramGalleryManagement from './instagram_gallery/InstagramGalleryManagement';

export default function ContentManagementPage() {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Content Management</h1>
      <p className="text-gray-600 mb-8">Manage homepage images, text, and sections</p>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['hero', 'services', 'testimonials', 'shop', 'instagram'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium capitalize`}
              >
                {tab} Section
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section Management */}
      {activeTab === 'hero' && <HeroSectionManagement />}

      {/* Services Section Management */}
      {activeTab === 'services' && <ServiceCardsManagement />}

      {/* Testimonials Management */}
      {activeTab === 'testimonials' && <TestimonialsManagement />}

      {/* Shop Section Management */}
      {activeTab === 'shop' && <ShopProductsManagement />}

      {/* Instagram Section Management */}
      {activeTab === 'instagram' && <InstagramGalleryManagement />}
    </div>
  );
}
