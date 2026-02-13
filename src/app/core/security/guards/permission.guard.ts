import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionService } from '../../permissions/permission.service';

export const PermissionGuard: CanActivateFn = (route) => {
  const permissions = inject(PermissionService);

  const required = route.data?.['permissions'] as string[] | undefined;

  if (!required?.length) {
    return true;
  }

  return permissions.hasAny(required);
};