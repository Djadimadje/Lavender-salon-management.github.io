import { mockServices } from '@/lib/data/services';

export interface SearchResult {
  id: string;
  name: string;
  category?: string;     // 👈 optional
  price: number;
  image?: string;
  description?: string;
}


export async function searchServices(query: string): Promise<SearchResult[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));

  const searchTerm = query.trim().toLowerCase();

  if (!searchTerm) {
    return [];
  }

  const results = mockServices.filter((service) => {
    const name = service.name.toLowerCase();
    const category = service.category?.toLowerCase() ?? '';
    const description = service.description?.toLowerCase() ?? '';

    return (
      name.includes(searchTerm) ||
      category.includes(searchTerm) ||
      description.includes(searchTerm)
    );
  });

  return results.map((service) => ({
    id: String(service.id),
    name: service.name,
    category: service.category ?? 'Uncategorized',
    price: service.price,
    image: service.image,
    description: service.description,
  }));
}
