import { Injectable } from '@angular/core';
import { Store } from './store';

export interface UIStateModel {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
}

@Injectable({ providedIn: 'root' })
export class UIState extends Store<UIStateModel> {
  constructor() {
    super();
    this.reset({
      sidebarOpen: true,
      theme: 'dark',
    });
  }

  toggleSidebar() {
    const current = this.get().sidebarOpen;
    this.set({ sidebarOpen: !current });
  }

  setTheme(theme: 'light' | 'dark') {
    this.set({ theme });
  }
}