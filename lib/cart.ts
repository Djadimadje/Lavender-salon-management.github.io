export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

const STORAGE_KEY = 'lavender_cart';

const safeParse = (raw: string | null) => {
  try {
    return raw ? JSON.parse(raw) as CartItem[] : [];
  } catch (e) {
    console.error('Failed to parse cart from localStorage', e);
    return [] as CartItem[];
  }
};

export const getCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  return safeParse(localStorage.getItem(STORAGE_KEY));
};

export const saveCart = (cart: CartItem[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('lavender:cart-updated', { detail: { cart } }));
  } catch (e) {
    console.error('Failed to save cart to localStorage', e);
  }
};

export const addToCart = (item: { id: number; name: string; price: number; image?: string }, qty = 1) => {
  const cart = getCart();
  const idx = cart.findIndex((it) => it.id === item.id);
  if (idx > -1) {
    cart[idx].qty = (cart[idx].qty || 0) + qty;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, qty: qty, image: item.image });
  }
  saveCart(cart);
  return cart;
};

export const removeFromCart = (id: number) => {
  const cart = getCart().filter((it) => it.id !== id);
  saveCart(cart);
  return cart;
};

export const clearCart = () => {
  saveCart([]);
};

export const getCartCount = () => {
  return getCart().reduce((sum, it) => sum + (it.qty || 0), 0);
};

export const subscribeCart = (cb: (cart: CartItem[]) => void) => {
  const handler = (e: Event) => {
    // CustomEvent detail contains cart
    try {
      const ce = e as CustomEvent;
      cb(ce.detail?.cart ?? getCart());
    } catch {
      cb(getCart());
    }
  };
  window.addEventListener('lavender:cart-updated', handler as EventListener);
  return () => window.removeEventListener('lavender:cart-updated', handler as EventListener);
};
