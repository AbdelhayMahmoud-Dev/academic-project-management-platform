import { Injectable } from '@angular/core';

const TOKEN_KEY = 'app_token';

@Injectable({ providedIn: 'root' })
export class TokenService {
  get(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  set(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  clear() {
    localStorage.removeItem(TOKEN_KEY);
  }

  exists(): boolean {
    return !!this.get();
  }
}