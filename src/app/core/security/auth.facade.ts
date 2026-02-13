import { Injectable, signal, computed } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AppUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthFacade {

  private _user = signal<AppUser | null>(null);

  user = computed(() => this._user());

  isAuthenticated(): Observable<boolean> {
    return of(!!this._user());
  }

  login(data: any): Observable<any> {
    // fake login for now
    this._user.set({
      id: 1,
      name: 'Admin',
      email: data.email,
      role: 'admin'
    });
    return of(true);
  }

  loadUser(): Observable<any> {
    return of(this._user());
  }

  logout() {
    this._user.set(null);
  }
}