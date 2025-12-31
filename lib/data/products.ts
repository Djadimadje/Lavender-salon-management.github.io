export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export const products: Product[] = [
  { id: 1, name: 'Lavender Oil', price: 1500, image: '/pictures/toner.jpg', description: 'Premium lavender oil to soothe and relax.' },
  { id: 2, name: 'Silk Scarf', price: 2500, image: '/pictures/cream.jpg', description: 'Elegant silk scarf with a subtle lavender motif.' },
  { id: 3, name: 'Scented Candle', price: 800, image: '/pictures/makeup_base.jpg', description: 'Hand-poured scented candle for a calming atmosphere.' },
];

export const getProductById = (id: number) => products.find(p => p.id === id);
