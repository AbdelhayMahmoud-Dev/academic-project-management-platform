import { Injectable } from '@angular/core';
import { ToastService } from '../../shared/ui/toast/toast.service';

@Injectable({ providedIn: 'root' })
export class HttpErrorHandler {
  constructor(private toast: ToastService) {}

  handle(error: any) {
    this.toast.show(error?.error?.message || 'Request failed');
  }
}