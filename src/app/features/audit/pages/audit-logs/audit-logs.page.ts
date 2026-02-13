import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

import { SharedUiImports } from '../../../../shared/shared-ui.imports';
import { TableColumn } from '../../../../shared/ui/table/table.types';
import { TableEngine } from '../../../../shared/ui/table/table.engine';

import { ApiService } from '../../../../infra/api/api.service';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

interface AuditLogRow {
  action: string;
  user: string;
  ip: string;
  timestamp: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SharedUiImports,
  ],
  templateUrl: './audit-logs.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditLogsPage implements OnInit {
  private api = inject(ApiService);
  private toast = inject(ToastService);

  loading = signal(false);

  engine = new TableEngine<AuditLogRow>([]);
  query = signal('');

  columns: TableColumn<AuditLogRow>[] = [
    { key: 'action', label: 'Action' },
    { key: 'user', label: 'User' },
    { key: 'ip', label: 'IP Address' },
    { key: 'timestamp', label: 'Timestamp' },
  ];

  async ngOnInit() {
    await this.load();
  }

  async load() {
    try {
      this.loading.set(true);

      const data = await firstValueFrom(
        this.api.get<AuditLogRow[]>('/audit/logs')
      );

      this.engine.setData(data ?? []);
    } catch {
      this.toast.show('Failed to load audit logs');
    } finally {
      this.loading.set(false);
    }
  }

  onSearch(value: string) {
    this.query.set(value.toLowerCase());

    const q = this.query();

    const filtered = this.engine.rows.filter(row =>
      row.action.toLowerCase().includes(q) ||
      row.user.toLowerCase().includes(q) ||
      row.ip.toLowerCase().includes(q) ||
      row.timestamp.toLowerCase().includes(q)
    );

    this.engine.setData(filtered);
  }
}