import { Injectable, inject } from '@angular/core';
import { PermissionsEngine } from '../security/permissions.engine';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  private engine = inject(PermissionsEngine);

  has(permission: string): boolean {
    return this.engine.has(permission)();
  }

  hasAny(permissions: string[]): boolean {
    return permissions.some(p => this.engine.has(p)());
  }
}