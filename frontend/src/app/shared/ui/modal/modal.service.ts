import { Injectable, signal } from '@angular/core';
import { ModalConfig } from './modal.types';

@Injectable({ providedIn: 'root' })
export class ModalService {
  modal = signal<ModalConfig | null>(null);

  open(config: ModalConfig) {
    this.modal.set(config);
  }

  close() {
    this.modal.set(null);
  }
}