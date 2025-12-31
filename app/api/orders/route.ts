import { NextResponse } from 'next/server';
import { createOrder } from '@/lib/mockOrders';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const order = createOrder(body);
    return NextResponse.json({ id: order.id }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
