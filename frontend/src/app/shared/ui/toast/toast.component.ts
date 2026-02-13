import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ToastService } from './toast.service';

@Component({
  selector: 'ds-toast',
  standalone: true,
  imports: [CommonModule, NgIf],
  template: `
    <div
      *ngIf="toast.message() as msg"
      class="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded shadow-lg z-50"
    >
      {{ msg }}
    </div>
  `,
})
export class ToastComponent {
  toast = inject(ToastService);
}