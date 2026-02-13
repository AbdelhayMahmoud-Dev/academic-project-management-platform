import { UserRole } from './user-role.enum';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  tenantId: string;
  roles: UserRole[];
  permissions: string[];
}