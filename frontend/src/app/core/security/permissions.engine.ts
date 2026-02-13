import { Injectable, computed, inject } from '@angular/core';
import { AuthFacade } from './auth.facade';

@Injectable({ providedIn: 'root' })
export class PermissionsEngine {
  private readonly auth = inject(AuthFacade);

  /**
   * Permissions are derived from user role
   * because AppUser no longer contains `permissions` array.
   */
  private readonly permissions = computed<string[]>(() => {
    const user = this.auth.user();
    if (!user) return [];

    switch (user.role) {
      case 'ADMIN':
        return [
          'users.read',
          'users.write',
          'audit.read',
          'dashboard.view',
          'profile.view',
        ];

      case 'USER':
        return [
          'dashboard.view',
          'profile.view',
        ];

      default:
        return [];
    }
  });

  has(permission: string) {
    return computed<boolean>(() =>
      this.permissions().includes(permission)
    );
  }
}