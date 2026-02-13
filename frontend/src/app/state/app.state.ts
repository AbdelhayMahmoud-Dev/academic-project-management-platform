import { Injectable } from '@angular/core';
import { Store } from './store';

export interface AppStateModel {
  loading: boolean;
  initialized: boolean;
}

@Injectable({ providedIn: 'root' })
export class AppState extends Store<AppStateModel> {
  constructor() {
    super();
    this.reset({
      loading: false,
      initialized: false,
    });
  }

  setLoading(v: boolean) {
    this.set({ loading: v });
  }

  setInitialized(v: boolean) {
    this.set({ initialized: v });
  }
}