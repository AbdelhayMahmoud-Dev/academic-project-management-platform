import { Injectable } from '@angular/core';
import { Store } from './store';
import { AuthUser } from '../core/security/models/user.model';

export interface AuthStateModel {
  user: AuthUser | null;
}

@Injectable({ providedIn: 'root' })
export class AuthState extends Store<AuthStateModel> {
  constructor() {
    super();
    this.reset({ user: null });
  }

  setUser(user: AuthUser) {
    this.set({ user });
  }

  clear() {
    this.set({ user: null });
  }
}