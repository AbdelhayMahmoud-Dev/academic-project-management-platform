import { Injectable } from '@angular/core';
import { AuthRepository } from './auth.repository';
import { TokenManager } from './token.manager';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RefreshService {
  constructor(
    private repo: AuthRepository,
    private token: TokenManager
  ) {}

  refresh() {
    const refreshToken = this.token.getRefreshToken()!;
    return this.repo.refresh(refreshToken).pipe(
      tap(token => this.token.set(token))
    );
  }
}