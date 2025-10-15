export interface User {
  id: string;
  role: 'owner' | 'provider';
  phone: string;
  displayName: string;
  createdAt: Date;
  whatsapp?: {
    businessNumber: string;
    wabaId: string;
    status: 'Connected' | 'Disconnected';
  };
}

export interface Property {
  id: string;
  name: string;
  address: string;
  unitCount: number;
  ownerId: string;
  assignedProviders: AssignedProvider[];
}

export interface AssignedProvider {
  providerId: string;
  trades: string[];
  businessName: string;
  addedAt: Date;
}

export interface Unit {
  id: string;
  propertyId: string;
  label: string;
  tenant?: Tenant;
  stats: {
    receiptsCount: number;
    openTickets: number;
  };
}

export interface Tenant {
  name: string;
  phone: string;
  assignedAt: Date;
  active: boolean;
}

export interface Receipt {
  id: string;
  unitId: string;
  amount: number;
  currency: string;
  paidOn: Date;
  rentMonth: string;
  method: string;
  referenceNumber?: string;
  status: 'parsed' | 'verified' | 'needs_review';
  tenant: string;
  property: string;
}

export interface Ticket {
  id: string;
  unitId: string;
  category: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'on_hold' | 'completed';
  providerId?: string;
  assignedAt?: Date;
  completedAt?: Date;
  tenant: string;
  property: string;
  unit: string;
  updates: TicketUpdate[];
  invoice?: Invoice;
}

export interface TicketUpdate {
  at: Date;
  by: string;
  note: string;
  photos?: string[];
}

export interface Invoice {
  lines: InvoiceLine[];
  total: number;
}

export interface InvoiceLine {
  description: string;
  qty: number;
  rate: number;
  amount: number;
}

export interface ServiceProvider {
  id: string;
  businessName: string;
  contactPhone: string;
  trades: string[];
  rating: number;
  assignedBuildings: AssignedBuilding[];
}

export interface AssignedBuilding {
  propertyId: string;
  propertyName: string;
  ownerId: string;
  ownerName: string;
  since: Date;
  openTickets: number;
}

export interface DashboardMetrics {
  totalReceipts: number;
  totalAmount: number;
  openTickets: number;
  thisMonth: string;
}