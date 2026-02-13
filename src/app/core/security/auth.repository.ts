import { Injectable } from '@angular/core';
import { ApiService } from '../../infra/api/api.service';
import { Observable } from 'rxjs';
import { AuthToken } from './models/token.model';
import { AuthUser } from './models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  constructor(private api: ApiService) {}

  login(payload: { email: string; password: string }): Observable<AuthToken> {
    return this.api.post('/auth/login', payload);
  }

  me(): Observable<AuthUser> {
    return this.api.get('/auth/me');
  }

  refresh(refreshToken: string): Observable<AuthToken> {
    return this.api.post('/auth/refresh', { refreshToken });
  }
}