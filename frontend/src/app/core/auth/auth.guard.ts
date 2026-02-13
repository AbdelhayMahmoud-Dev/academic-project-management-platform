import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthFacade } from '../security/auth.facade';
import { CURRENT_USER } from '../tokens/auth.tokens';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthFacade);
  const router = inject(Router);

  const user = auth.user();
  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};