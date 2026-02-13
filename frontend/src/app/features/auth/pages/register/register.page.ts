import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { ApiService } from '../../../../infra/api/api.service';
import { ToastService } from '../../../../shared/ui/toast/toast.service';
import { SharedUiImports } from '../../../../shared/shared-ui.imports';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiImports,
  ],
  templateUrl: './register.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private toast = inject(ToastService);
  private router = inject(Router);

  loading = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  async submit() {
    if (this.form.invalid) {
      this.toast.show('Please fill all required fields');
      return;
    }

    const { password, confirmPassword } = this.form.value;

    if (password !== confirmPassword) {
      this.toast.show('Passwords do not match');
      return;
    }

    try {
      this.loading.set(true);

      await firstValueFrom(
        this.api.post('/auth/register', {
          name: this.form.value.name,
          email: this.form.value.email,
          password: this.form.value.password,
        })
      );

      this.toast.show('Account created successfully');
      this.router.navigate(['/auth/login']);
    } catch {
      this.toast.show('Registration failed');
    } finally {
      this.loading.set(false);
    }
  }
}