export function enforceTenant(
  resourceTenantId: string,
  userTenantId: string
) {
  if (resourceTenantId !== userTenantId) {
    throw new Error('Tenant isolation violation');
  }
}