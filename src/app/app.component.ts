import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastComponent } from './shared/ui/toast/toast.component';
import { ModalHostComponent } from './shared/ui/modal/modal.host.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToastComponent,
    ModalHostComponent,
  ],
  template: `
    <ds-toast></ds-toast>
    <ds-modal-host></ds-modal-host>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}