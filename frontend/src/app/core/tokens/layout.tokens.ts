import { InjectionToken } from '@angular/core';

export type LayoutArea = 'admin' | 'user';

export const CURRENT_LAYOUT_AREA = new InjectionToken<LayoutArea>(
  'CURRENT_LAYOUT_AREA'
);