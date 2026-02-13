import { HttpInterceptorFn } from '@angular/common/http';

export const tenantInterceptor: HttpInterceptorFn = (req, next) => {
  const tenantId = localStorage.getItem('tenant_id');

  if (tenantId) {
    req = req.clone({
      setHeaders: {
        'X-Tenant-Id': tenantId,
      },
    });
  }

  return next(req);
};