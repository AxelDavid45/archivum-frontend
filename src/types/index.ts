export interface Client {
  id: string;
  rfc: string;
  name: string;
  email?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Package {
  id: string;
  clientId: string;
  trackingNumber: string;
  description: string;
  status: PackageStatus;
  createdAt: Date;
  updatedAt: Date;
  deliveredAt?: Date;
}

export enum PackageStatus {
  PENDING = "pending",
  IN_TRANSIT = "in_transit",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

export interface DashboardStats {
  totalClients: number;
  totalPackages: number;
  pendingPackages: number;
  deliveredPackages: number;
}
