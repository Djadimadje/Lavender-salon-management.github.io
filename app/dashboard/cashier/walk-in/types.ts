export interface WalkInCustomer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  stylist: string;
  preferredTime: string;
  notes?: string;
  registeredAt: string;
  status: 'waiting' | 'in-service' | 'completed';
}

export interface WalkInFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  stylist: string;
  preferredTime: string;
  notes: string;
}
