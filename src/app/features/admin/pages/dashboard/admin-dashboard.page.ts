import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { SharedUiImports } from '../../../../shared/shared-ui.imports';
import { ApiService } from '../../../../infra/api/api.service';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

interface AdminStat {
  label: string;
  value: number;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SharedUiImports,
  ],
  templateUrl: './admin-dashboard.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminDashboardPage implements OnInit {
  private api = inject(ApiService);
  private toast = inject(ToastService);

  loading = signal(false);
  stats = signal<AdminStat[]>([]);

  async ngOnInit() {
    await this.load();
  }

  private async load() {
    try {
      this.loading.set(true);

      const data = await firstValueFrom(
        this.api.get<AdminStat[]>('/admin/dashboard')
      );

      this.stats.set(data ?? []);
    } catch {
      this.stats.set([]);
      this.toast.show('Failed to load dashboard data');
    } finally {
      this.loading.set(false);
    }
  }
}