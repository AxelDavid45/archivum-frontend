import { Client } from "@/types";
import { mockClients } from "./mock-data";

export async function getClients(): Promise<Client[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockClients;
}

export async function getClientById(id: string): Promise<Client | null> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockClients.find((client) => client.id === id) || null;
}

export async function getClientByRFC(rfc: string): Promise<Client | null> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockClients.find((client) => client.rfc === rfc) || null;
}
