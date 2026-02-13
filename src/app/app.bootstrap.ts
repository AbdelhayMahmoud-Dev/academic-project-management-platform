import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, withRouterConfig, ROUTES } from '@angular/router';

import { CORE_PROVIDERS } from './core/providers/core.providers';
import { ENGINES_PROVIDERS } from './core/providers/engines.providers';
import { GUARDS_PROVIDERS } from './core/providers/guards.providers';

import { buildRoutes } from './core/app.routes';

// ⬇️ مهم جدًا جدًا جدًا
await import('./plugins/load-plugins');

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),

    ...CORE_PROVIDERS,
    ...ENGINES_PROVIDERS,
    ...GUARDS_PROVIDERS,

    provideRouter(
      [],
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),

    {
      provide: ROUTES,
      multi: true,
      useFactory: buildRoutes,
    },
  ],
};