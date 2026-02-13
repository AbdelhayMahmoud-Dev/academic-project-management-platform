import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { AuthFacade } from '../../../../core/security/auth.facade';
import { ToastService } from '../../../../shared/ui/toast/toast.service';
import { SharedUiImports } from '../../../../shared/shared-ui.imports';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiImports,
  ],
  templateUrl: './login.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
  private fb = inject(FormBuilder);
  private auth = inject(AuthFacade);
  private router = inject(Router);
  private toast = inject(ToastService);

  loading = signal(false);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  async ngOnInit() {
    const isAuth = await firstValueFrom(this.auth.isAuthenticated());
    if (isAuth) this.router.navigate(['/']);
  }

  async submit() {
    if (this.form.invalid) {
      this.toast.show('Please enter valid credentials');
      return;
    }

    try {
      this.loading.set(true);

      await firstValueFrom(this.auth.login(this.form.value as any));
      await firstValueFrom(this.auth.loadUser());

      this.router.navigate(['/']);
    } catch {
      this.toast.show('Invalid credentials');
    } finally {
      this.loading.set(false);
    }
  }
}