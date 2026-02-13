export interface AuthUser {
  id: number;
  role: string;
  permissions: string[];
  tenantId?: string;
}