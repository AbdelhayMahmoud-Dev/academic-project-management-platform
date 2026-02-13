
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionsEngine } from '../permissions.engine';

export const roleGuard: CanActivateFn = (route) => {
  const permissions = inject(PermissionsEngine);

  const required = route.data?.['permission'] as string | undefined;

  if (!required) return true;

  return permissions.has(required)();
};