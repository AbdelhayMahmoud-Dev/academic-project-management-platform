import { Injectable } from '@angular/core';
import { AuthToken } from './models/token.model';

@Injectable({ providedIn: 'root' })
export class TokenManager {
  private ACCESS = 'ap_access';
  private REFRESH = 'ap_refresh';
  private EXP = 'ap_exp';

  set(token: AuthToken) {
    localStorage.setItem(this.ACCESS, token.accessToken);
    localStorage.setItem(this.REFRESH, token.refreshToken);
    localStorage.setItem(this.EXP, token.expiresAt.toString());
  }

  getAccessToken() {
    return localStorage.getItem(this.ACCESS);
  }

  getRefreshToken() {
    return localStorage.getItem(this.REFRESH);
  }

  isExpired(): boolean {
    const exp = Number(localStorage.getItem(this.EXP));
    return Date.now() > exp;
  }

  clear() {
    localStorage.removeItem(this.ACCESS);
    localStorage.removeItem(this.REFRESH);
    localStorage.removeItem(this.EXP);
  }
}