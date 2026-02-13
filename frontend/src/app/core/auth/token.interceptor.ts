import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenManager } from '../security/token.manager';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenManager).getAccessToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req);
};