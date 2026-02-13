import { Component, inject } from '@angular/core';
import { CommonModule, NgIf, NgComponentOutlet } from '@angular/common';
import { ModalService } from './modal.service';

@Component({
  selector: 'ds-modal-host',
  standalone: true,
  imports: [CommonModule, NgIf, NgComponentOutlet],
  template: `
    <div
      *ngIf="modal.modal() as m"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg w-[500px] p-6 shadow-lg">
        <h2 class="text-lg font-semibold mb-4">{{ m.title }}</h2>

        <ng-container *ngComponentOutlet="m.content"></ng-container>

        <div class="mt-6 text-right">
          <button
            class="px-4 py-2 bg-gray-800 text-white rounded"
            (click)="modal.close()"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ModalHostComponent {
  modal = inject(ModalService);
}