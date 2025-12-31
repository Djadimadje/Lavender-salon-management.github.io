import { NextResponse } from 'next/server';
import { getOrder } from '@/lib/mockOrders';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const order = getOrder(id);
  if (!order) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(order);
}
