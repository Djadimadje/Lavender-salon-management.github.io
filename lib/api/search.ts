import { mockServices } from '@/lib/data/services';

export interface SearchResult {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  description?: string;
}

export async function searchServices(query: string): Promise<SearchResult[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));

  const searchTerm = query.toLowerCase().trim();

  if (!searchTerm) {
    return [];
  }

  // Search through services
  const results = mockServices.filter((service) => {
    return (
      service.name.toLowerCase().includes(searchTerm) ||
      service.category.toLowerCase().includes(searchTerm) ||
      service.description.toLowerCase().includes(searchTerm)
    );
  });

  // Map to SearchResult format
  return results.map((service) => ({
    id: service.id.toString(),
    name: service.name,
    category: service.category,
    price: service.price,
    image: service.image,
    description: service.description,
  }));
}
