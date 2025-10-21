import { DashboardStats, PackageStatus } from "@/types";
import { mockClients, mockPackages } from "./mock-data";

export async function getDashboardStats(): Promise<DashboardStats> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    totalClients: mockClients.length,
    totalPackages: mockPackages.length,
    pendingPackages: mockPackages.filter((pkg) => pkg.status === PackageStatus.PENDING).length,
    deliveredPackages: mockPackages.filter((pkg) => pkg.status === PackageStatus.DELIVERED).length,
  };
}
