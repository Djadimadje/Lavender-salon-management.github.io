export interface Service {
  id: string;
  name: string;
  price: number;
}

export const services: Service[] = [
  { id: 'SRV001', name: 'Hair Styling', price: 85 },
  { id: 'SRV002', name: 'Spa Treatment', price: 150 },
  { id: 'SRV003', name: 'Nail Care', price: 45 },
  { id: 'SRV004', name: 'Makeup', price: 120 },
  { id: 'SRV005', name: 'Hair Coloring', price: 200 },
  { id: 'SRV006', name: 'Facial Treatment', price: 95 },
  { id: 'SRV007', name: 'Manicure & Pedicure', price: 75 },
  { id: 'SRV008', name: 'Hair Cut', price: 50 },
  { id: 'SRV009', name: 'Waxing', price: 60 },
  { id: 'SRV010', name: 'Massage', price: 130 },
];
