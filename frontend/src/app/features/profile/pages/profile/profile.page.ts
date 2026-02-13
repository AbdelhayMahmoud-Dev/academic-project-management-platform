import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { SharedUiImports } from '../../../../shared/shared-ui.imports';
import { ApiService } from '../../../../infra/api/api.service';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiImports,
  ],
  templateUrl: './profile.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private toast = inject(ToastService);

  loading = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [''],
  });

  async ngOnInit() {
    await this.load();
  }

  async load() {
    try {
      this.loading.set(true);

      const user = await firstValueFrom(this.api.get<any>('/user/me'));
      this.form.patchValue(user);
    } catch {
      this.toast.show('Failed to load profile');
    } finally {
      this.loading.set(false);
    }
  }

  async save() {
    if (this.form.invalid) {
      this.toast.show('Please enter valid data');
      return;
    }

    try {
      await firstValueFrom(this.api.put('/user/me', this.form.value));
      this.toast.show('Profile updated');
    } catch {
      this.toast.show('Failed to update profile');
    }
  }
}