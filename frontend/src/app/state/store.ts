import { signal } from '@angular/core';

export class Store<T extends object> {
  private state = signal<T>({} as T);

  set(value: Partial<T>) {
    this.state.update(prev => ({ ...prev, ...value }));
  }

  get() {
    return this.state();
  }

  select<K extends keyof T>(key: K) {
    return () => this.state()[key];
  }

  reset(initial: T) {
    this.state.set(initial);
  }
}