import { InjectionToken } from '@angular/core';
import { AuthUser } from '../security/models/user.model';

export const CURRENT_USER = new InjectionToken<AuthUser | null>(
  'CURRENT_USER'
);