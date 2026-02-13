import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { SharedUiImports } from '../../../../shared/shared-ui.imports';
import { TableEngine } from '../../../../shared/ui/table/table.engine';
import { TableColumn } from '../../../../shared/ui/table/table.types';

import { ApiService } from '../../../../infra/api/api.service';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

interface DashboardStat {
  label: string;
  value: number;
}

interface RecentTask {
  title: string;
  status: string;
  dueDate: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SharedUiImports,
  ],
  templateUrl: './user-dashboard.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDashboardPage implements OnInit {
  private api = inject(ApiService);
  private toast = inject(ToastService);

  loading = signal(false);

  stats = signal<DashboardStat[]>([]);

  tasksEngine = new TableEngine<RecentTask>([]);

  taskColumns: TableColumn<RecentTask>[] = [
    { key: 'title', label: 'Task' },
    { key: 'status', label: 'Status' },
    { key: 'dueDate', label: 'Due Date' },
  ];

  async ngOnInit() {
    await this.load();
  }

  async load() {
    try {
      this.loading.set(true);

      const [stats, tasks] = await Promise.all([
        firstValueFrom(this.api.get<DashboardStat[]>('/user/stats')),
        firstValueFrom(this.api.get<RecentTask[]>('/user/recent-tasks')),
      ]);

      this.stats.set(stats ?? []);
      this.tasksEngine.setData(tasks ?? []);
    } catch {
      this.toast.show('Failed to load dashboard');
      this.stats.set([]);
      this.tasksEngine.setData([]);
    } finally {
      this.loading.set(false);
    }
  }
}