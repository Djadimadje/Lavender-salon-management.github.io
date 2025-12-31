type Order = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  items?: any[];
  total?: number;
  createdAt?: string;
};

const orders = new Map<string, Order>();

export function createOrder(data: Partial<Order>) {
  const id = `ORD${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const order: Order = {
    id,
    name: data.name,
    email: data.email,
    phone: data.phone,
    items: data.items || [],
    total: data.total || 0,
    createdAt: new Date().toISOString(),
  };
  orders.set(id, order);
  return order;
}

export function getOrder(id: string) {
  return orders.get(id) || null;
}
