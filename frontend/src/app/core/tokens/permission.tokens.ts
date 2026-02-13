import { InjectionToken } from '@angular/core';

export const REQUIRED_PERMISSIONS = new InjectionToken<string[]>(
  'REQUIRED_PERMISSIONS'
);