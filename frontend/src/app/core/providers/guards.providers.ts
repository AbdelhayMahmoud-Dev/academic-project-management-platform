import { Provider } from '@angular/core';
import { authGuard } from '../auth/auth.guard';

export const GUARDS_PROVIDERS: Provider[] = [
  {
    provide: 'AUTH_GUARD',
    useValue: authGuard,
  },
];