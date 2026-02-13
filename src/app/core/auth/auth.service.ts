import { Injectable, signal, computed } from '@angular/core';
import { ApiService } from '../../infra/api/api.service';
import { AuthUser } from '../security/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly _user = signal<AuthUser | null>(null);
  private readonly _loading = signal<boolean>(false);

  constructor(private api: ApiService) {}

  // ==============================
  // Load current session user
  // ==============================
  async loadMe(): Promise<void> {
    try {
      this._loading.set(true);

      const user = await this.api
        .get<AuthUser>('/auth/me')
        .toPromise();

      this._user.set(user ?? null);

    } finally {
      this._loading.set(false);
    }
  }

  // ==============================
  // Signals
  // ==============================
  readonly user = computed(() => this._user());

  readonly isLoggedIn = computed(() => !!this._user());

  readonly isLoading = computed(() => this._loading());

  // ==============================
  // Auth actions
  // ==============================
  async login(payload: { email: string; password: string }): Promise<void> {
    await this.api.post('/auth/login', payload).toPromise();
    await this.loadMe();
  }

  async register(payload: any): Promise<void> {
    await this.api.post('/auth/register', payload).toPromise();
    await this.loadMe();
  }

  async logout(): Promise<void> {
    await this.api.post('/auth/logout', {}).toPromise();
    this._user.set(null);
  }
}