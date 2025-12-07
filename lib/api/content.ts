/**
 * Content Management API Service
 * Handles all content-related API calls for the admin dashboard
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface HeroSectionData {
  mainImage?: File | null;
  overlayImage?: File | null;
  title: string;
  description: string;
}

interface ServiceCard {
  id?: string;
  name: string;
  image?: File | null;
}

interface Testimonial {
  id?: string;
  customerName: string;
  avatar?: File | null;
  time: string;
  text: string;
}

interface ShopProduct {
  id?: string;
  name: string;
  price: string;
  discount?: string;
  image?: File | null;
}

interface InstagramImage {
  id?: string;
  image?: File | null;
  position: number;
}

/**
 * Uploads a file to the server
 */
async function uploadFile(file: File, folder: string): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('folder', folder);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.url;
}

/**
 * Updates the hero section content
 */
export async function updateHeroSection(data: HeroSectionData): Promise<void> {
  try {
    const payload: Record<string, any> = {
      title: data.title,
      description: data.description,
    };

    // Upload images if provided
    if (data.mainImage) {
      payload.mainImageUrl = await uploadFile(data.mainImage, 'hero');
    }
    if (data.overlayImage) {
      payload.overlayImageUrl = await uploadFile(data.overlayImage, 'hero');
    }

    const response = await fetch(`${API_BASE_URL}/content/hero`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to update hero section: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error updating hero section:', error);
    throw error;
  }
}

/**
 * Updates service cards
 */
export async function updateServiceCards(services: ServiceCard[]): Promise<void> {
  try {
    const uploadedServices = await Promise.all(
      services.map(async (service) => {
        const payload: Record<string, any> = {
          name: service.name,
        };

        if (service.image) {
          payload.imageUrl = await uploadFile(service.image, 'services');
        }

        return payload;
      })
    );

    const response = await fetch(`${API_BASE_URL}/content/services`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ services: uploadedServices }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update service cards: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error updating service cards:', error);
    throw error;
  }
}

/**
 * Creates a new testimonial
 */
export async function createTestimonial(testimonial: Testimonial): Promise<void> {
  try {
    const payload: Record<string, any> = {
      customerName: testimonial.customerName,
      time: testimonial.time,
      text: testimonial.text,
    };

    if (testimonial.avatar) {
      payload.avatarUrl = await uploadFile(testimonial.avatar, 'testimonials');
    }

    const response = await fetch(`${API_BASE_URL}/content/testimonials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to create testimonial: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error creating testimonial:', error);
    throw error;
  }
}

/**
 * Deletes a testimonial
 */
export async function deleteTestimonial(id: string): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/content/testimonials/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete testimonial: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
}

/**
 * Updates shop products
 */
export async function updateShopProducts(products: ShopProduct[]): Promise<void> {
  try {
    const uploadedProducts = await Promise.all(
      products.map(async (product) => {
        const payload: Record<string, any> = {
          name: product.name,
          price: product.price,
          discount: product.discount || '',
        };

        if (product.image) {
          payload.imageUrl = await uploadFile(product.image, 'products');
        }

        return payload;
      })
    );

    const response = await fetch(`${API_BASE_URL}/content/shop`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products: uploadedProducts }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update shop products: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error updating shop products:', error);
    throw error;
  }
}

/**
 * Updates Instagram gallery images
 */
export async function updateInstagramGallery(images: InstagramImage[]): Promise<void> {
  try {
    const uploadedImages = await Promise.all(
      images.map(async (img) => {
        if (!img.image) return null;

        const imageUrl = await uploadFile(img.image, 'instagram');
        return {
          position: img.position,
          imageUrl,
        };
      })
    );

    const filteredImages = uploadedImages.filter((img) => img !== null);

    const response = await fetch(`${API_BASE_URL}/content/instagram`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ images: filteredImages }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update Instagram gallery: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error updating Instagram gallery:', error);
    throw error;
  }
}
