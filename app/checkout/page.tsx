import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Checkout - Lavender',
};

export default function CheckoutRootPage() {
  redirect('/shop/checkout');
}
