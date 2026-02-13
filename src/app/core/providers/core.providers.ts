import { Provider } from '@angular/core';
import { tokenInterceptor } from '../auth/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const CORE_PROVIDERS: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useValue: tokenInterceptor, multi: true },
];